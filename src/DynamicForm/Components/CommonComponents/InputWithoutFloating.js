import React from 'react';
import { Form } from 'react-bootstrap';

const InputWithOutFlotingPoint = (props) => {
    return (
        <React.Fragment>
            <Form.Control
                type={props.type}
                placeholder={props.placeholder}
                size={props.size}
                aria-label={`${props.type} input`}
                readOnly={props.readOnly}
                disabled={props.disabled}
                plaintext={props.plaintext}
                value={props.value}
                className={props.controlClassName} />
            {props.errorMsg !== undefined && <Form.Control.Feedback type="invalid">
                {props.errorMsg}
            </Form.Control.Feedback>}
        </React.Fragment>
    )
}
export default InputWithOutFlotingPoint