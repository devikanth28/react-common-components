import React from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import HelperText from '../CommonComponents/HelperText';

const DropDownElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {



    const { id, label, className, originalId, defaultPlaceHolder, values, value, attributes, hidden, multiple, message, helperText, labelClassName, ...rest } = htmlElement;

    const { htmlActions, elementSize, defaultValue, required, ...filteredAttributes } = rest;
    const { floatingLabelClassName } = attributes || {}

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
                <React.Fragment>
                    {multiple ?
                        <React.Fragment>
                            <div className={className} id={id}>
                                <Form.Select aria-label={label} className={className} onChange={action} onClick={action} onBlur={action} onFocus={action} {...filteredAttributes} {...attributes} multiple>
                                    {defaultPlaceHolder && <option>{defaultPlaceHolder}</option>}
                                    {values && values.map(({ displayValue, name, value: val, selected: sel,attributes, ...rest }) => {
                                        return <option name={name} {...attributes} value={val}{...rest} selected={val === value ? true : false} >{displayValue}</option>
                                    })}
                                </Form.Select>
                            </div>
                            {message && <ErrorMessage errorMessage={message} />}
                            {helperText && !message && <HelperText helperText={helperText} />}
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className={labelClassName || ""}>
                                <FloatingLabel controlId={id} className={floatingLabelClassName || ""} label={label} onChange={action} onClick={action} onBlur={action} onFocus={action}>
                                    <Form.Select aria-label={label} className={message ? `${className} is-invalid` : className} {...filteredAttributes}{...attributes}>
                                        {defaultPlaceHolder && <option>{defaultPlaceHolder}</option>}
                                        {values && values.map(({ displayValue, value: val, selected: sel, ...rest }) => {
                                            return <option value={val}{...rest} selected={val === value ? true : false}  >{displayValue}</option>
                                        })}
                                    </Form.Select>
                                    {message && <ErrorMessage errorMessage={message} />}
                                    {helperText && !message && <HelperText helperText={helperText} />}
                                </FloatingLabel>
                            </div>
                        </React.Fragment>
                    }
                </React.Fragment>

            }
        </React.Fragment>
    );

}

export default DropDownElement;
