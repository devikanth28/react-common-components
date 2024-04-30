import React, { useEffect, useRef, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Hint, Menu, MenuItem,Typeahead  } from 'react-bootstrap-typeahead';
import ErrorMessage from "../CommonComponents/ErrorMessage";
import HelperText from "../CommonComponents/HelperText";
import { UncontrolledTooltip } from 'reactstrap'
import Validate from "../../../LocalityComponent/helpers/Validate";
import { createPortal } from 'react-dom';


const DataListTypeAheadElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {

    const { label, id, className, message, labelClassName, originalId, placeholder, values, value, attributes, hidden, actions, multiple, helperText, onInputChangeEnable ,dataListClassName,inputText,...rest } = htmlElement;

    const { htmlActions, elementSize, defaultValue, required, regex, ...filteredAttributes } = rest;
    const { floatingLabelClassName, menuHeight, placement, portalId } = attributes || {};

    const [optionSelected , setOptionSelected]=useState(null);

    const ref = useRef(null);
    useEffect(()=>{
        if (!optionSelected?.length||value) {
            defaultSelectedOption();
        }
        if(!value) {
            helpers.updateSingleKeyValueIntoField("inputText",null, id, false);
            setOptionSelected(null);
        }
    },[values,value])

    const action = (e) => {
        const payload = [e, htmlElement, formId];
        observers['ALL'][0][1](payload);
        Object.entries(observers).map(([key, configs]) => {
            if ((id == key || key == originalId) && key != 'ALL') {
                configs.map(config => {
                    const [eve, callBack] = config;
                    if (e.type == eve && key != 'ALL') {
                        callBack(payload);
                    }
                })
            }
        })
    }

    const setOptionValues=(selectedOption)=>{
        let e = { type: {}, target: { value: [] } }
        let submitValues=[]
        
        selectedOption.map(({value :val}) => {
                submitValues.push(val);
        })
        if(submitValues.length != 0 ){
            e.type = "select"
            e.target.value = submitValues;
            helpers.updateSingleKeyValueIntoField("inputText",null, id, false);
            action(e);
            setOptionSelected(selectedOption);
        } else {
            if(multiple) {
                setOptionSelected(null);
                helpers.updateSingleKeyValueIntoField("inputText", null, id, false);
                action({ type: "select", target: { value: [] } })
            }
        }
    }

    const createOptions = (valuesList) => {
        return valuesList.map(({ displayValue, id: optionId, value: optionValue }) => {
            return {
                label: `${displayValue}`,
                optionId: `${optionId}`,
                value: `${optionValue}`
            }
        })
    }

    const createDataListOption=(displayValue,optionId,value)=>{
        return [{
            label: `${displayValue}`,
            optionId: `${optionId}`,
            value: `${value}`
        }]
    }

    const defaultSelectedOption = () => {
        let optionMatched = false;
        if (value && value.length != 0) {
            const selectedOptions = []
            values && values.map(({ displayValue, id: optionId, value: val, selected }) => {
                if (multiple) {
                    value.forEach(option => {
                        if (val == option) {
                            optionMatched = true;
                            selectedOptions.push(...createDataListOption(displayValue, optionId, option));
                        }
                    })
                } else {
                    if (val == value[0]) {
                        optionMatched = true
                        setOptionSelected(createDataListOption(displayValue, optionId, value));
                    }

                }
            })
            if (multiple && optionMatched && selectedOptions) {
                setOptionSelected(selectedOptions);
            }
            if (!optionMatched && value[0]) {
                setOptionSelected(createDataListOption(value[0], value[0], value[0]));
            }
            else if (!optionMatched && inputText) {
                setOptionSelected(createDataListOption(inputText, inputText, inputText));
            }
            else if (!optionMatched) {
                setOptionSelected(createDataListOption("", "", ""));
            }
        }
    }

    
    return (
       
       <React.Fragment>
           {!hidden &&
                <div className={dataListClassName || "w-auto"}>
                     <Typeahead
                     id={id}
                     ref={ref}
                     onInputChange={multiple ? undefined : (TextedValue, event) => {setOptionSelected(createDataListOption(TextedValue, TextedValue, TextedValue));helpers.updateSingleKeyValueIntoField("inputText", TextedValue, id, false);action(event)}}
                     onBlur={action}
                     onChange={(selectedValue)=>{setOptionValues(selectedValue)}}
                     onFocus={()=>helpers.updateSingleKeyValueIntoField("message",null, id, false)}
                     options={values && createOptions(values)}
                     selected={(value) ? optionSelected:[]}
                     placeholder={placeholder || label || ''}
                     multiple={multiple}
                     onKeyDown={(e)=>{
                         if(e.key == 'Tab') {
                           if(ref?.current?.state?.activeItem){
                               if(multiple) {
                                   setOptionValues([...optionSelected,ref.current.state.activeItem])
                               } else {
                                  setOptionValues([ref.current.state.activeItem])
                               }
                           }
                         }
                       }}
                     className={`dynamicform-datalist-typeahed`}
                         {...filteredAttributes}
                         {...attributes}
                    renderInput={multiple ? undefined : ({ inputRef, referenceElementRef, ...inputProps }) => (
                             <React.Fragment>
                                    <Hint>
                                        <div className={labelClassName || "w-100"}>
                                         <FloatingLabel
                                             controlId={id}
                                             label={label}
                                             className={floatingLabelClassName || ''}>
                                             <Form.Control
                                                 {...inputProps}
                                                 ref={(node) => {
                                                     inputRef(node);
                                                     referenceElementRef(node);
                                                 }}
                                                 className={message ? `${className || ''} is-invalid` : (className || '')}
                                             />
                                             {message && <ErrorMessage errorMessage={message} />}
                                             {helperText && !message && <HelperText helperText={helperText} />}
                                         </FloatingLabel>
                                        </div>
                                    </Hint>
                             </React.Fragment>
                         )}  
                                             
                         renderMenu={(results, menuProps) => {
                            if(Validate().isNotEmpty(portalId)) {
                                return(
                                  createPortal(
                                        <Menu {...menuProps} maxHeight={menuHeight || '300px'} style={{...menuProps.style,minWidth:"max-content"}}>
                                            {results.map((result, index) => (
                                                <>
                                                <MenuItem option={result} position={index}>
                                                {result.label}
                                                </MenuItem>
                                                {placement && <UncontrolledTooltip placement={placement} target={`${id? id : 'dataList'}-item-${index}`}>
                                                {result.label}
                                                </UncontrolledTooltip>}
                                                </>
                                            ))}
                                        </Menu>, (document.getElementById(portalId)) ? document.getElementById(portalId) : document.body)
                                )
                              } else {
                                return(
                                    <Menu {...menuProps} maxHeight={menuHeight || '300px'} style={{...menuProps.style,minWidth:"max-content"}}>
                                        {results.map((result, index) => (
                                            <>
                                            <MenuItem option={result} position={index}>
                                            {result.label}
                                            </MenuItem>
                                            {placement && <UncontrolledTooltip placement={placement} target={`${id? id : 'dataList'}-item-${index}`}>
                                            {result.label}
                                            </UncontrolledTooltip>}
                                            </>
                                        ))}
                                    </Menu>
                                )                                                           
                           }}}
                     >
                     {({ onClear }) =>
                     ((!filteredAttributes.disabled) && (inputText && inputText.length || (optionSelected && optionSelected[0] && optionSelected[0].value)) &&
                         <div className="rbt-aux">
                             <button
                                 aria-label="Clear"
                                 class={`close btn-close rbt-close ${Validate().isNotEmpty(message) ? "btn-error-position" : "btn-normal-position"}`}
                                 type="button"
                                 onClick={e => {
                                     setOptionSelected(null);
                                     helpers.updateSingleKeyValueIntoField("inputText", null, id, false);
                                     onClear();
                                     action({ type: "select", target: { value: [] } })
                                 }}
                                 onFocus={e => {
                                     e.stopPropagation();
                                 }}
                                 onMouseDown={e => {
                                     e.preventDefault();
                                 }}
                                 {...filteredAttributes}
                                 {...attributes}
                             >
                                 <span class="sr-only visually-hidden">Clear</span>
                             </button>
                         </div>
                     )
                     }
                     </Typeahead>
                 </div>
            }
        </React.Fragment>
    )
}
export default DataListTypeAheadElement;