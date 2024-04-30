import React from "react";

const CustomElement = ({ htmlElement, formId, helpers, customHtml }) => {

    const { attributes, htmlElementType, tagName, hidden, ...rest } = htmlElement;

    const { htmlActions, elementSize, ...filteredAttributes } = rest;

    return (
        <React.Fragment>
            {!hidden &&
                React.createElement(tagName, { ...filteredAttributes, ...attributes }, null)
            }
        </React.Fragment>
    );

}

export default CustomElement;