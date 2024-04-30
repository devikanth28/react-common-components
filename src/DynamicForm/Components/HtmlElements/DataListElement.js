import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import ErrorMessage from "../CommonComponents/ErrorMessage";
import HelperText from "../CommonComponents/HelperText";

const DataListElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {

    const { label, id, className, message, labelClassName, placeholder, values, value, attributes, hidden, actions, multiple, helperText, ...rest } = htmlElement;

    const { htmlActions, elementSize, defaultValue, required, regex, ...filteredAttributes } = rest;
    const { floatingLabelClassName } = attributes || {};


    const action = (e) => {
        const payload = [e, htmlElement, formId];
        observers['ALL'][0][1](payload);
        Object.entries(observers).map(([key, configs]) => {
            if (id == (key)
                && key != 'ALL') {
                configs.map(config => {
                    const [eve, callBack] = config;
                    if (e.type == eve && key != 'ALL') {
                        callBack(payload);
                    }
                })
            }
        })
    }


    return (
        <React.Fragment>
            {!hidden &&
                <div className={labelClassName || ""}>
                    <FloatingLabel className={floatingLabelClassName || ""} controlId={id} label={label}>
                        <Form.Control
                            type="text"
                            list="datalistOptions"
                            id={id}
                            placeholder={placeholder || ""}
                            value={value}
                            onChange={action}
                            onBlur={action}
                            onSelect={action}
                            {...filteredAttributes}
                            {...attributes}
                            className={message ? `${className || ''} is-invalid` : (className || '')}
                        />
                        <datalist id="datalistOptions">
                            {values && values.map(({ displayValue, name, value: val, selected: sel,attributes, ...rest }) => {

                                return <option name={name} {...attributes} {...rest} selected={val === value ? true : false} >{displayValue}</option>
                            })}
                        </datalist>
                        {message && <ErrorMessage errorMessage={message} />}
                        {helperText && !message && <HelperText helperText={helperText} />}
                    </FloatingLabel>
                </div>
            }
        </React.Fragment>
    );
}

export default DataListElement;