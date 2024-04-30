import axios from "axios";
import React from "react";
import ElementGroup from "../../Classes/ElementGroup";
import Form from "../../Classes/Form";
import HtmlElement from "../../Classes/HtmlElement";
import { REQUEST_TYPE, serverRequest } from "../../Utils/AxiosHelper";
import { validateField } from "../../Utils/ValidationHelper";
const withFormHoc = (WrappedComponent, moduleName, user) => {

    class WithFormHOC extends React.Component {

        constructor(props) {
            super(props);
            this.state = { forms: [], initialLoad: false, moduleName, user, observers: {} };
            this.setState = this.setState.bind(this);
            this.stateRefCopy = React.createRef();
            this.initialLoad = React.createRef();
            this.initialLoad.current = false;
            this.stateRefCopy.current = [];
        }



        subscribe = ({ type, payload }) => {
            if (!this.state.observers[type]) {
                let tempObserve = this.state.observers;
                tempObserve[type] = payload;
                this.setState({ observers: tempObserve });
            }
        }

        subscribeAll = (actions) => {
            Object.entries(actions).map(([key, handler]) => {
                this.subscribe({ type: key, payload: handler });
            })
        }

        unSubscribe = (key) => {
            Object.entries(this.state.observers).forEach(([keyValue, fun]) => {
                if (fun == key || key === keyValue) {
                    const { key, ...rest } = this.state.observers;
                    this.setState({ observers: rest });
                }
            })
        }

        unSubscribeAll = (keys) => {
            keys.map(key => {
                this.unSubscribe(key);
            })
        }

        notify = ({ type, payload }) => {
            Object.entries(this.state.observers).forEach(([key, func]) => {
                if (key === 'ALL' || key === type) {
                    func({ type, payload });
                }
            })
        }

        clearObservables = () => {
            this.setState({ observers: {} })
        }

        getObservers = () => {
            return this.state.observers;
        }


        componentDidMount() {
            if (moduleName && user) {
            }
        }


        createElement = (htmlElementType, id, label) => {
            let element = null;
            switch (htmlElementType) {
                case 'FORM':
                    element = new Form(label, id);
                    break;
                case 'ELEMENTGROUP':
                    element = new ElementGroup(label, id);
                    break;
                default:
                    element = new HtmlElement(htmlElementType, id, label);
                    break;
            }
            return element;
        }

        //create Form

        createForm = (id, label) => {
            return this.createElement('FORM', id, label);
        }

        //create ElementGroup

        createGroup = (id, label) => {
            return this.createElement('ELEMENTGROUP', id, label);
        }

        createOption = (id, displayValue, value,selected) => {
            const option = {
                htmlElementType: "OPTION",
                id,
                displayValue,
                value,
                selected
            }
            return option;
        }

        createReactSelectOption = (displayValue, value, id, disabled=false) => {
            return {
                htmlElementType: "OPTION",
                id,
                displayValue,
                value,
                disabled
            }
        }


        //ADDING HTML ELEMENTS TO DOM


        //add form at the end 
        addForm = (formData) => {
            if (this.getForm(formData.id)) {
                return;
            }
            this.setDefaultValuesToForm(formData);
        }


        //helpers related to validations and collecting form values
        //validates the Set Error Messages to given elementId and its children (*requires elementId)
        validateAndSetErrorMessagesInForm = (elementId, considerHidden = false, considerReadOnly = false, considerDisabled = false) => {
            const validateAndSetErrorMessages = (currentElement, currentArray, currentElementIndex, isParentFound) => {
                if (this.isEqual(currentElement, elementId)) {
                    isParentFound = true;
                }
                if (isParentFound) {
                    if ((!considerHidden && currentElement.hidden == true) || (!considerReadOnly && currentElement.readOnly == true) || (!considerDisabled && currentElement.disabled == true)) {
                        isParentFound=false;
                        return [isParentFound];
                    }
                    const [shouldUpdateValue, errorMessage] = validateField(currentElement, currentElement.value, 'blur');
                    currentElement.message = errorMessage;
                }
                return [isParentFound];
            }
            this.traverseForm(validateAndSetErrorMessages);
        }

        //will give errors status for given elementId by validating its children
        getFormErrorConfigurations = (elementId, considerHidden = false, considerReadOnly = false, considerDisabled = false) => {
            const result = {
                submitDisabled: null,
                atleastOneFieldRequired: null,
                errorMessages: {}
            };
            const collectDataRequiredForFormValidation = (currentElement, array, currentElementIndex, isParentFound) => {
                if (this.isEqual(currentElement, elementId)) {
                    isParentFound = true;
                }
                if (currentElement.htmlElementType == 'FORM' && this.isEqual(currentElement, elementId)) {
                    result.submitDisabled = currentElement.submitDisabled;
                    result.atleastOneFieldRequired = currentElement.atleastOneFieldRequired;
                }
                if (isParentFound) {
                    if ((considerHidden == false && currentElement.hidden == true) ||
                        (considerReadOnly == false && currentElement.readOnly == true) || (considerDisabled == false && currentElement.disabled == true)) {
                            isParentFound=false;   
                        return [isParentFound];
                    }
                    else if (currentElement.htmlElementType === 'BUTTON' || !this.checkIfHtmlElement(currentElement)) {
                        return [isParentFound];
                    }
                    const [shouldUpdateValue, errorMessage] = validateField(currentElement, currentElement.value, 'blur',null,this);
                    result.errorMessages[currentElement.id] = errorMessage;
                }
                return [isParentFound];

            }
            this.traverseForm(collectDataRequiredForFormValidation, 'READ');
            return this.processFormDataAndCheckIfFormIsValid(result.submitDisabled, result.atleastOneFieldRequired, result.errorMessages);
        }

        //collect values from given elementId and its children (*requires elementId)
        collectValuesForSubmit = (elementId, considerHidden = true, considerReadOnly = true, considerDisabled = true) => {
            const parameters = {};
            const collectValues = (currentElement, currentArray, currentIndex, isParentFound) => {
                if (this.isEqual(currentElement, elementId)) {
                    isParentFound = true;
                }
                if (isParentFound == true) {
                    if ((!considerHidden && currentElement.hidden == true) || (!considerReadOnly && currentElement.readOnly == true) || (!considerDisabled && currentElement.disabled == true)) {
                        isParentFound=false;
                        return [isParentFound];
                    }
                    if (currentElement.htmlElementType == "DATALIST" && currentElement.considerInputText) {
                        parameters[currentElement.id] = ((currentElement.value && currentElement.value.length) ? currentElement.value : currentElement.inputText)
                    }
                    else if (currentElement.htmlElementType !== 'BUTTON' && this.checkIfHtmlElement(currentElement)) {
                        parameters[currentElement.id] = currentElement.value
                    }
                }
                return [isParentFound];
            }
            this.traverseForm(collectValues, 'READ');
            return parameters;
        }

        validateAndCollectValuesForSubmit = (elementId, considerHidden = true, considerReadOnly = true, considerDisabled = true) => {
            const [oneFieldError, formErrors] = this.getFormErrorConfigurations(elementId, considerHidden, considerReadOnly, considerDisabled);
            if (oneFieldError == true) {
                alert("Please Enter Atleast One Field");
                return null;
            }
            else if (formErrors == true) {
                this.validateAndSetErrorMessagesInForm(elementId, considerHidden, considerReadOnly, considerDisabled);
                return null;
            }
            else {
                return this.collectValuesForSubmit(elementId, considerHidden, considerReadOnly, considerDisabled)
            }
        }


        //collects specific field values of ids passed
        collectSpecificFieldValues = (formId, fieldsIds) => {
            const parameters = {};
            const collectValues = (currentElement, currentArray, currentIndex) => {
                // if (!this.checkIfSameForm(currentElement, formId)) {
                //     return true;
                // }
                if (this.checkIfHtmlElement(currentElement) && fieldsIds && fieldsIds.indexOf(currentElement.id) != -1) {
                    parameters[currentElement.id] = currentElement.value
                }
            }
            this.traverseForm(collectValues, 'READ');
            return parameters;
        }

        //internal processing used to validate form
        processFormDataAndCheckIfFormIsValid = (submitDisabled, atleastOneFieldRequired, errorMessages) => {
            let validFieldCount = 0;
            let errorFieldCount = 0;
            Object.values(errorMessages).map(errorMessage => {
                errorMessage ? errorFieldCount++ : validFieldCount++;
            });
            let oneFieldError = false;
            let formFieldsError = false;
            if (validFieldCount < 1 && atleastOneFieldRequired) {
                oneFieldError = true;
            }
            else if (errorFieldCount > 0 && !atleastOneFieldRequired) {
                formFieldsError = true;
            }
            return [oneFieldError, formFieldsError];
        }

        //add list of forms at the end
        addForms = (forms) => {
            forms.map(form => {
                this.addForm(form);
            })
        }



        //add any element at any position in dom
        //specify (position,reference ElementIdTothePosition,elementToAdd,formId)
        addElementAnyWhere = (formId, element, referenceElementId, position) => {
            this.traverseForm(this.domManipulation, position, referenceElementId, element, formId);
        }

        //populates data into element
        updateDataFromServer = (formId, htmlElementId, htmlElementKey, htmlElementValue) => {
            this.updateSingleKeyValueIntoField(htmlElementKey, htmlElementValue, htmlElementId, formId);
        }


        // do dom modification core level(internal use to add dom into form)
        domManipulation = (...rest) => {
            let [loopElement, array, currentElementIndex, position, referenceElementId, element] = rest;

            if (loopElement.id !== referenceElementId) {
                return false;
            }
            let domUpdated = false;
            let isDuplicateEntry = false;
            array.map(arrayElement => {
                if (arrayElement.id === element?.id && (position === 'INSERT_BEFORE' || position === 'INSERT_AFTER' || position === 'ADD')) {
                    isDuplicateEntry = true;
                }
            })
            if (isDuplicateEntry) {
                return;
            }
            switch (position) {
                case 'INSERT_BEFORE':
                    array.splice(currentElementIndex, 0, element);
                    domUpdated = true;
                    break;
                case 'INSERT_AFTER':
                    array.splice(currentElementIndex + 1, 0, element);
                    domUpdated = true;
                    break;
                case 'UPDATE':
                    array.splice(currentElementIndex, 1, element);
                    domUpdated = true;
                    break;
                case 'DELETE':
                    array.splice(currentElementIndex, 1);
                    domUpdated = true;
                    break;
                case 'ADD':
                    array.push(element);
                    domUpdated = true;
                    break;
                default:
                    return false;
            }

        }

        //clears all forms
        clear = () => {
            const clearForm = (...rest)=> {
                let [currentElement, allElementsArray, currentIndex] = rest;
                if(this.checkIfElementIsForm(currentElement)){
                    allElementsArray.splice(0, allElementsArray.length);
                }
            }
            this.traverseForm(clearForm);
        }

        //gets form Element(*requires formId)
        getForm = (formId) => {
            return this.getHtmlElement(formId);
        }

        //returns no of forms
        size = () => {
            return this.state.forms.length;
        }

        //checks if no form is present
        isEmpty = () => {
            return this.state.forms.length === 0;
        }


        //removes an element
        removeElement = (elementId) => {
            const removeElementInnerFunc = (...rest) => {
                const [currentElement, allElementsArray, currentIndex] = rest;
                if (currentElement.id === elementId) {
                    allElementsArray.splice(currentIndex, 1);
                }
            }
            this.traverseForm(removeElementInnerFunc);
        }


        //removes form element(*requires formId)
        removeForm = (formId) => {
            this.removeElement(formId);
        }

        //removes group element
        removeGroup = (groupId) => {
            this.removeElement(groupId);
        }

        //hides form(*requires formId)
        hideForm = (formId) => {
            this.hideElement(formId);
        }

        //hides group(*requires groupId)
        hideGroup = (groupId) => {
            this.hideElement(groupId);
        }

        //hides element(*requires elementId)
        hideElement = (elementId) => {
            //[key,value,htmlElementType,id,formId]
            this.updateSingleKeyValueIntoField('hidden', true, elementId);
        }

        //clears errorMessage For given Field
        clearErrorMessageForField = (elementId) => {
            this.updateSingleKeyValueIntoField('message', null, elementId);
        }

        isEqual = (htmlElement, id) => {
            if (htmlElement && htmlElement.id !== id) {
                return false;
            }
            return true;
        }

        //checks if both are same form
        checkIfSameForm = (htmlElement, formId) => {
            if (htmlElement.elementType === 'FORM' && htmlElement.id !== formId) {
                return false;
            }
            return true;
        }

        //returns htmlElement Value
        getHtmlElementValue = (id) => {
            const element = this.getHtmlElement(id);
            if (element && element.htmlElementType == "DATALIST") {
                return element ? (element.value? element.value:element.inputText): null
            }
            return element ? element.value : null
        }

        getHtmlElementProperty = (id, property) => {
            const element = this.getHtmlElement(id);
            return element[property];
        }

        //returns htmlElement reference (*requires id)
        getHtmlElement = (id) => {
            const result = {};
            const getHtmlElementRef = (htmlElement, array, currentElementIndex) => {
                if (this.isEqual(htmlElement, id)) {
                    result.htmlElement = htmlElement;
                }
            }
            this.traverseForm(getHtmlElementRef, "READ");
            return result.htmlElement;
        }


        //handles Some Default Configurations before rendering(*internal use)
        setDefaultValuesToForm = (form) => {
            const formatNewForm = (htmlElement, htmlElementsArray, currentElementIndex) => {
                 if (htmlElement.htmlElementType === 'CHECKBOX') {
                    const values = [];
                    const isSwitch = htmlElement.switchType;
                    htmlElement.values && htmlElement.values.map(option => {
                        if (option.selected) {
                            if(isSwitch){
                                htmlElement.value=option.value;
                            }
                            else{
                            values.push(option.value);
                            }
                        }
                    })
                    if(values.length>0){
                    htmlElement.value = values;
                    }
                }
                else if (htmlElement.htmlElementType === 'RADIO' || htmlElement.htmlElementType == 'SELECT') {
                    let value = null;
                    if(!htmlElement.values){
                        htmlElement.values=[];
                    }
                    htmlElement.values.map(option => {
                        if (option.selected) {
                            value = option.value;
                        }
                    })
                    htmlElement.value = value;
                }
                else if (form.submitDisabled && htmlElement.htmlElementType === 'BUTTON' && htmlElement.submit) {
                    htmlElement.disabled = true;
                }
                else if(htmlElement.htmlElementType=="DATALIST"){
                    if(!htmlElement.value){
                        htmlElement.value=[]
                    }
                    if(!htmlElement.values){
                        htmlElement.values=[]
                    }
                    if (!htmlElement.value?.length) {
                        htmlElement.values?.map(({value: val,selected}) => {
                             if(selected){
                                htmlElement.value=[val]
                             }
                        })
                    }
                }
                 else if (htmlElement.htmlElementType == 'DATERANGE') {
                     htmlElement.value = [htmlElement.startDate, htmlElement.endDate];
                 }
                else if (htmlElement.defaultValue) {
                    htmlElement.value = htmlElement.defaultValue;
                }
                if (htmlElement.htmlElementType == 'ELEMENTGROUP' && htmlElement.cloneable == true) {
                    const newElement = this.addUniqueId(htmlElement, 0, '');
                    htmlElementsArray[currentElementIndex] = newElement;
                }
            }
            this.traverseForm(formatNewForm, 'IS_DEFAULT_CONFIGURED', form);
        }


        //check if element is there
        contains = (elementId) => {
            return this.getHtmlElement(elementId) ? true : false;
        }

         //iteratesForm for Updation purpose(*internal use)
        traverseForm = (func, ...restParams) => {
            let rest = restParams || [];
            const [isDefaultConfiguration, form] = rest;
            let formDataCopy = [];
            const tempState = this.stateRefCopy.current;
           // let clonedFormData = this.cloneState(tempState);
            formDataCopy = isDefaultConfiguration === 'IS_DEFAULT_CONFIGURED' ? [...tempState, form] : [...tempState];
            for (let i = 0; i < formDataCopy.length; i++) {
                const currentForm = formDataCopy[i];
                rest = (func(currentForm, formDataCopy, i, ...rest) || []);
                if (currentForm.htmlGroups) {
                    this.traverseGroups(currentForm.htmlGroups, func, ...rest);
                }
            }
         //   const isFormUnchanged = this.deepEqual(formDataCopy, this.stateRefCopy.current);
            this.stateRefCopy.current = formDataCopy;
            if (isDefaultConfiguration != 'READ') {
                this.setState(({ forms }) => {
                    return ({ forms: this.stateRefCopy.current });
                })
            }
        }

        //traverses group for updation purpose(*internal use)
        traverseGroups = (groups, func, ...restParams) => {
            let rest = restParams || [];
            for (let i = 0; i < groups.length; i++) {
                const currentGroup = groups[i];
                let tempRest = [...rest];
                tempRest = (func(currentGroup, groups, i, ...tempRest) || []);
                for (let j = 0; j < currentGroup?.groupElements?.length; j++) {
                    const currentElement = currentGroup.groupElements[j];
                    func(currentElement, currentGroup.groupElements, j, ...tempRest);
                }
                if (currentGroup.groups) {
                    this.traverseGroups(currentGroup.groups, func, ...tempRest);
                }
            }
        }


        //gets all forms
        getForms = () => {
            return [...this.state.forms];
        }


        //gets submitButton reference from form(*requires formId)
        getSubmitButton = (formId) => {
            const result = {};
            const getSubmit = (currentElement, currentArray, currentElementIndex) => {
                if (!this.checkIfSameForm(currentElement, formId)) {
                    return true;
                }
                if (currentElement.htmlElementType === 'BUTTON' && currentElement.submit) {
                    result.submitButton = currentElement;
                }
            }
            this.traverseForm(getSubmit, 'READ');
            return result["submitButton"];
        }



        //checks if element is form
        checkIfElementIsForm = (htmlElement) => {
            return htmlElement.htmlElementType == 'FORM';
        }

        //checks if element is group
        checkIfElementIsGroup = (htmlElement) => {
            return htmlElement.htmlElementType == 'ELEMENTGROUP';

        }

        //checks if element is htmlElement
        checkIfHtmlElement = (htmlElement) => {
            return htmlElement.htmlElementType !== 'FORM' && htmlElement.htmlElementType !== 'ELEMENTGROUP';
        }



        //resets form values(*requires formId)
        //pass clearDisabled=true to clear disabled values
        //pass clearReadonly=true to clear readOnly values
        //pass clearHidden=true to clear hidden values
        //loads defaultValue to value if any DefaultValue is specified
        //pass setErrorMessages=true to set error messages on fields after reset
        resetForm = (elementId, setErrorMessages = false, clearDisabled = false, clearReadOnly = false, clearHidden = false) => {
            const clearFieldsAndSetDefaultValues = (currentLoopElement, loopElements, currentIndex, isParentFound) => {
                if (this.isEqual(currentLoopElement, elementId)) {
                    isParentFound = true;
                }
                if (isParentFound) {
                    if ((currentLoopElement.disabled == true && !clearDisabled) || (currentLoopElement.readOnly == true && !clearReadOnly) || ((currentLoopElement.hidden == true && !clearHidden))) {
                        isParentFound=false;
                        return [isParentFound];
                    }
                    if (currentLoopElement.defaultValue) {
                        currentLoopElement.value = currentLoopElement.defaultValue;
                    }
                    else {
                        currentLoopElement.value = '';
                    }
                    if (setErrorMessages == true) {
                        const [shouldUpdateValue, errorMessage] = validateField(currentLoopElement, currentLoopElement.value, 'blur',null,this);
                        currentLoopElement.message = errorMessage;
                    }
                    else{
                        currentLoopElement.message = null;
                    }
                }
                return [isParentFound];
            }
            this.traverseForm(clearFieldsAndSetDefaultValues);
        }

        //send any request(*requires url)
        sendRequest = (url, config) => {
            return axios(url, config);
        }

        deepEqualFiles = (x,y) => {
            const result =  (x.size === y.size && x.type === y.type && x.name === y.name && 
            x.lastModified === y.lastModified && x.lastModifiedDate === y.lastModifiedDate);
            return result;
        }
        
        deepEqual = (x, y) => {
            const ok = Object.keys, tx = typeof x, ty = typeof y;
            if(x instanceof File && y instanceof File){
                return this.deepEqualFiles(x,y);
            }
            return  x && y && tx === 'object' && tx === ty ? (
                ok(x).length === ok(y).length &&
                ok(x).every(key => this.deepEqual(x[key], y[key]))
            ) : (x === y);
        }


        isFormUntouched = (formId) => {
            const isFormUntouched = true;
            const checkIfFormChanged = (htmlElement, array, currentElementIndex) => {
                if (htmlElement.value !== htmlElement.defaultValue) {
                    isFormUntouched = false;
                }
            }
            this.traverseForm(checkIfFormChanged, 'READ');
            return isFormUntouched;
        }



        //updation helpers

        //batch update Specific Fields in form requires (*formId,*{id,value} of fields to update)
        updateSpecificValues = (fieldValues, formId) => {
            const updateFields = (currentElement, currentArray, currentElementIndex) => {
                if (!this.checkIfSameForm(currentElement, formId)) {
                    return true;
                }
                if (Object.keys(fieldValues).includes(currentElement.id)) {
                    currentElement.value = fieldValues[currentElement.id];
                }
            }
            this.traverseForm(updateFields);
        }

        //updates key value data to all fields(*requires key,value,formId)
        updateKeyValuesToAllFields = (key, value, formId) => {
            const keyValueUpdate = (currentLoopElement, array, currentElementIndex, isParentFound) => {
                if (this.checkIfSameForm(currentLoopElement, formId)) {
                    isParentFound = true;
                }
                if (isParentFound) {
                    currentLoopElement[key] = value;
                }
                return [isParentFound];
            }
            this.traverseForm(keyValueUpdate);
        }

        //updates key value into specific field(*requires elementId,key,value)(Optional pass isValidateRequired=false to skip validations)
        updateSingleKeyValueIntoField = (key, value, id, isValidateRequired) => {
            const keyValueUpdate = (htmlElement, array, currentElementIndex, ...rest) => {
                if (htmlElement.id === id) {
                    if (isValidateRequired == false || key != 'value') {
                        htmlElement[key] = value;
                        return;
                    }
                    const [doesValueChange, errorMessage] = validateField(htmlElement, value, 'blur',null,this);
                    if (doesValueChange) {
                        if(htmlElement.htmlElementType=="DATALIST"){
                            this.updateSingleKeyValueIntoField("inputText",null, id, false);
                        }
                        htmlElement[key] = value;
                    }
                    htmlElement["message"]=errorMessage;
                 
                }
            }
            this.traverseForm(keyValueUpdate);
        }

        //disables Element(*requires elementId)
        disableElement = (elementId) => {
            this.updateSingleKeyValueIntoField("disabled", true, elementId);
        }

        //enables element (*requires elementId)
        enableElement = (elementId) => {
            this.updateSingleKeyValueIntoField("disabled", false, elementId);
        }

        //updates value into elementId
        updateValue = (value, elementId,isValidateRequired=true) => {
            this.updateSingleKeyValueIntoField("value", value, elementId,isValidateRequired);
        }

        //update ErrorMessage into field(*requires error message and elementId)
        updateErrorMessage = (value, elementId) => {
            this.updateSingleKeyValueIntoField("message", value, elementId);
        }


        //displays element if hidden(*requires elementId)
        showElement = (elementId) => {
            this.updateSingleKeyValueIntoField("hidden", false, elementId);
        }

        validateImageServerDetails = (imageServerData, imageType, vertical) => {
            const { imageServerUrl, clientId, accessToken, logicalName } = imageServerData;
            if (imageServerUrl && clientId && accessToken && imageType && vertical) {
                const url = imageServerUrl + "/upload?token=" + accessToken + "&clientId=" + clientId + "&imageType=" + imageType + "&vertical=" + vertical;
                return url;
            }
            return null;
        }

        uploadToImageServer = (elementId, imageServerDetails, imageType, vertical) => {
            const staticServerUrl = this.validateImageServerDetails(imageServerDetails, imageType, vertical);
            const isHtmlPresent = this.getHtmlElement(elementId);
            const fileData = this.getHtmlElementValue(elementId);
            const staticFileData = new FormData();
            if (isHtmlPresent) {
                if (fileData) {
                    for (let i = 0; i < fileData?.length; i++) {
                        staticFileData.append("files", fileData[i],fileData[i].name)
                    }
                }
                else {
                    return Promise.reject("No FileData Available");
                }
                if (elementId && this.getHtmlElement(elementId) && staticServerUrl != null) {
                    const headersList = { 'Content-Type': 'multipart/formData' };

                    return serverRequest(REQUEST_TYPE.POST, staticServerUrl, null, headersList, staticFileData)
                }
                else {
                    return Promise.reject("Provide required details");
                }
            }
            else {
                return Promise.reject("No Element Available with the given id");
            }
        }


        getDisplayValueForOptionValue = (elementId, value) => {
            let displayValue = null;
            const getDisplayValue = (htmlElement, array, currentElementIndex, ...rest) => {
                if (htmlElement.id === elementId) {
                    const options = htmlElement.values;
                    options && options.map(option => {
                        if (option.value == value) {
                            displayValue = option.displayValue;
                        }
                    })
                }
            }
            this.traverseForm(getDisplayValue, "READ");
            return displayValue;
        }

        removeFile = (elementId, fileName) => {
            const removeFileName = (htmlElement, array, currentElementIndex, ...rest) => {
                if (htmlElement.id === elementId && htmlElement.value.length > 0) {

                    let files = [...htmlElement.value];
                    files = files.filter(file => file.name != fileName);
                    htmlElement.value = files;
                    validateField(htmlElement, files, 'change',null,this)
                }
            }
            this.traverseForm(removeFileName);
        }

        addToGroup = (groupId, element) => {
            const addToEndOfGroup = (htmlElement, array, currentElementIndex, ...rest) => {
                if (htmlElement.id === groupId) {
                    if (this.checkIfElementIsGroup(element)) {
                        htmlElement.groups.push(element);
                    }
                    if (this.checkIfHtmlElement(element)) {
                        htmlElement.groupElements.push(element);
                    }
                }
            }
            this.traverseForm(addToEndOfGroup);
        }

        //clones element and also changes id requires(*element) erase Properties[] clears those properties while cloning
        //elementId = divisions_0
        cloneElement = (elementId, properties) => {
            const [highestGeneratedId, htmlElementCopy] = this.getHighestIndexAndElementCopy(elementId);
            // if(highestGeneratedId == -1){

            // }
            let nextGeneratedId = highestGeneratedId.split('_')
            const currentHighestIndex = nextGeneratedId.pop();
            nextGeneratedId.push(Number(currentHighestIndex) + 1);
            nextGeneratedId = nextGeneratedId.join('_');
            const cleanCopy = this.removeUniqueId(htmlElementCopy);
            const scrappedCopy = this.eraseProperties(cleanCopy, properties ? properties : ['value', 'message']);
            return this.addUniqueId(scrappedCopy, -1, nextGeneratedId);
        }

        eraseProperties = (obj, properties) => {
            const eraseValues = (key, tempObject, currentObj) => {
                if (properties && properties.includes(key)) {
                    tempObject[key] = null;
                    return [true];
                }
                return [false];
            }
            return this.cloneJSON(obj, eraseValues);
        }


        cloneState = (obj) => {
            const cloneFormData = (key, tempObject, currentObj) => {
                return [false];
            }
            return this.cloneJSON(obj, cloneFormData);
        }



        cloneJSON = (originalObj, func, ...rest) => {
            // basic type deep copy
            if (originalObj === null || originalObj === undefined || typeof originalObj !== 'object'|| originalObj instanceof File || originalObj instanceof Date) {
                if(originalObj instanceof File){
                   return new File([originalObj], originalObj.name, { type: originalObj.type });
                }
                return originalObj;
            }
            // array deep copy
            if (originalObj instanceof Array) {
                let cloneA = [];
                for (let i = 0; i < originalObj.length; ++i) {
                    const result = this.cloneJSON(originalObj[i], func, ...rest);
                    if (result && typeof result == 'object' && Object.keys(result).length == 0 && !(result instanceof File || result instanceof Date)) {
                        continue;
                    }
                    cloneA[i] = result;
                }
                return cloneA;
            }
            // object deep copy
            let clonedObj = {};
            for (let key in originalObj) {
                const [skipLoop, ...restParams] = func(key, clonedObj, originalObj, ...rest);
                if (skipLoop) {
                    continue;
                }
                clonedObj[key] = this.cloneJSON(originalObj[key], func, ...restParams);
            }
            return clonedObj;
        }

        addUniqueId = (obj, rootIndex, nextGeneratedId) => {
            const uniqueIndex = '_0';
            const addUniqueIdentifier = (key, tempObject, currentObj, level) => {
                let tempLevel = level;
                if (currentObj.clonedCopy == true) {
                    return [true, tempLevel];
                }
                if (currentObj.cloneable == true) {
                    tempLevel++;
                }
                if (key == 'clonedCopy') {
                    tempObject['clonedCopy'] = rootIndex != 0;
                    return [true, tempLevel];
                }
                if (key == 'id') {
                    level++;
                    let uniqueIdValue = `${currentObj[key]}${nextGeneratedId}`;
                    for (let i = 0; i < tempLevel; i++) {
                        uniqueIdValue += uniqueIndex;
                    }
                    tempObject[key] = uniqueIdValue;
                    tempObject['originalId'] = currentObj[key];
                    if (rootIndex == 0) {
                        tempObject['clonedCopy'] = false;
                    }
                    return [true, tempLevel];
                }
                return [false, tempLevel];
            }
            return this.cloneJSON(obj, addUniqueIdentifier, rootIndex);
        }

        getHighestIndexAndElementCopy = (elementId) => {
            let highestElementCopy = null;
            let highestIndex = -1;
            let highestGeneratedId = null;
            const getIndexCount = (htmlElement, array, currentElementIndex) => {
                const [autoGeneratedId] = this.extractAutoGeneratedCurrentId(htmlElement.id);
                if (htmlElement.id.includes(elementId) && !isNaN(autoGeneratedId) && Number(highestIndex) < Number(autoGeneratedId)) {
                    highestGeneratedId = htmlElement.id.replace(htmlElement.originalId, '');
                    highestIndex = autoGeneratedId;

                }
                if (elementId.includes(htmlElement?.originalId) && htmlElement.clonedCopy == false) {
                    highestElementCopy = htmlElement;
                }
            }
            this.traverseForm(getIndexCount, "READ");
            return [highestGeneratedId, highestElementCopy];
        }

        extractAutoGeneratedCurrentId = (elementId) => {
            const levels = elementId.split('_');
            return levels.splice(-1);
        }

        isRelativeElement = (originalId, cloneId) => {
            const element = this.getHtmlElement(cloneId);
            return element.originalId == originalId;
        }

        removeUniqueId = (obj) => {
            const removeUniqueIdentifier = (key, tempObject, currentObj) => {
                if (key == 'id' && currentObj.originalId) {
                    tempObject[key] = currentObj.originalId;
                    return [true];
                }
                return [false];
            }
            return this.cloneJSON(obj, removeUniqueIdentifier);
        }

        createReferenceId = (clonedElement, referenceElementId) => {
            const generatedId = clonedElement.id.replace(clonedElement.originalId, "");
            return referenceElementId + generatedId;
        }

        getDefaultId = (elementId) => {
            let defaultId = null;
            const getInitialId = (htmlElement, array, currentElementIndex) => {

                if (htmlElement.id.includes(elementId) && htmlElement.clonedCopy == false) {
                    defaultId = htmlElement.id;
                }
                return [false];
            }
            this.traverseForm(getInitialId, "READ");
            return defaultId;
        }

        collectClonedData = (elementId) => {
            const finalClonedData = {};

            const element = this.getHtmlElement(elementId);

            this.recursiveCollectClonedData(finalClonedData, element);
            return finalClonedData;
        }

        checkIfGroupIsCloneable = (element) => {
            return element.cloneable;
        }

        checkIfGroupContainsCloneables = (element) => {
            return element && element.groups && element.groups[0].cloneable == true;
        }

        
        addOptions = (elementId,options,flushOldValues)=> {
            if(flushOldValues){
                this.updateSingleKeyValueIntoField("values",options,elementId);
            }
            else{
                const values = this.getHtmlElementProperty(elementId,"values");
                if(values!=null){
                this.updateSingleKeyValueIntoField("values",[...values,...options],elementId);
                }
                else {
                    this.updateSingleKeyValueIntoField("values",options,elementId); 
                }
            }
        }



        recursiveCollectClonedData = (finalClonedData, element) => {
            const { id, value, htmlElementType, originalId } = element;
            if (this.checkIfHtmlElement(element)) {
                if (htmlElementType !== 'BUTTON') {
                    finalClonedData[originalId || id] = value;
                }
            }
            //it is a group
            else {
                //surrounding parent group to hold clones
                if (this.checkIfGroupContainsCloneables(element)) {
                    const holdingArray = [];
                    finalClonedData[originalId || id] = holdingArray;
                    element.groups?.map(group => {
                        this.recursiveCollectClonedData(holdingArray, group);
                    })
                    element.groupElements?.map(innerElement => {
                        this.recursiveCollectClonedData(finalClonedData, innerElement);
                    })
                }
                else {
                    //it could be normal group or cloned group 
                    //if cloned group
                    const relativeCurrentObj = element.cloneable == true ? {} : finalClonedData;
                    element.groups?.map(group => {
                        this.recursiveCollectClonedData(relativeCurrentObj, group);
                    })

                    element.groupElements?.map(innerElement => {
                        this.recursiveCollectClonedData(relativeCurrentObj, innerElement);
                    })
                    if (Array.isArray(finalClonedData) && element.cloneable == true) {
                        finalClonedData.push(relativeCurrentObj);
                    }
                    else {
                        finalClonedData[originalId || id] = relativeCurrentObj;
                    }
                }
            }
        }

        customRef = (elementId)=> {
            return document.getElementById(elementId);
        }

        setLoader = (elementId, status) => {
            this.updateSingleKeyValueIntoField("isLoading", status, elementId)
        }

        addOption = (elementId, option) => {
            const addToEndOfOptions = (htmlElement, array, currentElementIndex, ...rest) => {
                if (htmlElement.id === elementId) {
                    if (option.selected) {
                        if (htmlElement.value) {
                            htmlElement.value.push(option.value);
                        }
                        else {
                            htmlElement.value = [option.value];
                        }
                    }
                    if (htmlElement.values != null) {
                        htmlElement.values.push(option);
                    }
                    else {
                        htmlElement.values = [option];
                    }
                }
            }
            this.traverseForm(addToEndOfOptions);
        }



        render() {
            return (
                <React.Fragment>
                    <WrappedComponent helpers={this} {...this.props} formData={this.state.forms} initialLoad={this.initialLoad} />
                </React.Fragment>
            );
        }

    }
    return WithFormHOC;
}

export default withFormHoc;