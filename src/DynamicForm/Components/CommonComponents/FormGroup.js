import React from 'react';
import { Form } from 'react-bootstrap';
import InputWithOutFlotingPoint from './InputWithoutFloating';


const CustomFormGroup = (props) => {
    return (
        <React.Fragment>
            <Form.Group className={props.className} controlId={props.controlId}>
                <Form.Label>{props.labelValue}</Form.Label>
                <InputWithOutFlotingPoint type={props.type} placeholder={props.placeholder}
                    size={props.size}
                    readOnly={props.readOnly}
                    disabled={props.disabled}
                    plaintext={props.plaintext}
                    value={props.value}
                    controlClassName={props.controlClassName} />
            </Form.Group>
        </React.Fragment>
    )
}
export default CustomFormGroup;