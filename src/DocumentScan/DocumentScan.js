import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonGroup } from "react-bootstrap";

const DocumentScan = (props) => {
    const [webSocketUrl, setWebSocketUrl] = useState('ws://localhost:59557/connect');
    const [scannedFiles, setScannedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [webSocket, setWebSocket] = useState(null);
    const [sendDocs, setSendDocs] = useState(false);
    const [sendErrorMessage, setSendErrorMessage] = useState(false);
    const [reConnect, setReConnect] = useState(false);
    const [duplex, setDuplex] = useState('yes');
    const [buttonName, setButtonName] = useState(props.buttonName);
    const [disableScan, setDisableScan] = useState(false);
    var index = 1;

    useEffect(() => {
        if (props.webSocketUrl) {
            setWebSocketUrl(props.webSocketUrl);
        }
        if (props.duplex) {
            setDuplex(props.duplex);
        }

        const socket = new WebSocket(webSocketUrl);
        setWebSocket(socket);
        if (props.autoScanInit) {
            const message = {
                printType: 'scan',
                action: 'init',
            };
            socket.onopen = () => {
                socket.send(JSON.stringify(message))
            }
            socket.onmessage = (event) => {
                if (typeof event.data === 'string') {
                    props.onErrorResponse(errorMessage);
                }
            }
        }
    }, [reConnect]);

    useEffect(() => {
        if(props.disableScanOption){
            setDisableScan(true);
        }else{
            setDisableScan(false);
        }
    }, [props.disableScanOption]);

    useEffect(() => {
        if(props.uploaded || props.triggerResponse || props.resetAddedDocuments){
            setScannedFiles([]);
        }
    }, [props.uploaded,props.triggerResponse,props.resetAddedDocuments]);

    const getScannedFiles = (duplex) => {
        props.setHideProgressBar(false);
        if(!props.isAppendAllowed){
            props.setScannedFiles([]);
        }
        if(props.isAppendAllowed){
            props.setPreviousScannedFilesCount(scannedFiles.length);
        }
        setDisableScan(true);
        props.setScannedFilesCount(0);
        props.onLoadingResponse(true);
        setScannedFiles([]);
        setDuplex(duplex)
        setErrorMessage(null);
        setSendDocs(false);
        setSendErrorMessage(false);
        const message = {
            printType: 'scan',
            action: 'add',
            duplex: duplex,
            fileType: props.scannerOutputType? props.scannerOutputType:'pdf',
            endTag: 'END',
        };
        if (webSocket.readyState === WebSocket.OPEN) {
            webSocket.send(JSON.stringify(message));
        }
        else {
            setReConnect(true);
        }
        webSocket.onmessage = (event) => {
            if (event.data instanceof Blob) {
                const filename = 'scanned_document_' + index + getFileType(); index++;
                const myFile = new File([event.data], filename, {
                    type : getScannedFormat()
                });
                setScannedFiles(scannedFiles => [...scannedFiles, myFile])
            } else if (typeof event.data === 'string') {
                if (event.data === 'END') {
                    setSendDocs(true);
                } else {
                    setErrorMessage(event.data);
                    setSendErrorMessage(true);
                }
            }
        };
    }; 

    const getFileType = () => {
        switch (props.scannerOutputType) {
            case 'pdf' :
                return '.pdf'; 
            case 'png':  
                return '.png';
            case 'jpeg':  
                return '.jpeg';           
            default:
                 return '.pdf';
        }
    }

    const getScannedFormat = () => {
        switch (props.scannerOutputType) {
            case 'pdf' :
                return 'application/pdf'; 
            case 'png':  
                return 'image/png';
            case 'jpeg':  
                return 'image/jpeg';           
            default:
                 return 'application/pdf';
        }
       }

    useEffect(() => {
        if (sendDocs) {
            props.setScannedFilesCount(scannedFiles.length);
            let delay = 500;
            scannedFiles.forEach((file) => {
                setTimeout(() => {
                    props.onSuccessResponse(file);
                }, delay);
                delay += 500;
                return () => {
                    clearTimeout(timer);
                }
            });
            if(!props.isAppendAllowed){
                setButtonName('Rescan');
            }
            props.onLoadingResponse(false);
            setDisableScan(false);
        }
        if (sendErrorMessage) {
            props.onErrorResponse(errorMessage);
            props.onLoadingResponse(false);
            setDisableScan(false);
        }
    }, [sendDocs, sendErrorMessage]);

    return (
        <React.Fragment>

            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant={props.variant} id="dropdown-basic" disabled={disableScan}>
                    {duplex == 'no' && <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g id="scan-oneside-icn-16" transform="translate(-681 -185)">
                            <g id="scan-oneside-icn-16-2" data-name="scan-oneside-icn-16" transform="translate(682.9 186)">
                                <path id="Union_175" data-name="Union 175" d="M1275.291-8121.914v-.811h.661a.359.359,0,0,0,.359-.357v-.664h.811v.664a1.171,1.171,0,0,1-1.17,1.168Zm-1.531,0v-.811h1.321v.811Zm-1.531,0v-.811h1.321v.811Zm-1.533,0v-.811h1.321v.811Zm-1.531,0v-.811h1.321v.811Zm-.872,0a1.174,1.174,0,0,1-1.17-1.176v-.656h.811v.662a.36.36,0,0,0,.361.359h.66v.811Zm8.021-2.044v-1.319h.811v1.319Zm-9.19,0v-1.319h.811v1.319Zm9.19-1.531v-1.321h.811v1.321Zm-9.19,0v-1.321h.811v1.321Zm10.211-.51v-1.021h-10.422V-8126h-.811v-2.853h.811v1.021h10.422v-1.021h.811V-8126Zm-1.021-2.042v-3.573h-1.893a1.174,1.174,0,0,1-1.17-1.176v-2.4h-4.958a.362.362,0,0,0-.359.357v6.792h-.811v-6.785a1.174,1.174,0,0,1,1.172-1.174h5.685l3.145,3.669v4.29Zm-2.252-4.75a.362.362,0,0,0,.359.363h1.564l-1.923-2.25Z" transform="translate(-1266 8135.85)" fill="#080808" />
                                <path id="Union_177" data-name="Union 177" d="M1266.2-8131.094v-.751h1.013v-3.067l-.711.445-.4-.667,1.368-.866h.58v4.155h1.013v.751Z" transform="translate(-1262.622 8137.505)" fill="#080808" />
                            </g>
                            <rect id="Rectangle_12084" data-name="Rectangle 12084" width="16" height="16" transform="translate(681 185)" fill="none" />
                        </g>
                    </svg>}
                    {duplex == 'yes' &&
                        <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="scan-oneside-icn-16" transform="translate(-681 -185)">
                                <g id="scan-oneside-icn-16-2" data-name="scan-oneside-icn-16" transform="translate(682.9 186)">
                                    <path id="Union_176" data-name="Union 176" d="M1251.291-8121.914v-.811h.661a.359.359,0,0,0,.359-.357v-.664h.811v.664a1.171,1.171,0,0,1-1.17,1.168Zm-1.531,0v-.811h1.321v.811Zm-1.531,0v-.811h1.321v.811Zm-1.533,0v-.811h1.323v.811Zm-1.531,0v-.811h1.321v.811Zm-.872,0a1.174,1.174,0,0,1-1.17-1.176v-.656h.811v.662a.36.36,0,0,0,.361.359h.66v.811Zm8.02-2.044v-1.319h.811v1.319Zm-9.19,0v-1.319h.811v1.319Zm9.19-1.531v-1.321h.811v1.321Zm-9.19,0v-1.321h.811v1.321Zm10.211-.51v-1.021h-10.422V-8126h-.811v-2.853h.811v1.021h10.422v-1.021h.811V-8126Zm-1.021-2.042v-3.573h-1.893a1.174,1.174,0,0,1-1.17-1.176v-2.4h-4.958a.362.362,0,0,0-.359.357v6.792h-.811v-6.785a1.175,1.175,0,0,1,1.172-1.174h5.685l3.145,3.669v4.29Zm-2.252-4.75a.362.362,0,0,0,.359.363h1.564l-1.923-2.25Z" transform="translate(-1242 8135.85)" fill="#080808" />
                                    <path id="Path_50631" data-name="Path 50631" d="M3.982-5.818v.446H1.047v-.4l1.6-1.759a3.167,3.167,0,0,0,.469-.65,1.272,1.272,0,0,0,.145-.579.739.739,0,0,0-.22-.575.888.888,0,0,0-.621-.2,2.02,2.02,0,0,0-1.293.524l-.2-.407a1.961,1.961,0,0,1,.682-.411,2.36,2.36,0,0,1,.824-.152,1.444,1.444,0,0,1,.992.323,1.107,1.107,0,0,1,.365.873,1.7,1.7,0,0,1-.178.756,3.623,3.623,0,0,1-.585.808l-1.293,1.4Z" transform="translate(2.176 11.637)" fill="#080808" />
                                    <path id="Path_50631_-_Outline" data-name="Path 50631 - Outline" d="M4.132-5.222H.9v-.609l1.636-1.8a3.034,3.034,0,0,0,.446-.617,1.129,1.129,0,0,0,.129-.511.592.592,0,0,0-.171-.465.75.75,0,0,0-.52-.161,1.885,1.885,0,0,0-1.2.489l-.146.121L.741-9.452l.08-.076a2.118,2.118,0,0,1,.734-.443,2.521,2.521,0,0,1,.876-.161,1.6,1.6,0,0,1,1.092.361,1.255,1.255,0,0,1,.416.985,1.852,1.852,0,0,1-.193.823,3.785,3.785,0,0,1-.609.843L2.074-5.968H4.132ZM1.2-5.522H3.832v-.146H1.39L2.915-7.323A3.494,3.494,0,0,0,3.476-8.1a1.554,1.554,0,0,0,.162-.69.955.955,0,0,0-.315-.761,1.307,1.307,0,0,0-.893-.286,2.222,2.222,0,0,0-.772.143,1.9,1.9,0,0,0-.549.306l.069.139a2.09,2.09,0,0,1,1.24-.442,1.036,1.036,0,0,1,.722.24.886.886,0,0,1,.269.686,1.426,1.426,0,0,1-.162.646,3.327,3.327,0,0,1-.491.682L1.2-5.715Z" transform="translate(2.176 11.637)" fill="#080808" />
                                </g>
                                <rect id="Rectangle_12084" data-name="Rectangle 12084" width="16" height="16" transform="translate(681 185)" fill="none" />
                            </g>
                        </svg>}

                    {buttonName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => getScannedFiles('no')}>One side scan</Dropdown.Item>
                    <Dropdown.Item onClick={() => getScannedFiles('yes')}>Two side scan</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* 
                
                
                <SplitButton title={buttonName} disabled={disableButton}>
                    <Dropdown.Item onClick={() => getScannedFiles('no')}></Dropdown.Item>
                    <Dropdown.Item onClick={() => getScannedFiles('yes')}></Dropdown.Item>
                </SplitButton> */}

        </React.Fragment>
    )
}

export default DocumentScan;