import React from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const CustomToast = ({ position, className, isShow, delayTime, isAnimationRequired, isAutohide, backgroundColor, headerContent, bodyContent, onClose }) => {

    return (
        <React.Fragment>
            <ToastContainer position={position} className={className} >
                <Toast show={isShow} delay={delayTime} animation={isAnimationRequired} autohide={isAutohide} bg={backgroundColor} onClose={onClose}>
                    {headerContent && <Toast.Header>{headerContent()}</Toast.Header>}
                    {bodyContent && <Toast.Body>{bodyContent()}</Toast.Body>}
                </Toast>
            </ToastContainer>
        </React.Fragment>
    )
}
export default CustomToast;

export const TOAST_POSITION = {
    TOP_START:'top-start',
    TOP_CENTER:'top-center',
    TOP_END:'top-end',
    MIDDLE_START:'middle-start',
    MIDDLE_CENTER:'middle-center',
    MIDDLE_END:'middle-end',
    BOTTOM_START:'bottom-start',
    BOTTOM_CENTER:'bottom-center',
    BOTTOM_END:'bottom-end',
}
