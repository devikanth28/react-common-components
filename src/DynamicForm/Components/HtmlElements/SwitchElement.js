import React from "react";
import Switch from "react-switch";
import HelperText from "../CommonComponents/HelperText";

const SwitchElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {

    const { label, id, className, style, originalId, labelClassName, switchType, defaultPlaceHolder, values, value, required, inline = true, reverse, attributes, hidden, actions, message, helperText, ...rest } = htmlElement;
    const { htmlActions, elementSize, defaultValue, ...filteredAttributes } = rest;

    const action = (checked,e) => {
        e.target.checked=checked;
        const payload = [e, htmlElement, formId];
        observers['ALL'][0][1](payload);
        Object.entries(observers).map(([key, configs]) => {
            if ((id == key || key == originalId)
                && key != 'ALL') {
                configs.map(config => {
                    const [eve, callBack] = config;
                    if (eve == 'change' && key != 'ALL') {
                        callBack(payload);
                    }
                })
            }
        })
    }

    return (
        <React.Fragment>
            <div className={`custom-react-switch ${labelClassName || ""}`} >
                <label htmlFor={id} >
                    <span>{label}</span>
                    {values.map(({ id: optionId, name, value: val, displayValue, className: optionClassName, ...rest }) => {
                        return (
                            <Switch
                                checked={(htmlElement && htmlElement.value) ? htmlElement.value.includes(val) : false}
                                onChange={(checked, event, id) => { action(checked,event) }}
                                onBlur={(checked, event, id) => { action(checked,event) }}
                                onColor="#A0DFD4"
                                offColor='#C4C8CB'
                                onHandleColor="#11B094"
                                handleDiameter={18}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={12}
                                width={28}
                                id={id}
                                className={message ? `${className || ''} is-invalid` : (className || '')}
                                {...filteredAttributes}
                                {...attributes}
                            />
                        )
                    })}
                </label>
                {helperText && <HelperText helperText={helperText} />}
            </div>
        </React.Fragment>
    )
}
export default SwitchElement