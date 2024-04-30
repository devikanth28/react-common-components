import React from 'react';
import { Form } from 'react-bootstrap';
import HelperText from '../CommonComponents/HelperText';

const RadioButtonElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {


    const { label, id, className, style, originalId, labelClassName, defaultPlaceHolder, inline = true, reverse, values, value, required, attributes, hidden, actions, message, helperText, ...rest } = htmlElement;


    const { htmlActions, elementSize, defaultValue, ...filteredAttributes } = rest;


    const action = (e) => {
        const payload = [e, htmlElement, formId];
        observers['ALL'][0][1](payload);
        Object.entries(observers).map(([key, configs]) => {
            if ((id == key || key == originalId)
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
                <div className={className || ''} id={id} {...filteredAttributes} {...attributes}>
                    {label && <label className={labelClassName || ''} >{label}</label>}
                    {values.map(({ name, displayValue, id, value: val, selected: sel, className: optionClassName, ...rest }) => {
                        return (
                            <React.Fragment>
                                <Form.Check
                                    type={'radio'}
                                    inline={inline}
                                    label={displayValue}
                                    reverse={reverse}
                                    name={name}
                                    value={val}
                                    id={id}
                                    onClick={action}
                                    onFocus={action}
                                    onBlur={action}
                                    onChange={action}
                                    isInvalid={message ? true : false}
                                    checked={value === val ? true : false}
                                    className={`${optionClassName || ""}`}
                                    {...filteredAttributes}
                                    {...attributes}
                                />
                            </React.Fragment>);
                    })}
                    {helperText && <HelperText helperText={helperText} />}
                </div>}
        </React.Fragment>
    )
}

export default RadioButtonElement;