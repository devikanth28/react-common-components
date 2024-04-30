import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Spinner from 'react-bootstrap/Spinner';
import DocumentScan from "../DocumentScan/DocumentScan";
import FileSelect from "./FileSelect";
import { ButtonGroup, Button } from "react-bootstrap";
import ImageLightBox from '../DynamicForm/Components/CommonComponents/ImageViewers/ImageLightBox/ImageLightBox'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Thumbail, { PreviousImage } from "./Thumbail";
import { StackedImages } from "../DynamicForm";
import { UncontrolledTooltip } from "reactstrap";


const DocumentUpload = (props) => {
    const [scannedFiles, setScannedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [deletedFile, setDeletedFile] = useState([]);
    const [sendDocs, setSendDocs] = useState(false);
    const [isLoading, setLoading] = useState();
    const [buttonName, setButtonName] = useState();
    const [autoScanInit, setAutoScanInIt] = useState(props.autoScanInit);
    const [previousFilesHistory, setPreviousFilesHistory] = useState(props.previousFilesHistory);
    const [isLightBoxOpen, setLightBoxOpen] = useState(false);
    const [fileUrl, setFileUrl] = useState([]);
    const [filetype, setFileType] = useState('undefined');
    const [scannedFilesCount, setScannedFilesCount] = useState();
    const [previousScannedFilesCount, setPreviousScannedFilesCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hideProgressBar, setHideProgressBar] = useState(true);
    const [showThumbnail, setShowThumbnail] = useState((props.showThumbnail || props.showThumbnail == undefined) ? true : false);
    const allowedFileFormats = ['.png', '.jpg', '.jpeg', '.pdf'];
    const [removedFile, setRemovedFile] = useState([]);

    useEffect(() => {
        setPreviousFilesHistory(props.previousFilesHistory);
    }, [props.previousFilesHistory]);

    useEffect(() => {
        setLoading(false);
        props.onErrorResponse?.(errorMessage);
        setErrorMessage();
    }, [errorMessage]);

    useEffect(() => {
        if (props.triggerResponse) {
            if (!props.isAppendAllowed) {
                setButtonName('Scan');
            }
            setPreviousScannedFilesCount(0);
            setScannedFilesCount(0);
            props.onSuccessResponse?.(scannedFiles);
            setScannedFiles([]);
        }
    }, [props.triggerResponse])

    useEffect(() => {
        if (sendDocs) {
            if (!props.isAppendAllowed) {
                setButtonName('Scan');
            }
            props.onSuccessResponse?.(scannedFiles);
            setAutoScanInIt(false);
            setSendDocs(false);
            setScannedFiles([]);
            setPreviousScannedFilesCount(0);
            setScannedFilesCount(0);
        }
    }, [scannedFiles, sendDocs])

    useEffect(() => {
        if (!props.uploadActionInParent && props.getAddedDocuments) {
            props.onSuccessResponse?.(scannedFiles);
        }
    }, [props.getAddedDocuments]);

    useEffect(() => {
        if (props.resetAddedDocuments) {
            setScannedFiles([]);
            setPreviousScannedFilesCount(0);
            setScannedFilesCount(0);
        }
    }, [props.resetAddedDocuments]);

    useEffect(() => {
        setLoading(false);
        props.onDeleteResponse?.(deletedFile);
    }, [deletedFile]);

    useEffect(() => {
        props.loadingStatus?.(isLoading);
    }, [isLoading]);

    useEffect(() => {
        if (props.previouslyUploadedFiles?.length > 0) {
            setScannedFiles(props.previouslyUploadedFiles);
        }
    }, [props.previouslyUploadedFiles]);

    useEffect(() => {
        if(!props.uploadActionInParent){
            props.removedFileResponse?.(removedFile);
        }
    },[removedFile]);


    const deleteSavedFile = (fileIndex) => {
        setDeletedFile(previousFilesHistory[fileIndex]);
        let updatedPreviousFilesHistory = [...previousFilesHistory];
        updatedPreviousFilesHistory.splice(fileIndex, 1);
        setPreviousFilesHistory([...updatedPreviousFilesHistory]);
    }

    const removeFile = (fileIndex) => {
        setRemovedFile(scannedFiles[fileIndex]);
        setHideProgressBar(true);
        let updatedDocuments = [...scannedFiles];
        updatedDocuments.splice(fileIndex, 1);
        setScannedFiles([...updatedDocuments]);
        setScannedFilesCount(updatedDocuments.length);
        setPreviousScannedFilesCount(previousScannedFilesCount - 1);
    }

    const onImageClick = (index, from) => {
        setFileUrl([])
        if (props.includeLightBox) {
            if (from == 'uploaded') {
                for (let file of scannedFiles) {
                    setFileUrl(oldArray => [...oldArray, URL.createObjectURL(file)]);
                }
            } else if (from == 'previous') {
                for (let file of previousFilesHistory) {
                    setFileUrl(oldArray => [...oldArray, file.imagePath]);
                }
            }
            setLightBoxOpen(true);
            setActiveIndex(index)
            if(from == 'uploaded') {
                setFileType(scannedFiles[index]?.type)
                } else {
                	setFileType(undefined)
            }
        }
    }

    const uploadDocs = () => {
        setSendDocs(true);
        if(!props.isAppendAllowed){
            setButtonName('');
        }
    }

    return (
        <React.Fragment>
            <div className="d-flex gap-3">
                <ButtonGroup vertical className="document-scan-upload">
                    <ButtonGroup>
                        {((props.documentScanOption === undefined && props.fileSelectOption === undefined) || props.documentScanOption) &&
                            <DocumentScan key={buttonName}
                                autoScanInit={autoScanInit}
                                webSocketUrl = {props.webSocketUrl}
                                isAppendAllowed={props.isAppendAllowed}
                                variant={"secondarylight"}
                                uploaded={sendDocs}
                                triggerResponse={props.triggerResponse}
                                resetAddedDocuments={props.resetAddedDocuments}
                                disableScanOption={props.disableScanOption}
                                scannerOutputType={props.scannerOutputType}
                                buttonName={buttonName ? buttonName : 'Scan'}
                                setScannedFiles={setScannedFiles}
                                setScannedFilesCount={setScannedFilesCount}
                                setHideProgressBar={setHideProgressBar}
                                setPreviousScannedFilesCount = {(count) => setPreviousScannedFilesCount(previousScannedFilesCount + count)}
                                onSuccessResponse={(file) => { setScannedFiles(scannedFiles => [...scannedFiles, file]) }}
                                onErrorResponse={(response) => { setErrorMessage(response) }}
                                onLoadingResponse={(isLoading) => { setLoading(isLoading) }} />}
                        {((props.documentScanOption ===undefined && props.fileSelectOption === undefined) || props.fileSelectOption) &&                    
                                <FileSelect setScannedFiles={setScannedFiles}
                                allowedFileFormats = {props.allowedFileFormats}
                                setScannedFilesCount={setScannedFilesCount}
                                setHideProgressBar={setHideProgressBar}
                                disableUpload={isLoading}
                                hidden={"false"}                        
                                singleFileUpload={props.singleFileUpload}
                                disableFileUpload={props.disableFileUpload}
                                previousFilesHistory={previousFilesHistory}
                                isAppendAllowed={props.isAppendAllowed}
                                setPreviousScannedFilesCount = {(count) => setPreviousScannedFilesCount(previousScannedFilesCount + count)}
                                onSuccessResponse={(files) => { setScannedFiles([...scannedFiles,...files]) }}
                                onDeleteResponse={(file) => { setDeletedFile(file) }} 
                                onLoadingResponse = {(isLoading)=>{setLoading(isLoading)}}/>    
                            }
                    </ButtonGroup>
                    {isLoading ?
                        <div className='loading-progress-bar bg-success'>
                            <div className='loading-progress bg-success' />
                        </div> : null}
                    {!hideProgressBar ? (   
                    props.isAppendAllowed &&
                    (scannedFiles.length - previousScannedFilesCount) > 0 ?
                        <ProgressBar className="w-100" variant="success" now={((scannedFiles.length - previousScannedFilesCount) / (scannedFilesCount)) * 100} /> : null) : null}

                    {!props.isAppendAllowed && !hideProgressBar && scannedFiles.length > 0 ? <ProgressBar className="w-100" variant="success" now={((scannedFiles.length)/(scannedFilesCount)) * 100} /> : null }
                </ButtonGroup>
                {previousFilesHistory && previousFilesHistory.length > 0 &&
                    <div>
                        {props.previousFilesLabel && <label className="col-md-3">{props.previousFilesLabel ? props.previousFilesLabel : 'Saved Files'} :</label>}
                        <div className="w-auto h-100" id="previously_uploaded_files">                            
                            <StackedImages closeLightBox={props?.closeLightBox} handleCloseLightBox={props?.handleCloseLightBox} imageTitle={"Previously Added Images"} includeLightBox downloadAll={props.downloadAll} downloadAllFiles={(files) => {props.downloadAllFiles(files)}}  images={previousFilesHistory} maxImages={4} previousFilesHistory={previousFilesHistory}/>                                                         
                        </div>
                        <UncontrolledTooltip placement="bottom" target="previously_uploaded_files">
                            Previously Uploaded Images    
                        </UncontrolledTooltip>                        
                    </div>
                }
            </div>            

            {props.allowedFileFormats && <div>
                <p className="text-secondary font-12 m-2 ms-0">Supported Files: {props.allowedFileFormats.split(",").map((format, index) => index < (props.allowedFileFormats.split(",").length - 1) ? <text>{format}{", "}</text> : <text>{format}</text>)}</p>                
            </div>}

            {!props.allowedFileFormats &&<div>
                <p className="text-secondary font-12 m-2 ms-0">Supported Files: {allowedFileFormats.join(", ")}</p>
            </div>}

            
            {scannedFiles.length > 0 &&
                <div className="d-flex gap-3 align-items-center">
                    {/* "d-flex gap-3 my-3 flex-wrap" */}
                   {showThumbnail && <div className={props.scannedFilesClassName ? props.scannedFilesClassName:"d-flex gap-3 my-3 flex-wrap"}>
                        {scannedFiles && scannedFiles.map((imageurl, index) => (
                        
                        <Thumbail onImageClick={()=>onImageClick(index,"uploaded")} imageurl = {imageurl} index = {index} removeFile={(currentIndex)=>removeFile(currentIndex)}/>
                        ))}
                    </div>}
                    {props.uploadActionInParent && 
                        <div>
                            <button type="button" className={props.ActionButtonColors ? props.ActionButtonColors : "btn btn-secondary"} onClick={uploadDocs}>{props.buttonName}</button>
                        </div>
                    }
                    {props.showResetButton &&
                        <div>
                            <button type="button" className="btn btn-warning" onClick={() => setScannedFiles([])}>reset</button>
                        </div>
                    }
                </div>
            }

            {props.includeLightBox && fileUrl && isLightBoxOpen &&
                <React.Fragment>
                    <ImageLightBox 
                        imageIndex={activeIndex} 
                        prescImages={fileUrl}
                        mainSrc={fileUrl[activeIndex]}
                        nextSrc={fileUrl[(activeIndex + 1) % fileUrl.length]}
                        prevSrc={fileUrl[(activeIndex + fileUrl.length - 1) % fileUrl.length]}                        
                        onCloseRequest={() => { setLightBoxOpen(false); setActiveIndex(0) }}
                        onMovePrevRequest={() => setActiveIndex((activeIndex + fileUrl.length - 1) % fileUrl.length)}
                        onMoveNextRequest={() => setActiveIndex((activeIndex + 1) % fileUrl.length)}
                        imageTitle={props.imageTitle}
                        animationDisabled={props.animationDisabled}
                        animationDuration={props.animationDuration}
                        clickOutsideToClose={props.clickOutsideToClose}
                        discourageDownloads={props.discourageDownloads}
                        enableZoom={props.enableZoom}
                        toolbarButtons={props.toolbarButtons}
                        reactModalStyle={props.reactModalStyle}
                        onAfterOpen={props.onAfterOpen}
                        imageCrossOrigin={props.imageCrossOrigin}
                        reactModalProps={props.reactModalProps}
                        documentType={filetype != undefined ? filetype : ''}
                    />
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default DocumentUpload;

DocumentUpload.prototype = {
    includeLightBox: PropTypes.bool,
    showResetButton: PropTypes.bool,
    uploadActionInParent: PropTypes.bool,
    previousFilesLabel: PropTypes.string,
    previousFilesHistory: PropTypes.arrayOf(PropTypes.shape({
        thumbnailPath: PropTypes.string,
        imagePath: PropTypes.string,
        altText: PropTypes.string,
        imageName: PropTypes.string
    })),
    scannedFilesClassName: PropTypes.string,
    animationDisabled: PropTypes.bool,
    animationDuration: PropTypes.bool,
    showThumbnail: PropTypes.bool

}