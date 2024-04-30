import React from "react";
import CustomHtmlRender from "../CommonComponents/CustomHtmlRender";
import AsyncReactSelectElement from "./AsyncReactSelectElement";
import ButtonElement from "./ButtonElement";
import CheckBoxElement from "./CheckBoxElement";
import CustomElement from "./CustomElement";
import DataListTypeAheadElement from "./DataListTypeAhead";
import DateRangeElement from "./DateRangeElement";
import DropDownElement from "./DropDownElement";
import FileUploadElement from "./FileUploadElement";
import InputElement from "./InputElement";
import JoinElement from "./JoinElement";
import RadioButtonElement from "./RadioButtonElement";
import ReactSelectElement from "./ReactSelectElement";
import TextAreaElement from "./TextAreaElement";

const HtmlElementsList = ({ htmlElements, formId, helpers, customHtml, observers }) => {

    return (
        <React.Fragment>
            {htmlElements && htmlElements.map((htmlElement, index) => {
                htmlElement.index = index;
                return <React.Fragment>
                    {<CustomHtmlRender customHtml={customHtml} id={htmlElement.id} position="INSERT_BEFORE" />}
                    {prepareHtmlElement(htmlElement, formId, helpers, customHtml, observers)}
                    {<CustomHtmlRender customHtml={customHtml} id={htmlElement.id} position="INSERT_AFTER" />}
                </React.Fragment>
            })}
        </React.Fragment>
    );
}

export default HtmlElementsList;

export const prepareHtmlElement = (htmlElement, formId, helpers, customHtml, observers) => {
    switch (htmlElement.htmlElementType) {
        case "INPUT":
            return (<InputElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />);
        case "BUTTON":
            return (<ButtonElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />);
        case 'TEXTAREA':
            return <TextAreaElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />
        case "SELECT":
            return (<DropDownElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />)
        case 'RADIO':
            return <RadioButtonElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />;
        case 'CHECKBOX':
            return <CheckBoxElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />;
        case 'DATALIST':
            return <DataListTypeAheadElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />;
        case 'REACTSELECT':
            return <ReactSelectElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />;
        case 'ASYNCREACTSELECT':
            return <AsyncReactSelectElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />;
        case 'JOIN':
            return <JoinElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />;
        case 'CUSTOM':
            return <CustomElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />
        case 'FILE':
            return <FileUploadElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />;
        case 'DATERANGE':
            return <DateRangeElement htmlElement={htmlElement} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />;
        default:
            return null;
    }
}