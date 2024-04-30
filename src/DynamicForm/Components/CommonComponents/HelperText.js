import React from "react";
import { Form } from "react-bootstrap";

const HelperText = ({helperText}) => {

    return (
        <React.Fragment>
            {helperText  &&
                <Form.Text className="text-muted">
                    {helperText}
                </Form.Text>}
        </React.Fragment>

    );
}
export default HelperText;