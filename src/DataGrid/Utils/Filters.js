import { FilterType, ONE_DAY_ONE_SECOND_LESS_TIME_IN_MILLISECONDS } from "./Constants";
import { isEmptyNumber } from './Validate';

export const filterTypes = {
    [FilterType['string']] : {
      defaultValue : '',
      operators : [
          { 
          name :'CONTAINS_STRING',
          filterFunction :({value, filterValue }) => {
              return !filterValue ? true : !value? false : value.toLowerCase().indexOf(filterValue.toLowerCase()) != -1;
          }
        }, 
        {
          name :'EQUALS_STRING',
          filterFunction: ({ value, filterValue }) => !filterValue ? true : value ? value.toLowerCase() === filterValue.toLowerCase() : false
        },
        {
          name : 'IN_LIST_STRING',
          filterFunction : ({value,filterValue}) => {
            if(!filterValue) {
              return true;
            }
            const filterList = filterValue.split(",");
            if(!value) {
              return false;
            }
            let isContained = false;
            filterList.some(filterValue => {
              if(filterValue.toLowerCase() == value.toLowerCase() || filterValue.toLowerCase().trim() == value.toLowerCase().trim()) {
                isContained = true;
                return true;
              }
              return false;

            });
            return isContained;
          }
        },
        {
          name :'NOT_LIST_STRING',
          filterFunction : ({value,filterValue}) => {
            if(!filterValue) {
              return true;
            }
            const filterList = filterValue.split(",");
            if(!value) {
              return false;
            }
            let isContained = false;
            filterList.some(filterValue => {
              if(filterValue.toLowerCase() == value.toLowerCase() || filterValue.toLowerCase().trim() == value.toLowerCase().trim()) {
                isContained = true;
                return true;
              }
              return false;

            });
            return !isContained;
          }

        }
      ],
      listOperators : [
        'IN_LIST_STRING',
        'NOT_LIST_STRING'
      ],
      rangeOperatorsList : [],
      filterOptionsList : {
          'CONTAINS_STRING' : 'Contains',
          'EQUALS_STRING' : 'Equals',
          'IN_LIST_STRING' : 'In List',
          'NOT_LIST_STRING' : 'Not In List'
      }
    },
   [FilterType['number']]: {
      defaultValue : '',
      operators : [
        {
          name : 'GREATER',
          filterFunction : ({value,filterValue}) => {
            return isEmptyNumber(filterValue) ? true : isEmptyNumber(value) ? false : value > filterValue;
          }                            
        },
        {
          name : 'GREATER_EQUAL',
          filterFunction : ({value,filterValue}) => {
            return isEmptyNumber(filterValue) ? true : isEmptyNumber(value) ? false : value >= filterValue;
          }
        },
        {
          name : 'LESS',
          filterFunction : ({value,filterValue}) => {
            return isEmptyNumber(filterValue) ? true : isEmptyNumber(value) ? false : value < filterValue;
          }
        },
        {
          name : 'LESS_EQUAL',
          filterFunction : ({value,filterValue}) => {
            return isEmptyNumber(filterValue) ? true : isEmptyNumber(value) ? false : value <= filterValue;
          }
        },
        {
          name : 'EQUALS_NUMERIC',
          filterFunction : ({value,filterValue}) => {
            return isEmptyNumber(filterValue) ? true : isEmptyNumber(value) ? false : value == filterValue;
          }
        } ,
        {
          name : 'IN_RANGE_NUMBER',
          filterFunction: ({value,filterValue}) => {
            if(isEmptyNumber(filterValue)) {
              return true;
            }
            const filterRangeValues = filterValue.split(":::");
            if(!filterRangeValues || filterRangeValues.length < 2) {
              return true;
            }
            if(isEmptyNumber(filterRangeValues[0]) || isEmptyNumber(filterRangeValues[1])) {
              return true;
            }
            if(isEmptyNumber(value)) {
              return false;
            }
            const startNumber = filterRangeValues[0];
            const endNumber = filterRangeValues[1];
            return (Number(startNumber) < Number(value)) && (Number(value) < Number(endNumber))
          }
        } , 
        {
          name : 'NOT_IN_RANGE_NUMBER',
          filterFunction : ({value,filterValue}) => {
            if(isEmptyNumber(filterValue)) {
              return true;
            }
            const filterRangeValues = filterValue.split(":::");
            if(!filterRangeValues || filterRangeValues.length < 2) {
              return true;
            }
            if(isEmptyNumber(filterRangeValues[0]) || isEmptyNumber(filterRangeValues[1])) {
              return true;
            }
            if(isEmptyNumber(value)) {
              return false;
            }
            const startNumber = filterRangeValues[0];
            const endNumber = filterRangeValues[1];
            return (Number(startNumber) > Number(value)) || (Number(value) > Number(endNumber))
          }
        },
        {
          name : 'IN_LIST_NUMBER',
          filterFunction : ({value,filterValue}) => {
            if(isEmptyNumber(filterValue)) {
              return true;
            }
            const filterList = filterValue.split(",");
            if(isEmptyNumber(value)) {
              return false;
            }
            let isContained = false;
            filterList.some(filterValue => {
              if(filterValue == value) {
                isContained = true;
                return true;
              }
              return false;

            });
            return isContained;
          }
        },
        {
          name :'NOT_LIST_NUMBER',
          filterFunction : ({value,filterValue}) => {
            if(isEmptyNumber(filterValue)) {
              return true;
            }
            const filterList = filterValue.split(",");
            if(isEmptyNumber(value)) {
              return false;
            }
            let isContained = false;
            filterList.some(filterValue => {
              if(filterValue == value) {
                isContained = true;
                return true;
              }
              return false;

            });
            return !isContained;
          }

        }

      ],
      listOperators : [
        'IN_LIST_NUMBER',
        'NOT_LIST_NUMBER'
      ],
      rangeOperatorsList : [
        'IN_RANGE_NUMBER',
        'NOT_IN_RANGE_NUMBER'
      ],
      filterOptionsList : {
        'GREATER' : 'Greater than',
        'GREATER_EQUAL' : 'Greater than or equal',
        'LESS' : 'Less than',
        'LESS_EQUAL' : 'Less than or equal',
        'EQUALS_NUMERIC' : 'Equal',
        'IN_LIST_NUMBER': 'In list',
        'NOT_LIST_NUMBER': 'Not in list'
      }

    },
    [FilterType['date']] : {
      defaultValue : '',
      operators : [
        {
          name : 'AFTER',
          filterFunction : ({value,filterValue}) => {
            let enteredDate = getDateInstance(value);
            let filteredDate = getDateInstance(filterValue);
          
            return !filterValue ? true : enteredDate.getTime() > filteredDate.getTime();
          }
        },
        {
          name : 'AFTER_ON',
          filterFunction : ({value,filterValue}) => {
            let enteredDate = getDateInstance(value);
            let filteredDate = getDateInstance(filterValue);
            return !filterValue ? true : enteredDate.getTime() >= filteredDate.getTime();
          }
        },
        {
          name : 'BEFORE',
          filterFunction : ({value,filterValue}) => {
            let enteredDate = getDateInstance(value);
            let filteredDate = getDateInstance(filterValue);
            return !filterValue ? true : enteredDate.getTime() < filteredDate.getTime();
          }
        },
        {
          name : 'BEFORE_ON',
          filterFunction : ({value,filterValue}) => {
            let enteredDate = getDateInstance(value);
            let filteredDate = getDateInstance(filterValue);
            
            return !filterValue ? true : enteredDate.getTime() <= filteredDate.getTime();
          }
        } ,
        {
          name :'IN_RANGE_DATE',
          filterFunction : ({value , filterValue }) => {
            if(!filterValue) {
              return true;
            }
            const filterRangeValues = filterValue.split(":::");
            if(!filterRangeValues || filterRangeValues.length < 2) {
              return true;
            }
            if(!filterRangeValues[0] || !filterRangeValues[1]) {
              return true;
            }
            if(!value) {
              return false;
            }
            
            const startDate = getDateInstance(filterRangeValues[0]);
            let endDate = getDateInstance(filterRangeValues[1]);
            if(endDate.getHours() == 0 && endDate.getMinutes() == 0 && endDate.getSeconds() == 0) {
                endDate = new Date(endDate.getTime() + ONE_DAY_ONE_SECOND_LESS_TIME_IN_MILLISECONDS)
            }
           
            const currentDate = getDateInstance(value);

            return (startDate.getTime() < currentDate.getTime()) && (currentDate.getTime() < endDate.getTime());
          }
        }, 
        {
          name : 'NOT_IN_RANGE_DATE',
          filterFunction : ({value , filterValue }) => {
            if(!filterValue) {
              return true;
            }
            const filterRangeValues = filterValue.split(":::");
            if(!filterRangeValues || filterRangeValues.length < 2) {
              return true;
            }
            if(!filterRangeValues[0] || !filterRangeValues[1]) {
              return true;
            }
            if(!value) {
              return false;
            }
            
            let startDate = getDateInstance(filterRangeValues[0]);
            let endDate = getDateInstance(filterRangeValues[1]);
            if(endDate.getHours() == 0 && endDate.getMinutes() == 0 && endDate.getSeconds() == 0) {
                endDate = new Date(endDate.getTime() + ONE_DAY_ONE_SECOND_LESS_TIME_IN_MILLISECONDS)
            }
            let currentDate = getDateInstance(value);

            return (startDate.getTime() > currentDate.getTime()) || (currentDate.getTime() > endDate.getTime());
          }
        }
      ],
      listOperators: [],
      rangeOperatorsList : [
        'NOT_IN_RANGE_DATE',
        'IN_RANGE_DATE'
      ],
      filterOptionsList : {
        'AFTER_ON' : 'After or on',
        'AFTER' : 'After',
        'BEFORE_ON' : 'Before or on',
        'BEFORE' : 'Before',
        'IN_RANGE_DATE' : 'In range',
        'NOT_IN_RANGE_DATE' : 'Not in range'
      }
    }
  }


  const getDateInstance =(value) => {
    return value instanceof Date ? value : new Date(value);
  }


  export const getFilterOptions = (filterObject ,filterOptions) => {
    
      const displayOptionsMap = filterObject.operatorsList && filterObject.operatorsList.length > 0 ? {} : {...filterOptions}

      if(filterObject.operatorsList && filterObject.operatorsList.length > 0) {
          filterObject.operatorsList.map(operator => {
            displayOptionsMap[operator]= filterOptions[operator];
          });

      }
      return displayOptionsMap;
   
  }