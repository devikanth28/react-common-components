import React, { useEffect, useRef, useState } from 'react';
import { FloatingLabel, Form } from "react-bootstrap";
import ErrorMessage from '../CommonComponents/ErrorMessage';
import HelperText from '../CommonComponents/HelperText';
//import FileIcon from '../Images/fileIcon.svg';

const FileUploadElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {

    const action = (e) => {
        const payload = [e, htmlElement, formId];
        observers['ALL'][0][1](payload);
        Object.entries(observers).map(([key, configs]) => {
            if (id == (key)
                && key != 'ALL') {
                configs.map(config => {
                    const [eve, callBack] = config;
                    if (e.type == eve && key != 'ALL') {
                        callBack(payload);
                    }
                })
            }
        })
    }


    const { id, message, helperText, labelClassName, hidden ,fileExtension, attributes, fileUploadMultiple, label, className, disabled, svgLabel, isLoading, addMoreFiles, ...rest } = htmlElement;


    const { htmlActions, elementSize, defaultValue, value, ...filteredAttributes } = rest;
    const { floatingLabelClassName } = attributes || {}

    const [key, setKey] = useState(false);
    const previousValue= useRef(null);
    const fileRef = useRef(false);


    useEffect(() => {
        if (((htmlElement.value && htmlElement.value.length == 0) || !htmlElement.value) && previousValue.current && previousValue.current.length > 0) {
            setKey(prev=>!prev);
            previousValue.current=null;
        }
        previousValue.current = htmlElement.value;
    }, [htmlElement.value])



    return (
        <React.Fragment>
            {!hidden && <React.Fragment>
            <div className={labelClassName ? `${labelClassName} input-group custom-file-button ${message ? 'has-validation' : ''}` : `input-group custom-file-button ${message ? 'has-validation' : ''}`}>
                <FloatingLabel
                    controlId={id}
                    label={label}
                    className={message ? (`${floatingLabelClassName} is-invalid` || `is-invalid`) : floatingLabelClassName || ""}>
                    <Form.Control
                        key={key}
                        type={"file"}
                        id={id}
                        ref={fileRef}
                        size={'sm'}
                        accept={fileExtension}
                        onChange={(e) => {action(e) }}
                        onBlur={(e) => { action(e) }}
                        aria-label={`file input`}
                        disabled={disabled}
                        multiple={fileUploadMultiple}
                        className={message ? `${className || ''} is-invalid` : (className || '')}
                        {...filteredAttributes}
                        {...attributes}
                    />
                    <span></span>
                </FloatingLabel>
                <label onClick={() => { fileRef?.current?.click(); }} className="input-group-text uploadAction" for="inputGroupFile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <g id="file_black_icon_24px" transform="translate(-821 -2304.953)">
                            <rect id="Rectangle_3652" data-name="Rectangle 3652" width="18" height="18" transform="translate(821 2304.953)" fill="none" />
                            <g id="Group_14618" data-name="Group 14618" transform="translate(822.633 2304.988)">
                                <path id="Union_146" data-name="Union 146" d="M0,17.964V0H9.327l4.788,4.764v13.2Zm.657-1.633v.979h12.8V5.226h-4.6V.653H.657ZM9.52,4.572h3.475l-.52-.518L9.52,1.115ZM7.775,16.155a1.4,1.4,0,0,1-.5-.335,1.543,1.543,0,0,1-.333-.547,2.172,2.172,0,0,1-.12-.753,1.844,1.844,0,0,1,.107-.634,1.508,1.508,0,0,1,.307-.512,1.443,1.443,0,0,1,.487-.344,1.589,1.589,0,0,1,.649-.127,1.546,1.546,0,0,1,.558.1,1.227,1.227,0,0,1,.442.287,1.318,1.318,0,0,1,.29.463,1.74,1.74,0,0,1,.1.623.437.437,0,0,1-.036.215.14.14,0,0,1-.128.055H7.5a1.622,1.622,0,0,0,.086.482.985.985,0,0,0,.2.338.761.761,0,0,0,.294.2,1.065,1.065,0,0,0,.383.066,1.165,1.165,0,0,0,.349-.047,1.7,1.7,0,0,0,.257-.1c.072-.037.134-.072.186-.1a.276.276,0,0,1,.141-.047.148.148,0,0,1,.128.064l.2.253a1.223,1.223,0,0,1-.275.244,1.619,1.619,0,0,1-.327.162,1.842,1.842,0,0,1-.356.089,2.4,2.4,0,0,1-.356.028A1.7,1.7,0,0,1,7.775,16.155Zm.018-2.539a1.04,1.04,0,0,0-.272.6H9.145a1.012,1.012,0,0,0-.05-.322.751.751,0,0,0-.146-.259.662.662,0,0,0-.239-.173.817.817,0,0,0-.328-.062A.8.8,0,0,0,7.792,13.617Zm-2.332,2.6V11.48h.689v4.742Zm-1.573,0V13.495H2.6v2.727H1.907V13.5l-.321-.045a.28.28,0,0,1-.13-.057.146.146,0,0,1-.049-.119V13h.5v-.138a1.565,1.565,0,0,1,.1-.555,1.175,1.175,0,0,1,.292-.439,1.357,1.357,0,0,1,.489-.29,2.051,2.051,0,0,1,.687-.1,2.234,2.234,0,0,1,.265.016,1.226,1.226,0,0,1,.232.048l-.022.359a.079.079,0,0,1-.08.075,1.867,1.867,0,0,1-.2.008,1.979,1.979,0,0,0-.506.056.85.85,0,0,0-.34.17.651.651,0,0,0-.191.282,1.186,1.186,0,0,0-.059.392V13h2v3.223Z" transform="translate(0 0)" fill="#080808" />
                            </g>
                        </g>
                    </svg>
                    <span className='ms-2'>{(addMoreFiles && htmlElement?.value?.length) ? "Add More" : (svgLabel || 'Browse')}</span>
                </label>
                {message && <ErrorMessage errorMessage={message} />}
            </div>
            {helperText && !message && <HelperText helperText={helperText} />}
            </React.Fragment>}
        </React.Fragment>

    );
}
export default FileUploadElement;