import React, { useEffect } from "react";
import CustomHtmlRender from "../CommonComponents/CustomHtmlRender";
import CustomNote from "../CommonComponents/CustomNote";
import FormGroupElement from "./FormGroupElement";

const FormElement = ({ form, helpers, customHtml, observers }) => {
    const { label, id, htmlGroups, hidden, labelClassName, className, originalId, notes, attributes, ...rest } = form;

    const { htmlActions, defaultValue, elementSize, required, submitDisabled, atleastOneFieldRequired, helperText, ...filteredAttributes } = rest;


    useEffect(()=>{
        if(observers && observers[id]){
            observers[id].map(each=>{
                const [event, callBack] = each;
                if(event == 'load' && callBack) {
                    callBack();
                }
            })
        }
      },[]);

      const action = (e) => {
        const payload = [e, form, id];
        observers['ALL'][0][1](payload);
        Object.entries(observers).map(([key, configs]) => {
            if ((id == key || key == originalId) && key != 'ALL') {
                configs.map(config => {
                    const [eve, callBack] = config;
                    if (e.type == eve && key != 'ALL') {
                        callBack(payload);
                    }
                })
            }
        })
    }

    return (<React.Fragment>
        {!hidden &&
            <React.Fragment>
                {<CustomHtmlRender customHtml={customHtml} id={id} position="INSERT_BEFORE" />}
                {label && <h4 className={labelClassName || ''}>{label}</h4>}
                <form id={id} className={className || ''}  {...filteredAttributes}  {...attributes} onKeyDown={action} onSubmit={action}>
                    {<CustomHtmlRender customHtml={customHtml} id={id} position="INSERT_IN" />}
                    {htmlGroups && htmlGroups.map((group, rootIndex) => {
                        group.rootIndex = rootIndex;
                        return (
                            <FormGroupElement group={group} formId={id} helpers={helpers} customHtml={customHtml} observers={observers} />
                        );
                    })}
                </form>
                {notes && <CustomNote notes={notes} />}
                {<CustomHtmlRender customHtml={customHtml} id={id} position="INSERT_AFTER" />}
            </React.Fragment>
        }
    </React.Fragment>);
}

export default FormElement;