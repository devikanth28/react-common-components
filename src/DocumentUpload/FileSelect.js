import React, { useEffect, useState } from "react";
import { withFormHoc } from '../DynamicForm';
import DynamicForm from '../DynamicForm/Components/DynamicForm';

const FileSelect = ({ helpers, formData, ...props }) => {
    let disableUpload = props.disableUpload;
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [sendDocs, setSendDocs] = useState(false);
    let uploadJsonObject = {};

    uploadJsonObject = {
        "htmlElementType": "FORM",
        "id": "uploadForm",
        "label": null,
        "name": null,
        "value": null,
        "className": "uploadForm btn btn-secondarylight",
        "readOnly": false,
        "disabled": false,
        "autofocus": false,
        "required": false,
        "style": null,
        "attributes": null,
        "message": null,
        "htmlActions": null,
        "elementSize": null,
        "defaultValue": null,
        "helperText": null,
        "labelClassName": "small",
        "htmlGroups": [
            {
                "htmlElementType": "ELEMENTGROUP",
                "id": "group1",
                "label": null,
                "name": null,
                "value": null,
                "className": null,
                "readOnly": false,
                "disabled": false,
                "autofocus": false,
                "required": false,
                "style": null,
                "attributes": null,
                "message": null,
                "htmlActions": null,
                "elementSize": null,
                "defaultValue": null,
                "helperText": null,
                "labelClassName": null,
                "groups": null,
                "groupElements": [
                    {
                        "htmlElementType": "FILE",
                        "id": "fileUpload",
                        "label": null,
                        "name": "fileUpload",
                        "value": null,
                        "className": "file-select-text",
                        "readOnly": false,
                        "disabled": false,
                        "autofocus": true,
                        "required": false,
                        "multiple": props.singleFileUpload?null:"multiple",
                        "fileExtension": props.allowedFileFormats,
                        "style": null,
                        "attributes": null,
                        "message": null,
                        "htmlActions": null,
                        "elementSize": null,
                        "defaultValue": 0,
                        "helperText": null,
                        "labelClassName": null,
                        "regex": "",
                        "minLength": null,
                        "maxLength": 200,
                        "min": 1,
                        "max": null,
                        "placeholder": "select files to upload",
                        "hidden": props.hidden =='false' ? false : true
                    },
                    {
                        "htmlElementType": "BUTTON",
                        "id": "Submit",
                        "label": "Upload",
                        "name": null,
                        "value": null,
                        "className": null,
                        "readOnly": false,
                        "disabled": false,
                        "autofocus": false,
                        "required": false,
                        "style": null,
                        "attributes": null,
                        "message": null,
                        "htmlActions": null,
                        "elementSize": null,
                        "defaultValue": null,
                        "helperText": null,
                        "labelClassName": "btn btn-sm",
                        "src": null,
                        "href": null,
                        "reset": false,
                        "submit": true,
                        "hidden": true
                    }
                ]
            }
        ],
        "notes": null,
        "atleastOneFieldRequired": false,
        "submitDisabled": true,
        "hidden": false
    }

    useEffect(() => {
        if (props.disableFileUpload) {
            helpers.disableElement('fileUpload')
        } else {
            helpers.enableElement('fileUpload');
        }
    },[props.disableFileUpload]);

    useEffect(() => {
        if (sendDocs) {
            props.onSuccessResponse(uploadedFiles);
            if(props.isAppendAllowed){
                props.setPreviousScannedFilesCount(uploadedFiles.length);
            }
            props.setScannedFilesCount(uploadedFiles.length)
            setUploadedFiles([]);
        }
        props.onLoadingResponse?.(false);
    }, [sendDocs]);

    useEffect(() => {
        if (disableUpload) {
            helpers.disableElement('fileUpload')
        } else {
            helpers.enableElement('fileUpload');
        }
    }, [disableUpload])

    const getUploadedImageDetails = async (event) => {
        props.onLoadingResponse?.(true);
        props.setHideProgressBar(true);
        if(!props.isAppendAllowed){
            props.setScannedFiles([]);
        }
        props.setScannedFilesCount(0);
        setSendDocs(false);
        const files = helpers.getHtmlElementValue('fileUpload').map(async (file) => {
            return file;
        })
        const results = await Promise.all(files);
        if (results.length > 0) {
            setUploadedFiles(results);
            setSendDocs(true);
        }
        event[1].value = '';
    }

    const observersMap = {
        'fileUpload': [['change', getUploadedImageDetails]]
    }

    return (
        <React.Fragment>
            <DynamicForm requestMethod={'GET'} helpers={helpers} formJson={uploadJsonObject} observers={observersMap} />
        </React.Fragment>
    )
}

export default withFormHoc(FileSelect);