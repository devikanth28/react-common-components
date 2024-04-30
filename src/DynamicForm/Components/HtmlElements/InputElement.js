import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import HelperText from '../CommonComponents/HelperText';


const InputElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {
    const { label, type, id, hidden, attributes, originalId, placeholder, className = "", value, labelClassName = "", helperText, message, ...rest } = htmlElement;

    const { htmlActions, elementSize, defaultValue, required, regex, ...filteredAttributes } = rest;

    const { floatingLabelClassName } = attributes || {};

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

    return (
        <React.Fragment>
            {!hidden &&
                <div className={labelClassName || "position-relative"}>
                    <FloatingLabel
                        controlId={id}
                        label={label}
                        className={floatingLabelClassName || ''}>
                        <Form.Control
                            onClick={action}
                            onFocus={action}
                            onBlur={action}
                            onChange={action}
                            type={type}
                            className={message ? `${className} is-invalid` : className}
                            placeholder={placeholder ? placeholder : ' '}
                            aria-label={`${type} input`}
                            value={value ? value : ''}
                            {...filteredAttributes}
                            {...attributes}

                        />
                        {message && <ErrorMessage errorMessage={message} />}
                        {helperText && !message && <HelperText helperText={helperText} />}
                    </FloatingLabel>
                    {htmlElement.clearIcon && htmlElement.value && <div className='input-close-container'>
                        <Button variant=" " className={`btn-close ${message ? 'btn-error-position' : 'btn-normal-position'}`} style={message ? { 'right': '2rem' } : {}} onClick={()=>{helpers.updateValue(null,id)}} />
                    </div>}
                </div>}
        </React.Fragment>
    )
}

export default InputElement;