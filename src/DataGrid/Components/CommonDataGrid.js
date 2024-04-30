import DataGrid, {  headerSortNameClassname, SelectColumn } from '@medplus/npm-data-grid';
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Dropdown } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { UncontrolledTooltip } from 'reactstrap';
import Validate from '../../LocalityComponent/helpers/Validate';
import Pagination from '../../Pagination/Pagination';
import { ChangeType, ColumnSubtype, ColumnType, FilterType, FunctionReturnType, FUNCTION_TYPE } from '../Utils/Constants';
import { exportToCsv, exportToXlsx } from '../Utils/DownloadUtils';
import { filterTypes } from '../Utils/Filters';
import CellTextEditor from './CellEditors/TextEditor';
import DateFilter from './FilterEditors/DateFilter';
import NumberFilter from './FilterEditors/NumberFilter';
import TextEditor from './FilterEditors/TextEditor';
import AmountFormatter from './Formatters/AmountFormatter';
import DateFormatter from './Formatters/DateFormatter';
import MenuFormatter from './Formatters/MenuFormatter';
import CustomColumnVisibleOptions from './UtilComponents/CustomColumnVisibleDropdown';
import RenderHeaderIcon from './Icons/RenderHeaderIcon';
import { flattenColumnsList, flattenGridColumnList } from '../Utils/Helpers';



/* function to check wheter we are at bottom while scrolling used for loadonScroll pagination info 
 */

const isAtBottom = ({ currentTarget }) => {
    return currentTarget.scrollTop > 0 &&  (currentTarget.scrollTop + 10 >= currentTarget.scrollHeight - currentTarget.clientHeight);
}

/* 
    Default comparator function used by the columns to sort the data based on the column Type
*/

const getComparator = (columnInfo) => {
    switch(columnInfo.columnType) {
        case ColumnType["string"] :
            return (a, b) => {
                if(a[columnInfo.rowDataKey] && b[columnInfo.rowDataKey])
                    return a[columnInfo.rowDataKey].localeCompare(b[columnInfo.rowDataKey]);
                if(a[columnInfo.rowDataKey])
                    return 1;
                if(b[columnInfo.rowDataKey])
                    return -1;
                return 0;
              };
        case ColumnType["number"] :
            return (a,b) => {
                if(a[columnInfo.rowDataKey] && b[columnInfo.rowDataKey])
                    return a[columnInfo.rowDataKey] - b[columnInfo.rowDataKey];
                if(a[columnInfo.rowDataKey])
                    return 1;
                if(b[columnInfo.rowDataKey])
                    return -1;
                return 0;
            }
        case ColumnType["date"] :
            return (a,b) => {
                if(a[columnInfo.rowDataKey] && b[columnInfo.rowDataKey])
                    return new Date(a[columnInfo.rowDataKey]).getTime() - new Date(b[columnInfo.rowDataKey]).getTime();
                if(a[columnInfo.rowDataKey])
                    return 1;
                if(b[columnInfo.rowDataKey])
                    return -1;
                return 0;
            }

        default :
            return (a,b) => 0;

    }
}



/* 

this takes list of expanded groupids and check if any groupid type is Number then trying to convert into string , so that 
sorting functionality works

*/

const handleExpandedGroupIdsKeys = (groupIds) => {
    return groupIds.map(groupId => {
        if(!isNaN(groupId)){
            return groupId+" ";
        }
        return groupId;
    });

}





const CommonDataGrid = React.forwardRef((props,ref) => {

    const {limit,isPaginationRequired,loadOnScroll,recordsPerPageList,initialPageNumber} = props.paginationInfo ? props.paginationInfo : {};
    const [sortColumns,setSortColumns] = useState(props.sortInfo ? props.sortInfo :[]);
    const [isDataLoading , setDataLoading] = useState(false);
    const [filters,setFilters] = useState(props.initialFilters ? props.initialFilters : {});
    const [pageNumber,setPageNumber] = useState(initialPageNumber ? initialPageNumber : 1);
    const [rows,setRows] = useState([...props.dataSet]);
    const [totalRecords,setTotalRecords] = useState(props.totalRowsCount);
    const [recordsLimit,setRecordsLimit] = useState(limit);
    const [editableRow,setEditableRow] = useState(undefined);
    const [expandedGroupIds, setExpandedGroupIds] = useState(() => new Set(props.defaultExpandedGroupIds ? handleExpandedGroupIdsKeys(props.defaultExpandedGroupIds) : []));
    const [columnOptionsMap, setColumnOptionsMap] = useState(props.columnOptionsMap ? props.columnOptionsMap : {});
    const [reCalculateWidth, setRecalculateWidth] = useState(false);
    const gridLocalRef = useRef(null);
    const CustomGridToolbar = props?.customGridToolbar?.component;
    const isInRbsModal = props.isInRbsModal;

    /**
     * useEffect runs whenever dataset props changes
     */
    useEffect(()=>{
        setRows([...props.dataSet]);
    },[props.dataSet]);

    /**
     * useEffect runs whenever defaultExpandedGroupIds props changes
     */

    useEffect(()=>{
        setExpandedGroupIds(new Set(props.defaultExpandedGroupIds ? handleExpandedGroupIdsKeys(props.defaultExpandedGroupIds) : []));
    },[props.defaultExpandedGroupIds]);

    /**
     * useEffect runs whenever totalRowsCount props changes
     */
    useEffect(() => {
        setTotalRecords(props.totalRowsCount);
    },[props.totalRowsCount]);

    /**
     * useEffect runs whenever limit props changes
     */

    useEffect(() => {
        setRecordsLimit(limit)
      },[limit]);


    /**
     * useEffect runs whenever reCalculateWidth state changes , it recalculates the column widths again
     */  

    useEffect(() => {
        if(reCalculateWidth) {
            gridLocalRef?.current.reCalculateColumnWidths();
            setRecalculateWidth(false);
        }
    },[reCalculateWidth])

    /**
     * useEffect runs whenever controlCustomColumnOptions true , the we update the state from the prop changes
     */ 

    useEffect(() => {
        if (props.controlCustomColumnOptions) {
            setColumnOptionsMap(props.columnOptionsMap ? props.columnOptionsMap : {});
        } 
    }, [props.controlCustomColumnOptions, props.columnOptionsMap])

   
   /**
     * it merges node data into multiple refs
     */
    const mergeRefs = (...refs) => {
        return node => {
            for (const ref of refs) {
                if (Validate().isNotEmpty(ref)) {
                    if (typeof ref == "function") {
                        ref(node);
                    } else {
                        ref.current = node;
                    }
                }
            }
        }
    }

    /**
     * It includes the following fuctions in ref
     */
    useImperativeHandle(ref, () => {
        return {
            filters,
            sortColumns,
            handleOnFilterChange,
            handleSortColumnChange,
            ...(gridLocalRef?.current ?? {})
        }
    }, [gridLocalRef?.current, filters, sortColumns, handleOnFilterChange, handleSortColumnChange]);

    /**
     * call back for whenver customcolumn options changes occur like hide/show column freezeleft or freeze right column
     * 
     * @param rowDataKey --- to identify which column has changed
     * @param columnOptionsMap ---- updated column optionsMap
     * @param reCalculateWidth ----- whether to recalculate the width again or not (for show or hide column recalculate width is required for freeze left or freeze right it is false)
     */

   

   

    const onColumnOptionsChange = useCallback((rowDataKey, columnOptionsMap, reCalculateWidth) => {
        if(props.controlCustomColumnOptions) {
            props.onColumnOptionChange ? props.onColumnOptionChange(rowDataKey, columnOptionsMap) : null;
        } else {
            setColumnOptionsMap(columnOptionsMap);
        }

        if(reCalculateWidth) {
            setRecalculateWidth(true);
        }
    },[props.controlCustomColumnOptions, setColumnOptionsMap, props.onColumnOptionChange]);

    const rowKeyGetter = useCallback((row)=>{
        if(props.idProperty) {
            return row[props.idProperty];
        } else {
            if(isPaginationRequired) {
                return ((pageNumber-1)*limit) + rows.indexOf(row);
            } 

            return  rows.indexOf(row);
            
        }
    },[props.idProperty , pageNumber , limit , isPaginationRequired ,rows]);

    /**
     * this flattents the columns if any column grouping is present
     */
    
    const flattenColumns =  useMemo(() => {
        return flattenColumnsList(props.columns);
    },[props.columns])
  
    /**
     * this will prepare the columns info as required for grid from the column props 
     */
    const columns = useMemo(()=>{

        const freezeColumns = [];

        const prepareColumnObject = (column ) => {

            const {width,rowDataKey,columnName,columnType,columnSubtype,isSortable,isEditable,customRowRenderingFunction,customheaderFunction,columnHeaderIcon,showFilter,filterEditor,cellClassName,filterCellClassName,headerCellClassName,cellClassNameFunction,isVisible,isFrozen,isPopoverRequired,bottomSummaryCellComponent,isSummaryColumnRequired,topSummaryCellComponent,isTopSummaryCellRequired,isToolTipRequired,toolTipKey,colSpan,showColumnMenu,customColumnVisibilityOption,childColumns,isGroup,groupFormatter,...rest} = column;

            let newColumn = {};
            newColumn['isVisible'] = typeof isVisible == "undefined" ? true : isVisible;
            newColumn['headerCellClass'] = headerCellClassName;
            newColumn['name'] = columnName
            if(isGroup) {
                if(childColumns) {
                    newColumn['children'] = [...childColumns.map(columnProp => prepareColumnObject(columnProp)).filter(column => !column.frozen)]
                }
                return newColumn;
            }
            newColumn = {...newColumn,...rest}
            let isColumnEditable = false;
            if(props.defaultColumnOptions && props.defaultColumnOptions.ISEDITABLE != undefined && props.defaultColumnOptions.ISEDITABLE != null) {
                isColumnEditable = props.defaultColumnOptions.ISEDITABLE;
            } else {
                isColumnEditable = isEditable;
            }

            newColumn['key'] = rowDataKey;
            newColumn['sortable'] = isSortable;
            newColumn['editable'] = isColumnEditable;
            newColumn['cellClass'] = cellClassName;
            newColumn['frozen'] = isFrozen;
            newColumn['width'] = width;
            newColumn['customColumnVisibilityOption'] = customColumnVisibilityOption;
            newColumn['showColumnMenu'] = showColumnMenu;
            if(isColumnEditable) {
                const customCellEditor = column.cellEditor;
                const columnEditorProps = column.defaultColumnEditorProps;
                if(customCellEditor && customCellEditor.type === FUNCTION_TYPE && customCellEditor.returnType === FunctionReturnType.REACT_NODE) {
                    newColumn['editor'] =props.callBackMap[customCellEditor.name];
                } else {
                    newColumn['editor'] = ({row,column,onRowChange,onClose}) => {
                        return  <CellTextEditor inputAttributes = {columnEditorProps? columnEditorProps : {}} selectedValue = {row[column.key]} onChange = {(e) => onRowChange({...row,[column.key] : e.target.value})} onBlur = {(e) => {onClose(true,false)}} />
                    };
                }
            }
            if(colSpan && colSpan.type === FUNCTION_TYPE && colSpan.returnType === FunctionReturnType.STRING) {
                const colSpanFunction = props.callBackMap[colSpan.name];
                newColumn['colSpan'] = colSpanFunction;
            }
            if(customRowRenderingFunction && customRowRenderingFunction.type === FUNCTION_TYPE && customRowRenderingFunction.returnType === FunctionReturnType.REACT_NODE) {
                newColumn['formatter'] = props.callBackMap[customRowRenderingFunction.name];
            } else if(columnType == ColumnType['number'] && columnSubtype === ColumnSubtype['amount'] ){
                newColumn['formatter'] = (props) => {
                    return <AmountFormatter data={props.row[rowDataKey]} decimalPlaces = {column?.amountDecimalPlaces}/>;
                }
            } else if(columnType == ColumnType['date']) {
                newColumn['formatter'] = (props) => {
                    return <DateFormatter date = {props.row[rowDataKey]} dateFormatStr = {column.dateFormatStr}/>;
                }
            } else if(isToolTipRequired) {

                newColumn['formatter'] = (props) => {
                    return <>
                        <span  id={`tooltip_${rowKeyGetter(props.row)}_${props.column.idx}`}>{props.row[props.column.key] ?? props.column.defaultColumnValue ?? ''}</span>
                        {(props.row[props.column.key] || (toolTipKey && props.row[toolTipKey] && props.row[toolTipKey])) &&
                            <UncontrolledTooltip placement="bottom" target={`tooltip_${rowKeyGetter(props.row)}_${props.column.idx}`}>
                                {toolTipKey && props.row[toolTipKey] ? props.row[toolTipKey] : props.row[props.column.key]}
                            </UncontrolledTooltip>
                        }
                    </>
                    
                }
            }

            if(groupFormatter && groupFormatter.type === FUNCTION_TYPE && groupFormatter.returnType === FunctionReturnType.REACT_NODE ) {
                newColumn['groupFormatter'] = props.callBackMap[groupFormatter.name]
            }

            if(customheaderFunction && customheaderFunction.type === FUNCTION_TYPE && customheaderFunction.returnType === FunctionReturnType.REACT_NODE) {
                newColumn['headerRenderer'] = (obj) => {
                    const customHeaderFunction = props.callBackMap[customheaderFunction.name];
                    const onSortColumnsChange = (sortColumns) => {
                        handleSortColumnChange(sortColumns);
                    }
                    return customHeaderFunction({...obj,columnOptionsMap,onColumnOptionsChange , sortColumns, onSortColumnsChange });
                }
            } else if(columnHeaderIcon || showColumnMenu) { 
                newColumn['headerRenderer'] = (props) => {
                    const {column} = props;
                    return (
                        <React.Fragment>
                            <div className={`d-flex align-items-center gap-2`}>                                                                                                                                    
                                <p className="flex-grow-1 text-truncate mb-0" title={column.name}>
                                    {column.name}
                                </p>
                                <div className="d-flex align-items-center gap-2">
                                    {columnHeaderIcon && <RenderHeaderIcon icon={columnHeaderIcon} />}
                                    {showColumnMenu && <MenuFormatter {...props} className={`${headerSortNameClassname} me-0`} columnOptionsMap = {columnOptionsMap} onColumnOptionsChange = {onColumnOptionsChange} sortColumns = {sortColumns} onSortColumnsChange= {handleSortColumnChange} />}
                                </div>                                
                            </div>
                        </React.Fragment>
                    );                    
                }
            }
            if(isPopoverRequired) {
                /* whenever any column cell required popover functionality onclick of cell then we need to set the style property overflow : unset for that popover to get that visibility
                    this if block handles that case , if isPopover is sent true then u need to pass customerRowRendering function with popOverFormatter component
                */
                const cellClassNameFunction = cellClassNameFunction && cellClassNameFunction.type === FUNCTION_TYPE && cellClassNameFunction.returnType === FunctionReturnType.STRING ? props.callBackMap[cellClassNameFunction.name] : undefined;
                newColumn['cellClass'] = (row) => {
                    let className = 'overflow-unset';
                    if(cellClassNameFunction) {
                        className = `${cellClass} ${cellClassNameFunction(row)}`;
                    }
                    return className;
                }

            } else if(cellClassNameFunction && cellClassNameFunction.type === FUNCTION_TYPE && cellClassNameFunction.returnType === FunctionReturnType.STRING ) {
                newColumn['cellClass'] =props.callBackMap[cellClassNameFunction.name];
            }
            if((showFilter && filters && filters[rowDataKey] && filters[rowDataKey].filterType) || isSummaryColumnRequired || isTopSummaryCellRequired) {
                newColumn['summaryCellClass'] = (row) => {
                    let filteredClassName = `${filterCellClassName ? filterCellClassName : ''}`;
                    if(showFilter && row["filteredRow_dataGrid"]) {
                        filteredClassName = `${filteredClassName} filteredInput`;
                    }
                    return filteredClassName;
                }
                const FilterEditorComponent = filterEditor && filterEditor.name ? props.callBackMap[filterEditor.name] : undefined;
                const BottomSummaryComponent = bottomSummaryCellComponent && bottomSummaryCellComponent.name ? props.callBackMap[bottomSummaryCellComponent.name] : undefined;
                const TopSummaryComponent = topSummaryCellComponent && topSummaryCellComponent.name ? props.callBackMap[topSummaryCellComponent.name] : undefined;
                newColumn['summaryFormatter'] = (props) => {
                    const {row,...rest} = props;
                    if(showFilter && row["filteredRow_dataGrid"]) {

                        if(filterEditor && filterEditor.type === FUNCTION_TYPE && filterEditor.returnType === FunctionReturnType.REACT_NODE) {
                            return <FilterEditorComponent column= {props.column} isCellSelected = {props.isCellSelected} filters = {filters} handleFilterChange ={handleOnFilterChange}/>;
                        }
                        const filterType = filters[rowDataKey].filterType;
                        switch(filterType) {
                            case FilterType['string'] :
                                return <TextEditor isInRbsModal={isInRbsModal || false} filters = {filters} column= {props.column} isCellSelected = {props.isCellSelected} handleFilterChange = {handleOnFilterChange} {...rest}/>
                            case  FilterType['number'] :
                                return <NumberFilter isInRbsModal={isInRbsModal || false} filters = {filters} column= {props.column} isCellSelected = {props.isCellSelected} handleFilterChange = {handleOnFilterChange} {...rest}/>
                            case FilterType['date'] :
                                return <DateFilter isInRbsModal={isInRbsModal || false} filters = {filters} column= {props.column} isCellSelected = {props.isCellSelected} handleFilterChange = {handleOnFilterChange} {...rest} />
                            default :
                                return <React.Fragment></React.Fragment>
                        }
                    } else if (isTopSummaryCellRequired && row["isTopSummaryRow_dataGrid"]) {
                        let modifiedRow = {...row};
                        delete modifiedRow['isTopSummaryRow_dataGrid']
                        if(TopSummaryComponent) {
                            return <TopSummaryComponent row= {modifiedRow} {...rest}/>
                        } else {
                            return <React.Fragment>
                                 {row[props.column.key]}
                            </React.Fragment>
                        }

                    } else if(isSummaryColumnRequired && row['isBottomSummaryRows_dataGrid']){
                        let modifiedRow = {...row};
                        delete modifiedRow['isBottomSummaryRows_dataGrid']
                        if(bottomSummaryCellComponent && bottomSummaryCellComponent.type === FUNCTION_TYPE && bottomSummaryCellComponent.returnType === FunctionReturnType.REACT_NODE) {
                            return <BottomSummaryComponent row= {modifiedRow} {...rest}/>
                        } else {
                            return <React.Fragment>
                                 {row[props.column.key]}
                            </React.Fragment>
                        }
                    } 

                    return <React.Fragment></React.Fragment>
                   
                }
            } 

            if (columnOptionsMap && newColumn.key in columnOptionsMap) {
                const columnOptions = columnOptionsMap[newColumn.key];
                if (columnOptions) {
                    const modifiedColumn = { ...newColumn };
                    Object.keys(columnOptions).forEach((option) => {
                        modifiedColumn[option] = columnOptions[option];
                    });
                    if(modifiedColumn['frozen']) {
                        freezeColumns.push(modifiedColumn);
                    }
                   return modifiedColumn
                }
            } 
            if(newColumn['frozen']) {
                freezeColumns.push(newColumn);
            }

            return newColumn;

        }
        
        const columns = [];
        const columnProps = props.columns;
        if(props.checkBoxColumn) {
            columns.push({...SelectColumn, isVisible: true});
        }
        columnProps.forEach(column => {
            const newColumn = prepareColumnObject(column);
            if(!newColumn.frozen) {
                columns.push(newColumn);

            }
        })
        
        return [...columns,...freezeColumns];

    },[props.columns,props.checkBoxColumn,props.callBackMap,filters,props.defaultColumnOptions,sortColumns, columnOptionsMap , onColumnOptionsChange , sortColumns, handleSortColumnChange , rowKeyGetter]);


    const flattenedGridColumns = useMemo(() => {
        return flattenGridColumnList(columns);
    },[columns])


    /** 
     * this is preparing the top summary row info
     * */

    const topSummaryRows = useMemo(()=>{
        const topSummaryRows = [];
        const columnProps = flattenColumns;
        let summaryObject = {};
        columnProps.map(each => {
            if(each.showFilter) {
                summaryObject['id'] = each.rowDataKey;
                summaryObject['filteredRow_dataGrid'] = true;
            }
        })
        if(Object.keys(summaryObject).length > 0) {
            topSummaryRows.push(summaryObject);
        }
        if(props.topSummaryRows) {
            let customSummaryRows = props.topSummaryRows.map(eachRow => {
                eachRow["isTopSummaryRow_dataGrid"] = true;
                return eachRow;
            });
            topSummaryRows.push(...customSummaryRows);
        }
        return topSummaryRows;

    },[flattenColumns,props.topSummaryRows]);


    /** 
     * this is preparing the bottom summary row info
     * */ 

    const bottomSummaryRows = useMemo(()=>{
        if(!props.bottomSummaryRows) {
            return undefined;
        }
        const bottomSummaryRows = [];
       
        let customSummaryRows = props.bottomSummaryRows.map(eachRow => {
            eachRow["isBottomSummaryRows_dataGrid"] = true;
            return eachRow;
        });
        bottomSummaryRows.push(...customSummaryRows);
        return bottomSummaryRows;

    },[props.bottomSummaryRows]);


    /** 
     * this will retured only the filterd row data after applying filters from actual row dataset
     * */  

    const filteredData = useMemo(() => {

        if(rows.length == 0 || props.isRemoteFilteringEnabled){
            return rows;
        }
        const operatorsMap = {};
        const filterKeys = Object.keys(filters);
        if(filterKeys.length <= 0) {
            return rows;
        }
        for(const eachKey of filterKeys) {
            const selectedFilter = filters[eachKey];
            const filterType = selectedFilter.filterType;
            const filterObject = filterTypes[filterType];
            const filterOperator = filterObject.operators.find(eachOperator => eachOperator.name === selectedFilter.selectedOperator);
            if(filterOperator) {
                operatorsMap[filterOperator.name] = filterOperator;
            }
        }
        return [...rows].filter((eachRow => {
            
            for(const eachKey of filterKeys) {
                const selectedFilter = filters[eachKey];
                const operatorName = selectedFilter.selectedOperator;
                const filterOperator = operatorsMap[operatorName]
                if(filterOperator && filterOperator.filterFunction && !filterOperator.filterFunction({value: eachRow[eachKey], filterValue:selectedFilter.value})) {
                  return false;
                }
            }
            return true;
              
          }));
    },[rows,filters,props.isRemoteFilteringEnabled]);


    const onCopy = (copyEvent) =>{
        try{
            let copiedValues = '';
            const cellsRange = copyEvent?.cellsRange;
            const columnsObject= gridLocalRef?.current?.getColumns();
            const startRowIdx = Math.min(cellsRange.startRowIdx , cellsRange.endRowIdx);
            const endRowIdx = Math.max(cellsRange.startRowIdx , cellsRange.endRowIdx);
            const startColumnIdx = Math.min(cellsRange.startColumnIdx , cellsRange.endColumnIdx);
            const endColumnIdx= Math.max(cellsRange.startColumnIdx , cellsRange.endColumnIdx);
            for (let i = startRowIdx; i <= endRowIdx; i++) {
                let columnValues = ''
                for (let j =startColumnIdx; j <= endColumnIdx; j++) {
                    const columnKey = columnsObject[j].key;
                    if (j < endColumnIdx) {
                        columnValues = `${columnValues}${rows[i][columnKey]},`
                    } else {
                        columnValues = `${columnValues}${rows[i][columnKey]}`
                    }
                }
                if (i < endRowIdx) {
                    copiedValues = `${copiedValues}${columnValues}\n`
                } else {
                    copiedValues = `${copiedValues}${columnValues}`
                }
            }

            navigator.clipboard.writeText(copiedValues);
        } catch(error) {
            console.log('copyError', error)
        }


    }

    /**
     * this will return sorted row info from the filtered row data
     */
    const rowData = useMemo(() => {
        if(sortColumns.length === 0 || filteredData.length == 0 ||  props.isRemoteSortingEnabled)
            return filteredData;
        const columnMap = {};
        for(const eachColumn of sortColumns) {
            const columnInfo = flattenColumns.find(column =>  column.rowDataKey === eachColumn.columnKey);
            columnMap[eachColumn.columnKey] = columnInfo;
        }
        return [...filteredData].sort((a,b) => {
            for(const eachColumn of sortColumns) {
                const columnInfo = columnMap[eachColumn.columnKey];
                let sortValue = 0;
                if(columnInfo.customSort && columnInfo.customSort.type === FUNCTION_TYPE && columnInfo.customSort.returnType === "INTEGER") {
                    const customSort = props.callBackMap[columnInfo.customSort.name];
                    sortValue = customSort(a,b,eachColumn);
                    if(sortValue !== 0) {
                        return sortValue;
                    }
                } else {
                    const comparator = getComparator(columnInfo);
                    sortValue = comparator(a,b);
                    if(sortValue !== 0) {
                        return eachColumn.direction === "ASC" ? sortValue : -sortValue;
                    }
                }
            }
            return 0;

        });
    },[filteredData,sortColumns,flattenColumns,props.callBackMap]);


    


    /**
     * call back function whenever sorting is applied in grid
     * @param sortColumns  List<SortInfo>
     */
    const handleSortColumnChange = useCallback( async (sortColumns) => {
        const requestObject ={startIndex : 0,limit : recordsLimit ? recordsLimit : totalRecords,sortColumns,filters , changeType : ChangeType.SORT_INFO , totalRecords}
        if(props.isRemoteSortingEnabled && props.remoteDataFunction) {
            setDataLoading(true);
            const {dataSet , totalRowsCount , status} = await props.remoteDataFunction(requestObject);
            if(status) {
                setRows([...dataSet]);
                setTotalRecords(totalRowsCount);
                setSortColumns([...sortColumns]);
            }
            setDataLoading(false);
        } else {
            if(props.controlledSortInfo) {
                props.onSortInfoChange(sortColumns);

            } else {

                setSortColumns([...sortColumns]);
                if(props.onDataChangeCallBack) {
                    props.onDataChangeCallBack(requestObject)
    
                } 
            }
        }

    },[props.isRemoteSortingEnabled, props.remoteDataFunction , props.onDataChangeCallBack ,recordsLimit, totalRecords , filters])

    /**
     * call back function whenever filter is applied in grid
     * @param filters  Map<String,Filters> key -- columnId , value is Filter object
     */

    const handleOnFilterChange =  useCallback(async (filters) => {
        const requestObject = {startIndex : 0 ,limit : recordsLimit ? recordsLimit : totalRecords , sortColumns,filters ,changeType : ChangeType.FILTER_INFO , totalRecords}
        if(props.isRemoteFilteringEnabled && props.remoteDataFunction) {
            setDataLoading(true);
            const {dataSet , totalRowsCount , status} = await props.remoteDataFunction(requestObject);
            if(status) {
                setRows([...dataSet]);
                setTotalRecords(totalRowsCount);
                setFilters(filters);
                setPageNumber(1);
            }
            setDataLoading(false);
        } else {
            setFilters(filters); 
            if(props.onDataChangeCallBack) {
                props.onDataChangeCallBack(requestObject)

            }               
        }
    },[props.isRemoteFilteringEnabled,props.remoteDataFunction,props.onDataChangeCallBack ,sortColumns,recordsLimit,totalRecords])

    /**
     * call back function whenever scroll is applied to grid
     * @param scrollevent  scroll event as the param
     */

    const handleScroll = async (e) => {
        if(totalRecords <= rowData.length || isDataLoading || !isAtBottom(e) ) return;
        if(props.remoteDataFunction) {
            setDataLoading(true);
            const {dataSet , totalRowsCount , status} = await props.remoteDataFunction({startIndex : rows.length ,limit:recordsLimit, sortColumns : props.isRemoteSortingEnabled ? sortColumns : [],filters : props.isRemoteFilteringEnabled ? filters : {},changeType : ChangeType.PAGINATION_INFO , totalRecords});

            if(status) {
                setRows([...rows,...dataSet]);
                setTotalRecords(totalRowsCount);
            }
            setDataLoading(false);
        }
    }

     /**
     * call back function whenever page or limit is changed in grid
     * @param pageNumber  
     * @param limit
     */

    const onPageChange = async (pageNumber,limit) => {

        if(props.remoteDataFunction) {
            setDataLoading(true);
            const {dataSet , totalRowsCount , status} = await props.remoteDataFunction({startIndex :pageNumber <= 0 ? 0 : (pageNumber-1)*limit, limit , sortColumns,filters,pageNumber, changeType : ChangeType.PAGINATION_INFO , totalRecords});
            if(status) {
                setRows([...dataSet]);
                setTotalRecords(totalRowsCount);
                setPageNumber(pageNumber);
                setRecordsLimit(limit);
                if(ref && ref.current) {
                    ref.current.scrollToRow(0);
                }
            }
            setDataLoading(false);
        }
    }



    const selectedRowsSet = useMemo(()=>{
        let selectedRows = new Set([]);
        if(props.selectedRows) {
            selectedRows = new Set([...props.selectedRows]);
        } 
        return selectedRows;
    },[props.selectedRows]); 

    /**
     * call back function whenever row selection happens in grid
     * @param selectedRows list<String>   selected rows with Id property
     */

    const handleRowSelection = (selectedRows)=>{
        if(props.onRowSelectionCallback) {
            props.onRowSelectionCallback(Array.from(selectedRows));
        }
    };

    /**
     * call back whenever some row is edited we get updated rows info
     * and column info and row index info which cell got edited
     * @param {*} updatedRows 
     * @param {*} {rowIndex , columnInfo} 
     */

    const onRowChange = async (updatedRows,{indexes,column}) => {
        const updatedRow = updatedRows[indexes[0]];
        setRows([...updatedRows]);
        if(props.onEdit) {
           const  {status} = await props.onEdit({row: updatedRow,column,updatedRowIndex : indexes[0],updatedRows})
           if(status) {
                setEditableRow({id: rowKeyGetter(updatedRow), status : status});
            }
            setTimeout(() => {
                setEditableRow(undefined);
            },1000)
        }
        
    }

    const recordsPerPageArray = useMemo(() => {
        if(recordsPerPageList && recordsPerPageList.length > 0) {
            return [...recordsPerPageList];
        }
       
        return [];
    },[totalRecords,recordsPerPageList]);



    const handleDownload = async (downloadInfo) => {
        setDataLoading(true);
        if(downloadInfo.isRemoteDownload) {
            await props.remoteDownloadFunction({rows : rowData , columns : flattenColumns,downloadInfo});
        } else {
            switch(downloadInfo.fileType) {
                case "CSV" :
                    await exportToCsv(rowData, props.columns,downloadInfo.fileName);
                    break;
                case "XLSX" :
                    await exportToXlsx(rowData,props.columns,downloadInfo.fileName);
                default :
                    break;
            }
        }
        setDataLoading(false);
    }

    const getDownloadText = useCallback((downloadInfo) => {
        switch(downloadInfo.fileType) {
            case "CSV" :
                return  <React.Fragment>
                             CSV
                </React.Fragment>;
            case "XLSX" :
                return  <React.Fragment>
                             XLSX
                </React.Fragment>;
            default : 
                return  "";
        }
    },[]);

    const handleOnGroupExpands = (expandedGroupIds) => {
        setExpandedGroupIds(expandedGroupIds);
    }

    const defaultRowGrouper = (rows,columnKey) => {
       return rows.reduce((rv,row) => {
            let rowKey = row[columnKey];
            if(!isNaN(rowKey)) {
                rowKey=rowKey+" ";
            }
            (rv[rowKey] = rv[rowKey] || []).push(row);
            return rv;
        },{});
    }


    const getVisibleColumns = useCallback((columns) => {
        const visibleColumns = [];
        columns.forEach(column => {
            let newColumn = {...column};
            if(column.children && column.children.length > 0) {
                newColumn['children'] = [...getVisibleColumns(column.children)];
                visibleColumns.push(newColumn);
            } else if(newColumn.isVisible) {
                visibleColumns.push(newColumn);
            }
        })
        return visibleColumns;
    },[]);


    const gridContainerClassName = useMemo(() => {
        if(isPaginationRequired && ((props.downloadInfoList && props.downloadInfoList.length > 0) || props.enableCustomColumnVisibleOption || Validate().isNotEmpty(props.customGridToolbar))) {
            return "fill-grid-with-pagination-download-list";
        }
        if(isPaginationRequired) {
            return "fill-grid-with-pagination";
        }
        if((props.downloadInfoList && props.downloadInfoList.length > 0) || props.enableCustomColumnVisibleOption || Validate().isNotEmpty(props.customGridToolbar)) {
            return "fill-grid-with-download-list"
        }

        return "fill-grid-full-height"

    },[isPaginationRequired, props.downloadInfoList, props.enableCustomColumnVisibleOption])


    const rowClassName =  useCallback((row) => {
        const rowClassFunction = props.rowClass && props.rowClass.type === 'FUNCTION' && props.rowClass.returnType === FunctionReturnType.STRING ? props.callBackMap[props.rowClass.name] : undefined;
        let rowClassName = rowClassFunction ? rowClassFunction(row) : '';
        if(editableRow && editableRow.id === rowKeyGetter(row)) {
            rowClassName = `${rowClassName} ${editableRow.status === "SUCCESS" ? "row-edited-success" : "row-edited-error"}`;
        }
        return rowClassName;
    },[props.rowClass,editableRow,props.callBackMap , rowKeyGetter])


    const parentRowGroupClass = useCallback((row, groupKey , childRows) => {
        const rowClassFunction = props.parentRowGroupClassName && props.parentRowGroupClassName.type === 'FUNCTION' && props.parentRowGroupClassName.returnType === FunctionReturnType.STRING ? props.callBackMap[props.parentRowGroupClassName.name] : undefined;
        return rowClassFunction ? rowClassFunction(row, groupKey, childRows) : ``;
    },[props.parentRowGroupClassName, props.callBackMap]);
    
    const isAllRowsSelected = useMemo(() => {
        return selectedRowsSet && selectedRowsSet.size >= rows.length && rows.every((row) => selectedRowsSet.has(rowKeyGetter(row)))
    },[selectedRowsSet, rows, rowKeyGetter])
    
     /* 
        default checkbox componets in grid

    */
    const checkboxFormatter = useCallback(({ onChange, ...props }, ref) => {

        const isAlteastOneRowSelectedForHeader = () => {
            return props['aria-label'] === "Select All" && !isAllRowsSelected && selectedRowsSet.size > 0;
        }

        const handleChange = (e) => {
            if(isAlteastOneRowSelectedForHeader()) {
                onChange(false, false);
                return;
            }
            onChange(e.target.checked, e.nativeEvent.shiftKey);
        }
        
        return <input type="checkbox" className={isAlteastOneRowSelectedForHeader() ? "checkbox-indeterminante" : ""} ref={ref} {...props} onChange={handleChange} />

    },[selectedRowsSet, isAllRowsSelected])


    return <React.Fragment>
             <div className="grid-container">
                {isDataLoading ? 
                   <Spinner/> : null}
            <div className='grid-container-header'>
                {(props.customGridToolbar && props.customGridToolbar.component) ? 
                <div className='custom-grid-toolbar'><CustomGridToolbar {...props.customGridToolbar.componentProps}/> </div>: null}
                <div className='dropdown-buttons'>
                    {props.enableCustomColumnVisibleOption ? <div>
                        <CustomColumnVisibleOptions columnsList={flattenedGridColumns.filter((column) => column.customColumnVisibilityOption)} onColumnOptionsChange={onColumnOptionsChange} columnOptionsMap={columnOptionsMap} />
                    </div> : null}
                    {(props.downloadInfoList && props.downloadInfoList.length > 0) ? <div className="download-toolbar">
                        <Dropdown>
                            <Dropdown.Toggle variant=" " id="dropdown-grid" className="border-0 btn-sm link-dark dropdown-carret-margin">
                                <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <g id="download-black-icn-16" transform="translate(-180.258 -387.452)">
                                        <rect id="Rectangle_3299" data-name="Rectangle 3299" width="16" height="16" rx="3" transform="translate(180.258 387.452)" fill="none" />
                                        <g id="download-icn" transform="translate(180.259 386.725)">
                                            <path id="Subtraction_92" data-name="Subtraction 92" d="M1303.523-8060.166a.489.489,0,0,1-.488-.488.494.494,0,0,1,.45-.49h.045a2.3,2.3,0,0,0,1.223-.405,1.381,1.381,0,0,0,.591-1.15,1.845,1.845,0,0,0-.421-1.146l-.024-.034a1.764,1.764,0,0,0-1.491-.743h-.172a.241.241,0,0,1-.038,0,.44.44,0,0,1-.363-.17l-.008-.01a.434.434,0,0,1-.089-.423,2.75,2.75,0,0,0,.093-.719,2.73,2.73,0,0,0-2.7-2.756,2.731,2.731,0,0,0-2.7,2.756v.17a.491.491,0,0,1-.194.415.536.536,0,0,1-.3.089.463.463,0,0,1-.17-.031,2.8,2.8,0,0,0-1.055-.2,2.371,2.371,0,0,0-2.507,2.2,2.588,2.588,0,0,0,.281,1.219,1.753,1.753,0,0,0,1.484.907h.008a.043.043,0,0,1,.014,0,.3.3,0,0,0,.065.01.491.491,0,0,1,.413.476.49.49,0,0,1-.49.488.766.766,0,0,1-.164-.012l-.014,0a2.821,2.821,0,0,1-2.562-3.062,3.332,3.332,0,0,1,3.471-3.163,3.184,3.184,0,0,1,.634.057l.128.024.02-.127a3.8,3.8,0,0,1,1.237-2.258,3.629,3.629,0,0,1,2.394-.909,3.7,3.7,0,0,1,3.674,3.718,1.588,1.588,0,0,1-.012.243l-.02.122.122.022a2.749,2.749,0,0,1,1.79,1.1l0,.006a2.743,2.743,0,0,1,.63,1.733,2.618,2.618,0,0,1-2.716,2.52l-.024,0-.022.01A.143.143,0,0,1,1303.523-8060.166Z" transform="translate(-1291.125 8071.875)" />
                                            <path id="Subtraction_91" data-name="Subtraction 91" d="M1294.726-8068.672h-1.987a.489.489,0,0,1-.49-.488.49.49,0,0,1,.49-.488h1.987a.489.489,0,0,1,.488.488A.488.488,0,0,1,1294.726-8068.672Z" transform="translate(-1288.641 8080.381)" />
                                            <path id="Subtraction_90" data-name="Subtraction 90" d="M1292.737-8068.67h0a.493.493,0,0,1-.488-.478.484.484,0,0,1,.476-.486l1.679-.014a.483.483,0,0,1,.49.474.482.482,0,0,1-.476.488Z" transform="translate(-1282.268 8080.424)" />
                                            <path id="Subtraction_89" data-name="Subtraction 89" d="M1294.667-8062.738a.446.446,0,0,1-.314-.117l-1.93-1.608a.482.482,0,0,1-.172-.324.5.5,0,0,1,.115-.363.486.486,0,0,1,.369-.174.5.5,0,0,1,.318.117l1.126.948v-4.9a.489.489,0,0,1,.488-.488.489.489,0,0,1,.488.488v5.917a.489.489,0,0,1-.28.444A.481.481,0,0,1,1294.667-8062.738Z" transform="translate(-1286.507 8077.946)" />
                                            <path id="Subtraction_88" data-name="Subtraction 88" d="M1292.733-8067.1a.472.472,0,0,1-.373-.174.473.473,0,0,1-.107-.354.493.493,0,0,1,.178-.333l1.93-1.578a.47.47,0,0,1,.3-.111.5.5,0,0,1,.383.182.473.473,0,0,1,.109.349.494.494,0,0,1-.18.336l-1.946,1.566A.482.482,0,0,1,1292.733-8067.1Z" transform="translate(-1284.572 8082.307)" />
                                        </g>
                                    </g>
                                </svg>
                                Download
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='custom-dropdown custom-dropdown-menu grid-dropdown-height'>
                                {props.downloadInfoList.map(eachDownload => {
                                    return  <Dropdown.Item className="custom-dropdown-item" onClick={()=> { handleDownload(eachDownload)}}>{getDownloadText(eachDownload)}</Dropdown.Item>
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div> : null}
                </div>
            </div>
            <div className={`grid-container-parent ${gridContainerClassName}`}>
                <DataGrid
                    ref={mergeRefs(gridLocalRef)}
                    columns={getVisibleColumns(columns)}
                    rows={rowData}
                    rowKeyGetter={rowKeyGetter}
                    className={`dynamic-grid-height rdg-light fill-grid-full-height  ${props.gridClassName ? props.gridClassName : ''}`}
                    selectedRows={selectedRowsSet}
                    onSelectedRowsChange={handleRowSelection}
                    renderers={{ checkboxFormatter, noRowsFallback:props.noRowsFallback}}
                    sortColumns={props.controlledSortInfo ? props.controlledSortInfo : sortColumns}
                    onSortColumnsChange={handleSortColumnChange}
                    topSummaryRows={topSummaryRows}
                    bottomSummaryRows= {bottomSummaryRows}
                    direction="ltr"
                    onScroll={loadOnScroll ? handleScroll : undefined}
                    summaryRowHeight={props.filterRowHeight ? props.filterRowHeight : undefined}
                    rowHeight={props.rowHeight ? props.rowHeight : undefined}
                    headerRowHeight={props.headerRowHeight ? props.headerRowHeight : undefined}
                    style={props.style ? props.style : undefined}
                    rowClass={rowClassName}
                    parentRowGroupClass= {parentRowGroupClass}
                    onRowsChange={onRowChange}
                    cellNavigationMode={props.cellNavigationMode}
                    expandedGroupIds = {expandedGroupIds}
                    onExpandedGroupIdsChange = {handleOnGroupExpands}
                    groupBy = {props.groupBy ? props.groupBy : undefined}
                    rowGrouper ={props.rowGrouper ? props.rowGrouper : defaultRowGrouper}
                    enableColumnVirtualization = {props.enableColumnVirtualization}
                    enableRangeSelection
                    onMultiCopy = {onCopy}
                />
                </div>
                {isPaginationRequired ? <Pagination
                    currentPageNumber = {pageNumber}
                    totalRecords = {totalRecords}
                    recordsPerPage = {recordsPerPageArray}
                    limit ={recordsLimit}
                    onChange = {onPageChange}

                /> : null}
             </div>
    </React.Fragment>
});


export default CommonDataGrid;