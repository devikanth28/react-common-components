import React from "react";
import { Form } from "react-bootstrap";
import ErrorMessage from "../CommonComponents/ErrorMessage";
import HelperText from "../CommonComponents/HelperText";

const FormCheckElement = ({ htmlElement, formId, helpers, observers, ...props }) => {


    const { label, type, id, hidden, attributes, placeholder, className, value, labelClassName, helperText, message, ...rest } = htmlElement;

    const { htmlActions, elementSize, defaultValue, required, regex, ...filteredAttributes } = rest;



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
                <Form.Check
                    id={props.id}
                    disabled={props.disabled}
                    inline={props.inline}
                    reverse={props.reverse}
                    onClick={action}
                    onFocus={action}
                    onBlur={action}
                    onChange={action}
                    {...filteredAttributes}
                    {...attributes}
                >
                    <Form.Check.Input type={type} isInvalid={message ? true : false} checked={true} />
                    <Form.Check.Label>{label}</Form.Check.Label>
                    {message && <ErrorMessage errorMessage={message} />}
                    {helperText && !message && <HelperText helperText={helperText} />}
                </Form.Check>}
        </React.Fragment>
    );
}
export default FormCheckElement;