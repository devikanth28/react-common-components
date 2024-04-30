import React from "react";
// import '../../form.css';
import CustomHtmlRender from "../CommonComponents/CustomHtmlRender";
import CustomNote from "../CommonComponents/CustomNote";
import HtmlElementsList from "./HtmlElementsList";

const FormGroupElement = ({ group, formId, helpers, customHtml, observers }) => {
    const { id, groups, groupElements, hidden, position, customHtmlFunction, label, labelClassName, className, attributes, notes, groupFirst, ...rest } = group;

    const { htmlActions, elementSize, required, defaultValue, helperText, ...filteredAttributes } = rest;

    return (
        <React.Fragment>
            {!hidden &&
                <React.Fragment>
                    <div className={className || ''} id={id} {...filteredAttributes}{...attributes}>
                        {<CustomHtmlRender customHtml={customHtml} id={id} position="INSERT_BEFORE" />}
                        <React.Fragment>
                            {label && <label for={id} className={labelClassName || ''}>{label}</label>}
                            {<CustomHtmlRender customHtml={customHtml} id={id} position="INSERT_IN" />}
                            {groupFirst && groups && groups.map((currentGroup, index) => {
                                currentGroup.index = index;
                                currentGroup.rootIndex = group.rootIndex;
                                return (<FormGroupElement group={currentGroup} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />);
                            })}
                            {groupElements &&
                                <HtmlElementsList rootIndex={group.rootIndex} htmlElements={groupElements} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />}
                            {!groupFirst && groups && groups.map((currentGroup, index) => {
                                currentGroup.index = index;
                                return (<FormGroupElement group={currentGroup} formId={formId} helpers={helpers} customHtml={customHtml} observers={observers} />);
                            })}
                            {notes && <CustomNote notes={notes} />}
                        </React.Fragment>
                        {<CustomHtmlRender customHtml={customHtml} id={id} position="INSERT_AFTER" />}
                    </div>
                </React.Fragment>}
        </React.Fragment>
    );
}


export default FormGroupElement;