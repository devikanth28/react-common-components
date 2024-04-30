import { useFocusRef } from "@medplus/npm-data-grid";
import React, { useMemo, useState } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { UncontrolledTooltip } from "reactstrap";
import Validate from "../../../LocalityComponent/helpers/Validate";


const animatedComponents = makeAnimated();

const SelectFilter  = (props) => {

    const { id = "" , tooltip = false, column , filters , handleFilterChange , itemsMap,isCellSelected,...rest} = props;

    const [selectedOption,setSelectedOption] = useState(filters[column.key].value ?{value: filters[column.key].value ,label : itemsMap[filters[column.key].value]} : {});
    const {ref,tabIndex} = useFocusRef(isCellSelected);

    const validate = Validate();

    const options = useMemo(() => {
      let options = [];
      Object.keys(itemsMap).map(each => {
        const eachOption = {}
        eachOption.value = each;
        eachOption.label = itemsMap[each];
        options.push(eachOption);

      });
      return options;

    },[itemsMap])

    const handleChange = (selectedValue) => {
      setSelectedOption(selectedValue ? selectedValue: {});
      handleFilterChange({
        ...filters,
        [column.key] : {
          ...filters[column.key],
          value : selectedValue ?selectedValue.value : "" 
        }
      })
    }

    const handleKeyDown = (e) => {
        if(e.keyCode == 38 || e.keyCode == 40 || e.which == 38 || e.which == 40) {
          e.stopPropagation();
        }
    }


    return <React.Fragment>
              <Select
                  ref={ref}
                  id={`react_select_id_${id}`}
                  tabIndex={tabIndex}
                  components={animatedComponents}     
                  options={options}
                  onChange={handleChange}
                  {...rest}
                  value= {selectedOption}
                  menuPortalTarget={document.body}
                  onKeyDown = {handleKeyDown}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      height: "calc(var(--rdg-summary-row-height) - 8px)",
                      minHeight : "calc(var(--rdg-summary-row-height) - 8px)",
                      zIndex: 9999 
                    }),
                  }}
                />
                {tooltip && validate.isNotEmpty(selectedOption) &&
                  <UncontrolledTooltip placement="bottom" target={`react_select_id_${id}`}>
                    {selectedOption.label}
                  </UncontrolledTooltip>
                }
          </React.Fragment>
}

export default SelectFilter;