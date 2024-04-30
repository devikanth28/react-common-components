import React from 'react';
import Form from 'react-bootstrap/Form';
import HelperText from '../CommonComponents/HelperText';
import SwitchElement from './SwitchElement';


const CheckBoxElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {


    const { label, id, className, style, originalId, labelClassName, switchType, defaultPlaceHolder, values, value, required, inline = true, reverse, attributes, hidden, actions, message, helperText, ...rest } = htmlElement;


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
            {/* <Form.Label>{htmlElement.label}</Form.Label> */}
            {!hidden && !htmlElement.switchType &&
                <div className={className || ''} id={id} {...filteredAttributes}{...attributes}>
                    {label && <label className={labelClassName || ''} >{label}</label>}
                    {values.map(({ id: optionId, name, value: val, displayValue, className: optionClassName, ...rest }) => {
                        return (
                            <Form.Check
                                inline={inline}
                                type={switchType ? 'switch' : 'checkbox'}
                                id={optionId}
                                label={displayValue}
                                value={val}
                                checked={htmlElement?.value?.includes(val) || false}
                                onChange={action}
                                onBlur={action}
                                onFocus={action}
                                onClick={action}
                                isInvalid={message ? true : false}
                                className={`${optionClassName || ""}`}
                                {...filteredAttributes}
                                {...attributes}
                            />
                        )
                    })}
                    {helperText && <HelperText helperText={helperText} />}
                </div>}
            {!hidden && htmlElement.switchType && <SwitchElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />}
        </React.Fragment>
    )
}

export default CheckBoxElement;