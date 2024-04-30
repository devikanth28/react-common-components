import { headerSortCellClassname, headerSortNameClassname, sortIcon } from "@medplus/npm-data-grid";
import React from "react";
import { Dropdown } from "react-bootstrap";
import usePortal from "../../../hooks/usePortal";
import { FrozenColumnPosition } from "../../Utils/Constants";

const SortSvg =() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18">
            <g id="tickmark_black_icon_18px" transform="translate(-1458 -558)">
                <path id="check" d="M18,6,8.375,15.625,4,11.25" transform="translate(1456 556)" fill="rgba(0,0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="#343a40"></path>
            </g>
        </svg>
    )
}


const MenuFormatter = (props) => {

    const {column,columnOptionsMap , onColumnOptionsChange , children ,  sortDirection  , onSortColumnsChange, sortColumns} = props;
    const Portal = usePortal(document.body);

    const handleFrozenColumn = (isFrozen ,frozenColumnPosition) => {
            const tempColumnOptionsMap = {
                ...columnOptionsMap,
                [column.key] :columnOptionsMap[column.key] ? {
                    ...columnOptionsMap[column.key],
                    frozen: isFrozen,
                    frozenColumnPosition
                } : {
                    frozen: isFrozen ,
                    frozenColumnPosition
                }
            }
            onColumnOptionsChange(column.key,tempColumnOptionsMap)
    }

    const handleOnSortColumnChange = (sortDirection, isCtrlClicked) => {
        if(!isCtrlClicked) {
            onSortColumnsChange(sortDirection ? [{
                columnKey: column.key,
                direction: sortDirection
            }] : []);
            return;
        }
        let nextSortColumns = [...sortColumns];
        const columnIndex = nextSortColumns.findIndex(each => each.columnKey == column.key);
        if(sortDirection) {
            if(columnIndex >= 0) {
                nextSortColumns[columnIndex]= {
                    columnKey : column.key,
                    direction: sortDirection
                }

            } else {
                nextSortColumns.push({
                    columnKey : column.key,
                    direction: sortDirection
                })
            }
        } else {
            if(columnIndex >= 0) {
                nextSortColumns.splice(columnIndex,1);

            }
        }
        onSortColumnsChange(nextSortColumns);
       

    }


    return <div className={headerSortCellClassname} >
        {children}
         <Dropdown className={props.className}>
            <Dropdown.Toggle variant=" " id={`grid-header-menu-dropdown_${column.key}`} className="border-0 rounded-circle btn-link text-dark pb-0 btn-sm "/>
            <Portal> 
               <Dropdown.Menu align="end">
                    {column.frozen &&
                        <Dropdown.Item  onClick={() => {handleFrozenColumn(false,FrozenColumnPosition.LEFT)} }>
                                Unlock Column
                        </Dropdown.Item> 
                     }
                    {(!column.frozen || column.frozenColumnPosition === FrozenColumnPosition.LEFT) &&
                        <Dropdown.Item  onClick={() =>  handleFrozenColumn(true, FrozenColumnPosition.RIGHT)}>
                            Freeze Right
                        </Dropdown.Item>}
                    {(!column.frozen || column.frozenColumnPosition === FrozenColumnPosition.RIGHT) &&
                        <Dropdown.Item   onClick={() => handleFrozenColumn(true, FrozenColumnPosition.LEFT)}>
                            Freeze Left 
                        </Dropdown.Item>
                    }
                    {column.sortable  ? 
                         <React.Fragment>
                              <Dropdown.Item className="d-flex justify-content-between" onClick={(e) => handleOnSortColumnChange(sortDirection === "ASC" ? undefined : "ASC",e.ctrlKey || e.metaKey)}>
                                <span className= {headerSortNameClassname}>A-Z</span>
                                <span >
                                    {sortDirection == "ASC" ? <SortSvg/> : null}
                                </span>
                            </Dropdown.Item>
                            <Dropdown.Item className="d-flex justify-content-between" onClick={(e) => handleOnSortColumnChange(sortDirection === "DESC" ? undefined : "DESC",e.ctrlKey || e.metaKey)}>
                                <span className= {headerSortNameClassname}>Z-A</span>
                                <span >
                                    {sortDirection == "DESC" ? <SortSvg/> : null}
                                </span>
                            </Dropdown.Item>

                         </React.Fragment>
                           
                            : null

                    }
                </Dropdown.Menu>
            </Portal> 
           
        </Dropdown> 
         
    </div>
}


export default MenuFormatter;