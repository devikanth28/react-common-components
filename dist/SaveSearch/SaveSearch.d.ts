declare const _default: {
    new (props: any): {
        state: {
            forms: any[];
            initialLoad: boolean;
            moduleName: any;
            user: any;
            observers: {};
        };
        setState: any;
        stateRefCopy: React.RefObject<any>;
        initialLoad: React.RefObject<any>;
        subscribe: ({ type, payload }: {
            type: any;
            payload: any;
        }) => void;
        subscribeAll: (actions: any) => void;
        unSubscribe: (key: any) => void;
        unSubscribeAll: (keys: any) => void;
        notify: ({ type, payload }: {
            type: any;
            payload: any;
        }) => void;
        clearObservables: () => void;
        getObservers: () => {};
        componentDidMount(): void;
        createElement: (htmlElementType: any, id: any, label: any) => import("../DynamicForm").HtmlElement;
        createForm: (id: any, label: any) => import("../DynamicForm").HtmlElement;
        createGroup: (id: any, label: any) => import("../DynamicForm").HtmlElement;
        createOption: (id: any, displayValue: any, value: any, selected: any) => {
            htmlElementType: string;
            id: any;
            displayValue: any;
            value: any;
            selected: any;
        };
        createReactSelectOption: (displayValue: any, value: any, id: any, disabled?: boolean) => {
            htmlElementType: string;
            id: any;
            displayValue: any;
            value: any;
            disabled: boolean;
        };
        addForm: (formData: any) => void;
        validateAndSetErrorMessagesInForm: (elementId: any, considerHidden?: boolean, considerReadOnly?: boolean, considerDisabled?: boolean) => void;
        getFormErrorConfigurations: (elementId: any, considerHidden?: boolean, considerReadOnly?: boolean, considerDisabled?: boolean) => boolean[];
        collectValuesForSubmit: (elementId: any, considerHidden?: boolean, considerReadOnly?: boolean, considerDisabled?: boolean) => {};
        validateAndCollectValuesForSubmit: (elementId: any, considerHidden?: boolean, considerReadOnly?: boolean, considerDisabled?: boolean) => {};
        collectSpecificFieldValues: (formId: any, fieldsIds: any) => {};
        processFormDataAndCheckIfFormIsValid: (submitDisabled: any, atleastOneFieldRequired: any, errorMessages: any) => boolean[];
        addForms: (forms: any) => void;
        addElementAnyWhere: (formId: any, element: any, referenceElementId: any, position: any) => void;
        updateDataFromServer: (formId: any, htmlElementId: any, htmlElementKey: any, htmlElementValue: any) => void;
        domManipulation: (...rest: any[]) => boolean;
        clear: () => void;
        getForm: (formId: any) => any;
        size: () => number;
        isEmpty: () => boolean;
        removeElement: (elementId: any) => void;
        removeForm: (formId: any) => void;
        removeGroup: (groupId: any) => void;
        hideForm: (formId: any) => void;
        hideGroup: (groupId: any) => void;
        hideElement: (elementId: any) => void;
        clearErrorMessageForField: (elementId: any) => void;
        isEqual: (htmlElement: any, id: any) => boolean;
        checkIfSameForm: (htmlElement: any, formId: any) => boolean;
        getHtmlElementValue: (id: any) => any;
        getHtmlElementProperty: (id: any, property: any) => any;
        getHtmlElement: (id: any) => any;
        setDefaultValuesToForm: (form: any) => void;
        contains: (elementId: any) => boolean;
        traverseForm: (func: any, ...restParams: any[]) => void;
        traverseGroups: (groups: any, func: any, ...restParams: any[]) => void;
        getForms: () => any[];
        getSubmitButton: (formId: any) => any;
        checkIfElementIsForm: (htmlElement: any) => boolean;
        checkIfElementIsGroup: (htmlElement: any) => boolean;
        checkIfHtmlElement: (htmlElement: any) => boolean;
        resetForm: (elementId: any, setErrorMessages?: boolean, clearDisabled?: boolean, clearReadOnly?: boolean, clearHidden?: boolean) => void;
        sendRequest: (url: any, config: any) => Promise<import("axios").AxiosResponse<any, any>>;
        deepEqualFiles: (x: any, y: any) => boolean;
        deepEqual: (x: any, y: any) => any;
        isFormUntouched: (formId: any) => boolean;
        updateSpecificValues: (fieldValues: any, formId: any) => void;
        updateKeyValuesToAllFields: (key: any, value: any, formId: any) => void;
        updateSingleKeyValueIntoField: (key: any, value: any, id: any, isValidateRequired: any) => void;
        disableElement: (elementId: any) => void;
        enableElement: (elementId: any) => void;
        updateValue: (value: any, elementId: any, isValidateRequired?: boolean) => void;
        updateErrorMessage: (value: any, elementId: any) => void;
        showElement: (elementId: any) => void;
        validateImageServerDetails: (imageServerData: any, imageType: any, vertical: any) => string;
        uploadToImageServer: (elementId: any, imageServerDetails: any, imageType: any, vertical: any) => Promise<import("axios").AxiosResponse<any, any>>;
        getDisplayValueForOptionValue: (elementId: any, value: any) => any;
        removeFile: (elementId: any, fileName: any) => void;
        addToGroup: (groupId: any, element: any) => void;
        cloneElement: (elementId: any, properties: any) => any;
        eraseProperties: (obj: any, properties: any) => any;
        cloneState: (obj: any) => any;
        cloneJSON: (originalObj: any, func: any, ...rest: any[]) => any;
        addUniqueId: (obj: any, rootIndex: any, nextGeneratedId: any) => any;
        getHighestIndexAndElementCopy: (elementId: any) => any[];
        extractAutoGeneratedCurrentId: (elementId: any) => any;
        isRelativeElement: (originalId: any, cloneId: any) => boolean;
        removeUniqueId: (obj: any) => any;
        createReferenceId: (clonedElement: any, referenceElementId: any) => any;
        getDefaultId: (elementId: any) => any;
        collectClonedData: (elementId: any) => {};
        checkIfGroupIsCloneable: (element: any) => any;
        checkIfGroupContainsCloneables: (element: any) => boolean;
        addOptions: (elementId: any, options: any, flushOldValues: any) => void;
        recursiveCollectClonedData: (finalClonedData: any, element: any) => void;
        customRef: (elementId: any) => HTMLElement;
        setLoader: (elementId: any, status: any) => void;
        addOption: (elementId: any, option: any) => void;
        render(): React.JSX.Element;
        context: unknown;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default _default;
import React from "react";
