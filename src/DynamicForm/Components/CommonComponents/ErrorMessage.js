import React from "react";
import { Form } from "react-bootstrap";

const ErrorMessage = ({ errorMessage }) => {
    return (
        <React.Fragment>
            {errorMessage &&
                <Form.Control.Feedback type="invalid">
                    {errorMessage}
                </Form.Control.Feedback>}
        </React.Fragment>);
}

export default ErrorMessage;