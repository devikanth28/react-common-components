import React from "react";
import { InputGroup } from "react-bootstrap";
import ErrorMessage from "../CommonComponents/ErrorMessage";
import HelperText from "../CommonComponents/HelperText";
import { prepareHtmlElement } from "./HtmlElementsList";

const JoinElement = ({ htmlElement, formId, helpers, customHtml }) => {
    const { attributes, hidden, message, helperText, htmlElements, ...rest } = htmlElement;

    const { htmlActions, elementSize, defaultValue, required, ...filteredAttributes } = rest;

    return (

        <React.Fragment>
            {!hidden &&
                <InputGroup {...filteredAttributes}{...attributes}>
                    {htmlElements && htmlElements.map(element => {
                        return (prepareHtmlElement(element, formId, helpers));
                    })}
                </InputGroup>}
            {message && <ErrorMessage errorMessage={message} />}
            {helperText && !message && <HelperText helperText={helperText} />}
        </React.Fragment>);
}

export default JoinElement;