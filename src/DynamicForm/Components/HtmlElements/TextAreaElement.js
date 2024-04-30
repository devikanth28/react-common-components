import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import HelperText from '../CommonComponents/HelperText';

const TextAreaElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {

    const { label, id, className, labelClassName, originalId, style, attributes, hidden, message, helperText, ...rest } = htmlElement;

    const { htmlActions, elementSize, defaultValue, required, ...filteredAttributes } = rest;
    const { floatingLabelClassName } = attributes || {};


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
                <div className={labelClassName || ""}>
                    <FloatingLabel controlId={id} label={label} className={floatingLabelClassName || ''}>
                        <Form.Control
                            onClick={action}
                            onFocus={action}
                            onBlur={action}
                            onChange={action}
                            {...filteredAttributes}
                            {...attributes}
                            as="textarea"
                            className={message ? `${className || ''} is-invalid` : (className || '')}
                            style={style || { height: '100px' }}
                        />
                        {message && <ErrorMessage errorMessage={message} />}
                        {helperText && !message && <HelperText helperText={helperText} />}
                    </FloatingLabel>
                </div>}
        </React.Fragment>);

}
export default TextAreaElement;