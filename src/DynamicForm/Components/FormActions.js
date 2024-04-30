import React from "react";
import Validate from "../../LocalityComponent/helpers/Validate";
import { serverRequest } from '../Utils/AxiosHelper';
import { validateField } from "../Utils/ValidationHelper";
import FormElement from "./HtmlElements/FormElement";

const FormActions = ({ history, customHtml, helpers, observers = {} }) => {

    const validate = Validate();

    //all events One Stop
    const handleActions = (payload) => {
        const [event, htmlElement, formId] = payload;
        handleDefaultEvents(event, htmlElement, formId);
        const { htmlActions } = htmlElement;
        if (htmlActions?.map(action => {
            if ((action.event).toLowerCase() === (event.type).toLowerCase()) {
                doAction(action, htmlElement, formId);
            }
        }));
    }

    observers['ALL'] = [['ALL', handleActions]];
    //handles default events
    const handleDefaultEvents = (event, htmlElement, formId) => {
        switch (event?.type) {
            case 'focus':
                handleFocus(event, htmlElement, formId);
                break;
            case 'blur':
                handleBlur(event, htmlElement, formId);
                break;
            case 'change':
                handleChange(event, htmlElement, formId);
                break;
            case 'click':
                handleClick(event, htmlElement, formId);
                break;
            case 'mouseup':
                handleMouseUp(event, htmlElement, formId);
                break;
            case 'select':
                handleSelect(event, htmlElement, formId);
                break;
            default:
                break;
        }
    }

    const handleDataListValue =(event, htmlElement, formId)=>{
        let value=null;
        if (htmlElement.htmlElementType === 'DATALIST') {
            value = []
            if (htmlElement.value && event.target.value == "" && event.type == "change") {
                value = []
            }
            else if (event && event.target && event.target.value && event.type == "change"){
                helpers.updateSingleKeyValueIntoField("inputText", [event.target.value], htmlElement.id, false)
                 }
            else if (Array.isArray(event.target.value)) {
                value = event.target.value
            }
            else {
                value.push(event.target.value);
            }
        }
        return value;
    }

    const handleReactSelect = (event, htmlElement, formId) => {
        let value = [];
        let elementValue = validate.isNotEmpty(htmlElement.value) ? htmlElement.value : [];
        let eventValue = validate.isNotEmpty(event?.target?.value) ? event.target.value : null;
        if (htmlElement.considerInputText && eventValue && event.type == "blur") {
            let newSelectedValue = helpers.createReactSelectOption(eventValue, eventValue, eventValue);
            value = htmlElement.multiple ? [...elementValue, newSelectedValue] : [newSelectedValue];
        } else if (event && event.target && event.target.value && event.type == "change") {
            helpers.updateSingleKeyValueIntoField("inputText", event.target.value, htmlElement.id, false)
        }
        else if (Array.isArray(eventValue)) {
            value = eventValue;
        }
        return value;
    }

    const handleSelect = (event, htmlElement, formId) => {
        let value = null;
        const [doesValueChange, errorMessage] = shouldUpdateValue(event, htmlElement, formId);    
        if (htmlElement.htmlElementType === 'DATALIST') {
            value = handleDataListValue(event, htmlElement, formId)
        }else if(htmlElement.htmlElementType === 'REACTSELECT'){
            value = handleReactSelect(event, htmlElement, formId)
        }else if(htmlElement.htmlElementType === 'ASYNCREACTSELECT'){
            value = handleReactSelect(event, htmlElement, formId);
        }   
        helpers.updateErrorMessage(errorMessage, htmlElement.id, formId);
        if(!doesValueChange){
            return
        }
        helpers.updateValue(value, htmlElement.id, false);
    }

    const handleMouseUp = (event, htmlElement, formId) => {
        if (htmlElement.switchType && htmlElement.values) {
            let value = event.target.checked ? htmlElement.values[0].value : null;
            helpers.updateValue(value, htmlElement.id);
        }
    }

    //handle default focus
    const handleFocus = (event, htmlElement, formId) => {
        if (htmlElement.type == "date" && htmlElement.message != "This field is mandatory") {
            helpers.updateErrorMessage(htmlElement.message, htmlElement.id, formId);
        }
        else {
            helpers.updateErrorMessage("", htmlElement.id, formId);
        }   
     }

    //handle default Blur
    const handleBlur = (event, htmlElement, formId) => {
        const [, errorMessage] = validateField(htmlElement, event.target.value, event.type, event,helpers);
        if (errorMessage || htmlElement.htmlElementType === "FILE" ) {
            helpers.updateErrorMessage(errorMessage, htmlElement.id, formId);
        }else if(htmlElement.htmlElementType === "REACTSELECT" && htmlElement.considerInputText && validate.isNotEmpty(event.target.value)){
            let value = handleReactSelect(event,htmlElement,formId,helpers);
            helpers.updateValue(value, htmlElement.id, false);
        }else if(htmlElement.htmlElementType === "ASYNCREACTSELECT" && htmlElement.considerInputText && validate.isNotEmpty(event.target.value)){
            let value = handleReactSelect(event,htmlElement,formId,helpers);
            helpers.updateValue(value, htmlElement.id, false);
        }
    }

    //checks if value should be updated
    const shouldUpdateValue = (event, htmlElement, formId) => {
        const [doesValueChange, errorMessage] = validateField(htmlElement, event.target.value, event.type, event,helpers);
        return [doesValueChange, errorMessage];
    }

    //handle default Change
    const handleChange = (event, htmlElement, formId) => {
        const [doesValueChange, errorMessage] = shouldUpdateValue(event, htmlElement, formId);
        const elementType = htmlElement.htmlElementType;
        if (elementType === 'FILE' || elementType === 'CHECKBOX' || elementType === 'DATALIST' || elementType === 'RADIO' ) {
            helpers.updateErrorMessage(errorMessage, htmlElement.id, formId);
        }
        if (!doesValueChange) {
            return;
        }
        let value = null;
        if (elementType === 'CHECKBOX') {
            value = handleCheckBoxChange(event, htmlElement, formId);
        }
        else if (elementType === 'SELECT') {
            if (htmlElement.multiple) {
                value = event.target.selectedOptions.map(({ value }) => {
                    return value;
                });
            }
            else {
                if (event.target.value == htmlElement.defaultPlaceHolder) {
                    value = null;
                }
                else {
                    value = event.target.value;
                }
            }
        }
        else if (elementType === 'FILE') {
            if (htmlElement.addMoreFiles) {
                let stateFileValue = htmlElement.value;
                if (!htmlElement.value) {
                    value = []
                    for (let i = 0; i < event?.target?.files?.length; i++) {
                        value.push(event?.target?.files[i])
                    }
                }
                else {
                    for (let i = 0; i < event?.target?.files?.length; i++) {
                        htmlElement?.value.push(event?.target?.files[i])
                    }
                    value = stateFileValue;
                }
            }
            else {
                value = []
                for (let i = 0; i < event?.target?.files?.length; i++) {
                    value.push(event?.target?.files[i])
                }
            }
        }
        else if (elementType === 'DATALIST') {
                value = handleDataListValue(event, htmlElement, formId);
        }else if (elementType === 'REACTSELECT'){
                return ;
        }else if (elementType === 'ASYNCREACTSELECT'){
                return ;         
        } else if (elementType === 'DATERANGE') {
            const [, errorMessage] = validateField(htmlElement, event.target.value, event.type, event, helpers);
            helpers.updateErrorMessage(errorMessage, htmlElement.id, formId);
            value = [];
            if (event.target.value) {
                if (!Array.isArray(event.target.value)) {
                    value = [(new Date(event.target.value)).getTime()]
                } else {
                    value = event.target.value;
                }
            }
            else{
                helpers.updateSingleKeyValueIntoField("maxRange", null, htmlElement.id);
            }
        }
        else {
            value = event.target.value;
        }
        helpers.updateValue(value, htmlElement.id, false);
        const formElement = helpers.getHtmlElement(formId, formId)

        if (formElement.submitDisabled) {
            handleSubmitOnChange(formId);
        }
    }

    //handle default checkbox change
    const handleCheckBoxChange = (event, htmlElement, formId) => {
        let value = event.target.value;
        const key = 'value';
        if(htmlElement.switchType === true){
            value = event.target.checked ?  htmlElement.values[0].value : null;
        }
        else if (htmlElement[key] == null) {
            return [value];
        } else if (Array.isArray(htmlElement[key]) && htmlElement[key].length === 0) {
            return [value];
        }
        else {
            value = event.target.checked ? [...htmlElement[key], value] : htmlElement[key].filter(val => val !== value);
        }
        return value;
    }

    //handle default button click
    const handleClick = (event, htmlElement, formId) => {
        if (htmlElement.htmlElementType === "SELECT" || htmlElement.switchType) {
            return handleChange(event, htmlElement, formId)
        }
        if (htmlElement.submit) {
            handleSubmitClick(htmlElement,formId);
            return;
        }
        if (htmlElement.reset) {
            helpers.resetForm(formId);
        }
    }

    ///Perform Configured Actions
    const doAction = (action, htmlElement, formId) => {
        const { actionType } = action;
        switch (actionType) {
            case 'DATA_UPDATION':
                doDataUpdation(action, htmlElement, formId);
                break;
            case 'DOM_MANIPULATION':
                handleDOMFromResponse(action, htmlElement, formId);
                break;
            case 'PAGE_REDIRECTION':
                doRedirection(action);
                break;
            case 'REQUEST_ACTION':
                handleRequestAction(action, htmlElement, formId);
                break;

            default:
                break;
        }
    }

    // do data Updation Into Form
    const doDataUpdation = (action, htmlElement, formId) => {
        action.data.map(dataInfo => {
            const { htmlElementId, htmlElementKey, htmlElementValue } = dataInfo;
            helpers.updateDataFromServer(formId, htmlElementId, htmlElementKey, htmlElementValue);
        })
    }

    //handles dom Manipulation From API
    const handleDOMFromResponse = (action, htmlElement, formId) => {
        action.domElements.map(domInfo => {
            const { element, elementPosition, id } = domInfo;
            helpers.addElementAnyWhere(formId, element, id, elementPosition);
        })
    }


    //page Redirection
    const doRedirection = (action) => {
        const { redirectUrl, external, openInNewTab } = action;
        if (redirectUrl) {
            if (external) {
                window.open(redirectUrl, (openInNewTab ? '_blank' : '_self'));
            }
            else {
                history.push(redirectUrl);
            }
        }
    }

    //handles default submit click
    const handleSubmitClick = (htmlElement, formId) => {
        const [oneFieldError, formErrors] = helpers.getFormErrorConfigurations(formId);
        if (oneFieldError == true) {
            alert("Please Enter Atleast One Field");
            return false;
        }
        else if (formErrors == true) {
            helpers.validateAndSetErrorMessagesInForm(formId);
            return false;
        }
        else {
            return true;
        }
    }

    //handles enables submit on field change
    const handleSubmitOnChange = (formId) => {
        const [oneFieldError, formErrors] = helpers.getFormErrorConfigurations(formId);
        const submitButton = helpers.getSubmitButton(formId);
        if (oneFieldError == true) {
            helpers.disableElement(submitButton.id, formId);
            return;
        }
        else if (formErrors == true) {
            helpers.disableElement(submitButton.id, formId);
            return;
        }
        helpers.enableElement(submitButton.id, formId);
    }



    //handle request Action
    const handleRequestAction = async (action, htmlElement, formId) => {
        try {
            let parameters = {};
            let isValidForm = true;
            helpers.setLoader(htmlElement.id, true);
            if (htmlElement.submit && htmlElement.htmlElementType == 'BUTTON') {
                isValidForm = handleSubmitClick(htmlElement, formId);
                if (!isValidForm) {
                    return;
                }
                parameters = helpers.collectValuesForSubmit(formId);
            }
            else {
                const [, errorMessage] = validateField(htmlElement, htmlElement.value, 'blur',helpers);
                if (errorMessage) {
                    return;
                }
                const value = helpers.getHtmlElementValue(htmlElement.id);
                parameters[htmlElement.id] = value;
            }
            const requestData = action.request;
            const { method, url, uiParameters, requestParameters = {}, headers } = requestData;
            parameters = { ...parameters, ...requestParameters };
            let isFilePresent = false;
            if (uiParameters) {
                const fileData = new FormData();
                const fieldValues = helpers.collectSpecificFieldValues(formId, uiParameters);
                for (let i = 0; i < uiParameters.length; i++) {
                    if (fieldValues[uiParameters[i]] && fieldValues[uiParameters[i]][0] instanceof File) {
                        isFilePresent = true
                    }
                }
                if (isFilePresent) {
                    for (let i = 0; i < uiParameters.length; i++) {
                        if (fieldValues[uiParameters[i]] && fieldValues[uiParameters[i]][0] instanceof File) {
                            for (let j = 0; j < fieldValues[uiParameters[i]].length; j++) {
                                fileData.append(uiParameters[i], fieldValues[uiParameters[i]][j])
                            }
                        }
                        fileData.append(uiParameters[i], fieldValues[uiParameters[i]])
                        parameters = fileData
                    }
                }
                else {
                    parameters = { ...parameters, ...fieldValues };
                }
            }
            let headersList = { 'Content-Type': 'application/json', ...headers };
            if (isFilePresent) {
                headersList = { 'Content-Type': 'multipart/formData', ...headers };
            }
            if (htmlElement.submit == true) {
                helpers.disableElement(htmlElement.id, formId);
            }
            const response = await serverRequest(method, url, parameters, headersList);
            helpers.setLoader(htmlElement.id, false);
            if (htmlElement.submit == true) {
                helpers.enableElement(htmlElement.id, formId);
            }
            const data = await response.data;
            handleResponse(data, htmlElement, formId);
        }
        catch (err) {
            console.log(err);
        }
    }

    //handle Responses
    const handleResponse = (response, htmlElement, formId) => {
        if (response.statusCode === 'SUCCESS' && response.action) {
            doAction(response.action, htmlElement, formId);
        }
        Object.entries(observers).map(([key, configs]) => {
            if (key == 'RESPONSE') {
                configs.map(config => {
                    const [eve, callBack] = config;
                    if (eve == 'RESPONSE') {
                        callBack(response);
                    }
                })
            }
        })
    }

    return (
        <React.Fragment>
            {helpers.getForms() && helpers.getForms().map((form, index) => {
                form.index = index;
                return <FormElement form={form} helpers={helpers} customHtml={customHtml} observers={observers} />
            })}
        </React.Fragment>
    );
}
export default FormActions;