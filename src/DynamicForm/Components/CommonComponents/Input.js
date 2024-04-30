import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Observables from '../../Utils/Observables';
import { prepareEventKey } from '../../Utils/ValidationHelper';


const Input = (props) => {
    
    const action = (e) => {
        Observables.notify({ type: prepareEventKey(e.type, props.htmlElement.id), payload: [e, props.htmlElement, props.formId] });
    }
    return (
        <React.Fragment>
            <FloatingLabel
                controlId={props.controlId}
                label={props.label}
                className={props.className}>
                <Form.Control
                    onClick={action}
                    onFocus={action}
                    onBlur={action}
                    onChange={action}
                    type={props.type}
                    placeholder={props.placeholder ? props.placeholder : ' '}
                    size={props.size}
                    aria-label={`${props.type} input`}
                    readOnly={props.readOnly}
                    disabled={props.disabled}
                    plaintext={props.plaintext}
                    value={props.htmlElement.value || ''}
                    className={props.controlClassName} />
                {props.errorMsg && <Form.Control.Feedback type="invalid">
                    {props.errorMsg}
                </Form.Control.Feedback>}
            </FloatingLabel>
        </React.Fragment>
    )
}
export default Input;