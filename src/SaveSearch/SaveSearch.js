import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { UncontrolledTooltip } from "reactstrap";
import DynamicForm, { REQUEST_TYPE, serverRequest, withFormHoc } from "../DynamicForm";

const SaveSearch = ({ helpers, formData, ...props }) => {

    const [openModal, setOpenModal] = useState(false);
    let options = [];
    let radioOptions = [];
    radioOptions.push(helpers.createOption("ReplaceExistingWorkspace","Replace existing workspace","Replace existing workspace"),helpers.createOption("Create new workspace","Create new workspace","Create new workspace"))
    let saveFormOption = helpers.createOption("viewCheck", "Make this workplace your default view","viewCheck");
    options.push(saveFormOption);
    let savedWorkspace = props.userSavedWorkspaceConfig?.userSavedSearches;
    let existingWorkspaceTitles = [];

    const showWorkspaceOptions = () => {
        if (savedWorkspace && savedWorkspace.length > 0) {
            helpers.showElement("exisitingWorkSpace");
            helpers.updateValue("Replace existing workspace", "exisitingWorkSpace")
        }
        else {
            helpers.hideElement("exisitingWorkSpace")
        }
    }

    const userSavedWorkspace = () => {
        showWorkspaceOptions();
        if (existingWorkspaceTitles?.length == 0) {
            savedWorkspace?.map(each => {
                existingWorkspaceTitles.push(helpers.createOption(each.title, each.title, each.title));
            });
            helpers.addOptions("savedWorkspace", existingWorkspaceTitles, true);
        }
        existingWorkspaceTriggered();
    }

    let obj = {
        "htmlElementType": "FORM",
        "id": "saveSearchForm",
        "name": null,
        "value": null,
        "className": null,
        "style": null,
        "labelClassName": null,
        "htmlGroups": [
            {
                "htmlElementType": "ELEMENTGROUP",
                "id": "group1",
                "label": null,
                "name": null,
                "className": "row",
                "style": null,
                "labelClassName": null,
                "groupElements": [
                    {
                        "htmlElementType": "RADIO",
                        "id": "exisitingWorkSpace",
                        "className":"mb-3",
                        "attributes":{"inline":""},
                        "hidden": false,
                        "values":[{"htmlElementType":"OPTION",
                                   "id":"ReplaceExistingWorkspace",
                                   "displayValue":"Replace existing workspace",
                                   "value":"Replace existing workspace",
                                   "className":"mb-2"},
                                   {"htmlElementType":"OPTION",
                                   "id":"Create new workspace",
                                   "displayValue":"Create new workspace",
                                   "value":"Create new workspace",
                                   }]
                    },
                    {
                        "htmlElementType": "INPUT",
                        "id": "workspaceName",
                        "label": "Workspace Name",
                        "name": "Workspace Name",
                        "className": null,
                        "autofocus": true,
                        "style": null,
                        "helperText":"Your workspace can have any name you like.",
                        "labelClassName": null,
                        "type": "text",
                        "maxLength": 45,
                        "placeholder": null,
                    },
                    {
                        "htmlElementType": "DATALIST",
                        "id": "savedWorkspace",
                        "label": "Select Saved Workspace",
                        "name": "savedWorkspace",
                        "value": null,
                        "onInputChangeEnable": false,
                        "className": " form-control",
                        "dataListClassName": "custom-datagrid col-12",
                        "labelClassName": "col-12",
                        "required": true,
                        "values": []
                    },
                    {
                        "htmlElementType": "CHECKBOX",
                        "id": "viewCheckbox",
                        "autofocus": true,
                        "className":"my-3",
                        "style": null,
                        "labelClassName": null,
                        "placeholder": null,
                        "hidden": true,
                        "values": options
                    }
                ]
            },
            {
                "htmlElementType": "ELEMENTGROUP",
                "id": "group2",
                "label": null,
                "name": null,
                "className": "text-center border-top mx-n3 mt-3",
                "style": null,
                "labelClassName": null,
                "groupElements": [
                    {
                        "htmlElementType": "BUTTON",
                        "id": "clear",
                        "label": "Clear",
                        "name": null,
                        "value": null,
                        "className": "rounded-1  px-3 brand-secondary btn mt-3 me-3",
                        "variant":"",
                        "style": null,
                        "labelClassName": null,
                        "reset": true,
                    },
                    {
                        "htmlElementType": "BUTTON",
                        "id": "saveSearch",
                        "label": "Save & apply",
                        "name": null,
                        "value": null,
                        "variant":"",
                        "className": "px-3 btn btn-brand rounded-1 mt-3",
                        "style": null,
                        "labelClassName": null,
                        "submit": true,
                    }
                    
                ]
            }
        ],
        "notes": null,
        "submitDisabled": true
    };

    const saveUserSearch = async (payload) => {
        payload[0].preventDefault();
        let formValues = helpers.validateAndCollectValuesForSubmit("saveSearchForm", false, false, false);
        formValues && formValues.length > 0 ? helpers.enableElement("saveSearch") : helpers.disableElement("saveSearch");
        const selectedTitleIndex = formValues?.exisitingWorkSpace && "Replace existing workspace" == formValues.exisitingWorkSpace && savedWorkspace && savedWorkspace.findIndex(each => each.title == formValues.savedWorkspace);
        const title = savedWorkspace?.[selectedTitleIndex]?.title ?? formValues?.workspaceName;
        const saveSearchResponse = await serverRequest(props.saveUserSearchConfig.method, props.saveUserSearchConfig.url, { "url": window.location.href, "workspaceName": title , isUpdate: selectedTitleIndex >= 0 && "Replace existing workspace" == formValues?.exisitingWorkSpace ? true : false });
        if(saveSearchResponse.data.statusCode === "SUCCESS"){
            onClose();
        }
        else {
           helpers.enableElement("saveSearch");
        }
        props.setSaveWorkspaceResponse(saveSearchResponse);
    }

    const existingWorkspaceTriggered = async (payload) => {
        if (existingWorkspaceTitles.length > 0 || (payload && payload[1]?.value == "Replace existing workspace")) {
            helpers.showElement("savedWorkspace");
            helpers.hideElement("workspaceName");
        }
        else {
            helpers.showElement("workspaceName");
            helpers.hideElement("savedWorkspace");
        }
        helpers.resetForm("savedWorkspace");
        helpers.resetForm("workspaceName");
        helpers.disableElement("saveSearch");
    }

    const enableSubmit = (payload) => {
        const title = payload && payload[1] && payload[1].value && payload[1].value[0];
        title ? helpers.enableElement("saveSearch") : helpers.disableElement("saveSearch");
    }

    const observersMap = {
        'saveSearchForm' :[['load',userSavedWorkspace],['submit', saveUserSearch]],
        'exisitingWorkSpace': [['change', existingWorkspaceTriggered]],
        'saveSearch': [['click', saveUserSearch]],
        'savedWorkspace' :[['select', enableSubmit]],
        'workspaceName': [['change', enableSubmit]]
    }

    const onClose = ()=>{
        helpers.resetForm("saveSearchForm");
        setOpenModal(false);
    }


    return <React.Fragment>
        <button onClick={() => setOpenModal(true)} className="btn btn-link p-1 icon-hover" id="saveWorkSpace">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                        <g id="save-icn-16" transform="translate(-101 -120)">
                            <rect id="Rectangle_10427" data-name="Rectangle 10427" width="16" height="16" rx="3" transform="translate(101 120)" fill="none" />
                            <g id="save-icn" transform="translate(93.625 116.143)">
                                <path id="Path_50534" data-name="Path 50534" d="M9.375,6.87v9.674a1.664,1.664,0,0,0,1.663,1.663H19.5a1.664,1.664,0,0,0,1.663-1.663V9.107A1.662,1.662,0,0,0,20.8,8.068l-1.79-2.237a1.658,1.658,0,0,0-1.3-.624H11.038A1.664,1.664,0,0,0,9.375,6.87Zm.907,0a.757.757,0,0,1,.756-.756h.756v1.36a1.059,1.059,0,0,0,1.058,1.058h3.628a1.059,1.059,0,0,0,1.058-1.058V6.114h.175a.752.752,0,0,1,.59.284l1.791,2.237h0a.764.764,0,0,1,.165.472v7.437a.757.757,0,0,1-.756.756H11.038a.757.757,0,0,1-.756-.756Z" />
                                <path id="Path_50535" data-name="Path 50535" d="M33.079,48.452a2.876,2.876,0,1,0-2.03-.842,2.873,2.873,0,0,0,2.03.842Zm0-4.837h0a1.965,1.965,0,1,1-1.965,1.965,1.966,1.966,0,0,1,1.965-1.965Z" transform="translate(-17.809 -32.058)" />
                            </g>
                        </g>
                    </svg>
            <UncontrolledTooltip placement="bottom" target="saveWorkSpace">
                {"Save Workspace"}
            </UncontrolledTooltip>
                </button>
        {openModal && <Modal
            show={openModal}
            onHide={() => onClose()}
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >   <Modal.Header closeButton >
                <Modal.Title className="h6">Save filters as new workspace</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DynamicForm formJson={obj} helpers={helpers} observers={observersMap} />
            </Modal.Body>
        </Modal>
        }
    </React.Fragment>
};
export default withFormHoc(SaveSearch);