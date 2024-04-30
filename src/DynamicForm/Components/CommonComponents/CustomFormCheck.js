import React from "react";
import Form from 'react-bootstrap/Form';

const CustomFormCheck = (props) => {

    const { label, type, id, hidden, attributes, placeholder, className, value, labelClassName, helperText, message, ...rest } = props.htmlElement;

    const { htmlActions, elementSize, defaultValue,checked, required, regex, ...filteredAttributes } = rest;


    return (
        <React.Fragment>
                <Form.Check id={id}  {...filteredAttributes} {...attributes}>
                    <Form.Check.Input type={type} checked={checked}/>
                    <Form.Check.Label>{props.label}</Form.Check.Label>
                </Form.Check>
        </React.Fragment>
    )
}
export default CustomFormCheck;