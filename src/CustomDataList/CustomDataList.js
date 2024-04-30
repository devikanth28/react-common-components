import React from "react";
import { FloatingLabel, Form  } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Validate from "../LocalityComponent/helpers/Validate";

const CustomDataList=(props)=>{

    const animatedComponents = makeAnimated(); 
    const {isClearable=true,isMulti=true,isSearchable=true, portalId} =props;
    function SetOptions(valuesArray) {
        const options = valuesArray.map((item,index) => {
            const key = typeof item === 'object' ? (Object.keys(item)[0] !== undefined ? Object.keys(item)[0] : index) : index;
            const value = typeof item === 'object' ? Object.values(item)[0] : item;
            return {
                key: key,
                value: value,
                label: (
                    <>
                        <span title={value}>{value}</span>
                    </>
                )
            };
        });
    
        return options;
    }
    return (
        <React.Fragment>
            {props.data && <FloatingLabel className={props.className} controlId={props.controlId} label={props.label}>
                <Select
                    isMulti={isMulti}
                    name="colors"
                    value={Validate().isNotEmpty(props.value) ? SetOptions(props.value) : SetOptions([])}
                    inputValue={props.inputValue}
                    onInputChange={props.handleInputChange}
                    onBlur={props.handleInputBlur}
                    onChange={props.handleChange}
                    options={SetOptions(props.data)}
                    isSearchable={isSearchable}
                    isDisabled={props.isDisable}
                    className={`custom-floating-select form-select groups-flex-nowrap ${props.isDisable ? "disabled-background" : ""}`}
                    classNamePrefix="datalist"
                    components={animatedComponents}
                    isClearable={isClearable}
                    menuPortalTarget={Validate().isNotEmpty(portalId) ? document.getElementById(portalId) ? document.getElementById(portalId) : document.body : null}
                    styles={{
                        menuPortal: (base) => (
                            Validate().isNotEmpty(portalId) 
                                ? { ...base, zIndex: 1060 } 
                                : {...base}
                        ) 
                    }}                    
                />
            </FloatingLabel>
            }
        </React.Fragment>)

}
export default CustomDataList