import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import CommonDatePicker from '../../../DatePicker/CommonDatePicker';
import { useDebounce } from '../../../hooks/useDebounce';
import { FilterType, ONE_DAY_ONE_SECOND_LESS_TIME_IN_MILLISECONDS } from '../../Utils/Constants';
import { filterTypes, getFilterOptions } from '../../Utils/Filters';
import FilterDropDown from '../Icons/FilterDropDown';
import dateFormat from "dateformat";
import { getDateFormatForDateFormatter, getDateFormatForDatePicker } from '../../Utils/DateFormatsHelper';




const DateFilter = (props) => {

  const { column, filters ,isCellSelected  } = props;
  const [startDate,setStartDate] = useState(filters[column.key].value ? filters[column.key].value.split(":::")[0] : '');
  const [endDate ,setEndDate] = useState(filters[column.key].value && filters[column.key].value.split(":::").length > 1 ? filters[column.key].value.split(":::")[1] : '');
  const [startDebounceValue] = useDebounce({ initialValue: startDate, waitTime: 500 });
  const [endDebounceValue] = useDebounce({initialValue : endDate , waitTime : 500});
  const ref = useRef(null);
  const dateFormatStr = column.dateFormatStr ? column.dateFormatStr : '';
  const datePickerFormat = getDateFormatForDatePicker(dateFormatStr);
  const dateForatterFormat = getDateFormatForDateFormatter(dateFormatStr); 

   useLayoutEffect(() => {
    if(isCellSelected && ref && ref.current) {
      ref.current.setFocus();
    } 

  },[isCellSelected]) 

 const checkIsEndValueRequired = () => {
      const rangeOperatorsList =filterTypes[FilterType['date']].rangeOperatorsList;
      const selectedOperator =filters[column.key].selectedOperator;
      return rangeOperatorsList.includes(selectedOperator);
  }


  useEffect(() => {
    const filterValueArray = filters[column.key].value ? filters[column.key].value.split(":::") : ['',''];
    if(!checkIsEndValueRequired()) {
      if(startDate != filterValueArray[0]) {
          props.handleFilterChange({
            ...filters,
            [column.key] : {
              ...filters[column.key],
              value : startDebounceValue
            }
          })

      }
      return;
    }
    
    if(!startDate && !endDate  && (filterValueArray[0] && (filterValueArray.length > 1 && filterValueArray[1]))) {
      props.handleFilterChange({
           ...filters,
           [column.key] : {
          ...filters[column.key],
          value :''
        }
      })
      return;
    }

    if(!startDate || !endDate) {
      return;
    }
     

    if(startDate != filterValueArray[0] || (filterValueArray.length > 1 && endDate != filterValueArray[1])) {
      props.handleFilterChange({
        ...filters,
        [column.key] : {
          ...filters[column.key],
          value : `${startDebounceValue}:::${endDebounceValue}`
        }
      })
    }

  }, [startDebounceValue,endDebounceValue])

  const onDatesChange = (dates) => {
    if(dates) {

      setStartDate(dates[0] ? dateFormat(new Date(dates[0]),dateForatterFormat): '');
      let endDate = null;
      if(dates[1]) {
        endDate = new Date(dates[1]);
        endDate = new Date(endDate.getTime() + ONE_DAY_ONE_SECOND_LESS_TIME_IN_MILLISECONDS)
      }
      setEndDate(dates[1] ? dateFormat(endDate,dateForatterFormat): '');

    } else {
      setEndDate('');
      setStartDate('');
    }

  }

  const handleKeyDown = (e) => {
    if(e.keyCode == 38 || e.keyCode == 40 || e.which == 38 || e.which == 40) {
      e.stopPropagation();
      return;
    }
   
}

  const onOperatorChange = useCallback((value) => {
    props.handleFilterChange({
      ...filters,
      [column.key]: {
        ...filters[column.key],
        selectedOperator: value,
        value : ''
      }
    })
    setStartDate('');
    setEndDate('');
  },[props.handleFilterChange,filters]);

    const filterObject = filters[column.key];
    const filterProps = filterObject && filterObject.filterProps ? filterObject.filterProps : {}
    
    const filterOptions = filterTypes[filters[column.key].filterType].filterOptionsList;

    const displayOptionsMap = getFilterOptions(filterObject,filterOptions); 

    const handleOnScroll = (e) =>{
      const { scrollTop, scrollLeft ,scrollRight,scrollDown } = e.target;
      if(scrollTop > 5 || scrollLeft > 5 || scrollRight > 5 || scrollDown > 5) {
        return true;
      }
      return false;

    }

    
 
   return <React.Fragment>
    <div className="filter-cell bg-grey border-0">
      <div className="d-flex w-100">
        {!checkIsEndValueRequired() ? <CommonDatePicker  onKeyDown = {handleKeyDown}
                     closeOnScroll= {handleOnScroll}  placeholderText={filterProps && filterProps.placeholder ? filterProps.placeholder :datePickerFormat} ref={ref}  datePickerClassName = {`form-control form-input-height w-100`} popperClassName={props.isInRbsModal ? "rbs-modal-date-picker-popper" : ''} dateFormat = {datePickerFormat} selectedDate = {startDate ? new Date(startDate) : null} handleOnChange = {(date) => {setStartDate( date ? dateFormat(date,dateForatterFormat) : '')}}  portalId="root-portal"/> : null}
        { checkIsEndValueRequired() && <CommonDatePicker ref={ref}  onKeyDown = {handleKeyDown}
         closeOnScroll= {handleOnScroll} placeholderText={filterProps && filterProps.placeholder ? filterProps.placeholder :datePickerFormat} selectsRange startDate={startDate ? new Date(startDate) : null} endDate = {endDate ? new Date(endDate) : null}  dateFormat = {datePickerFormat} datePickerClassName = {`form-control form-input-height w-100`} popperClassName={props.isInRbsModal ? "rbs-modal-date-picker-popper" : ''} handleOnChange = {onDatesChange} portalId="root-portal"/> } 
      </div>
      <FilterDropDown className="form-input-height" dropDownMenuClass={props.isInRbsModal ? 'rbs-modal-grid-dropdownmenu' : ''} columnKey={column.key} checkedKey={filters[column.key].selectedOperator} itemsMap={displayOptionsMap} onSelectionHandler={onOperatorChange} />
    </div>
  </React.Fragment> 
}

export default DateFilter;
