import { useFocusRef } from '@medplus/npm-data-grid';
import React, { useCallback, useState,useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { useDebounce } from '../../../hooks/useDebounce';
import { filterTypes, getFilterOptions } from '../../Utils/Filters';
import { isNullOrUndefined } from '../../Utils/Validate';
import ClearIcon from '../Icons/ClearIcon';
import FilterDropDown from '../Icons/FilterDropDown';


const TextEditor = (props) => {

    const { column , filters,isCellSelected} = props;
  
    const [searchText,setSearchText] = useState(filters[column.key].value);
    const [debounceValue] = useDebounce({initialValue : searchText,waitTime : 500});
    const {ref,tabIndex} = useFocusRef(isCellSelected);
    const filterObject = filters[column.key];
    const filterProps = filterObject && filterObject.filterProps ? filterObject.filterProps : {}

    useEffect(() => {
      if(filterProps.minlength && filterProps.minlength > 0 && debounceValue && debounceValue.length < filterProps.minlength) {
        return;
      }
      if(searchText != filters[column.key].value) {
        props.handleFilterChange({
          ...filters,
          [column.key] : {
            ...filters[column.key],
            value : debounceValue 
          }
        });
      }
    },[debounceValue]);

    const onOperatorChange = useCallback((value) => {
      props.handleFilterChange({
        ...filters,
        [column.key] : {
          ...filters[column.key],
          selectedOperator: value
        }
      })
    },[filters])

    const handleClearFilter = useCallback(() => {
        setSearchText('');
    });

    const handleOnPaste = (e) => {
      e.preventDefault();
      let inputText =e.clipboardData.getData('text/plain');
      if(!inputText) {
        return;
      }
      const rawRows = inputText.split("\n");
      const finalArray = [];
      rawRows.map(eachRow => {
          finalArray.push(...eachRow.split("\t"));
      });
      setSearchText(finalArray.join(","));

    }

    const handleKeyDown = (e) => {
      if(e.keyCode == 37 || e.keyCode == 39 || e.which == 37 || e.which == 39) {
        e.stopPropagation();
      }
    }

    const validateInput = (value,e) => {
     
      if(e.target.pattern  && !isNullOrUndefined(value) && !value.match(e.target.pattern)) {
        return false;
      }
      if(e.target.maxlength && !isNullOrUndefined(value) && (value.length > e.target.maxlength)) {
        return false;
      }

      return true;

    }
    const filterOptions = filterTypes[filters[column.key].filterType].filterOptionsList;

    const handleOnChange = (e) => {
      const value = e.target.value;

      if(isNullOrUndefined(value)) {
        setSearchText('');
        return;
      }

      const listOperators =filterTypes[filters[column.key].filterType].listOperators;
      const selectedOperator = filters[column.key].selectedOperator;
      let values = [value]
      if(listOperators.includes(selectedOperator)) {
        values = value.split(",");
      }
      const validValues = values.filter(value => validateInput(value,e));

      if(values.length != validValues.length) {
          return;
      }
      setSearchText(e.target.value);
    }



    const displayOptionsMap = getFilterOptions(filterObject,filterOptions);
    
    
    
    return <React.Fragment>
      <div className= "filter-cell">
        <Form.Control
          ref={ref}
          tabIndex={tabIndex} 
          className= "form-input-height" 
          type="text" 
          placeholder={filterProps && filterProps.placeholder ? filterProps.placeholder :"Search here" }
          onPaste= {handleOnPaste} 
          value = {searchText ? searchText : ''} 
          onChange = {handleOnChange} 
          onKeyDown= {handleKeyDown} 
          {...filterProps}
          />
        {debounceValue ? <ClearIcon handleOnClick= {handleClearFilter}/> : null}
        <FilterDropDown tabIndex={tabIndex} dropDownMenuClass={props.isInRbsModal ? 'rbs-modal-grid-dropdownmenu' : ''} columnKey = {column.key} checkedKey = {filters[column.key].selectedOperator} itemsMap = {displayOptionsMap} onSelectionHandler = {onOperatorChange}/>
      </div>

    </React.Fragment>

}

export default TextEditor;