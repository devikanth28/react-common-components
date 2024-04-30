import React, { useEffect, useRef, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import PropTypes from "prop-types";
import Validate from "../../../../LocalityComponent/helpers/Validate";

const validate = Validate();

const NewToast = ({id, toastMessage, delay, bg, onCloseCallBack }) => {
    const [show, setShow] = useState(true);
    const [index, setIndex] = useState(id);

    const handleClose = () => {
        setShow(false);
        if(validate.isNotEmpty(onCloseCallBack)){
            onCloseCallBack();
        }
    }

    return <React.Fragment>
            {validate.isNotEmpty(toastMessage) &&
                <Toast key={index} id={index} onClose={handleClose} show={show} delay={delay} bg={bg} animation={true} autohide={true}>
                    <Toast.Body>
                        <div className="d-flex justify-content-between">
                            <p className="mb-0 text-white">{toastMessage}</p>
                            <svg className="pointer" style={{ cursor: "pointer" }} onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <g id="close_white_icon_24px" transform="translate(-48.941 -281.937)">
                                    <rect id="Rectangle_3290" data-name="Rectangle 3290" width="24" height="24" transform="translate(48.941 281.937)" fill="none" />
                                    <path id="Path_1951" data-name="Path 1951" d="M72.622,304.007,62.517,293.924,72.6,283.84a1.108,1.108,0,0,0-1.567-1.566L60.945,292.356l-10.083-10.1a1.109,1.109,0,0,0-1.567,1.568l10.083,10.1L49.295,304.007a1.108,1.108,0,1,0,1.509,1.624c.02-.018.039-.037.058-.057L60.945,295.49l10.084,10.084a1.108,1.108,0,0,0,1.566,0h0a1.09,1.09,0,0,0,.052-1.541Z" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                    </Toast.Body>
                </Toast>
            }
        </React.Fragment>
}

const StackedToasts = ({ position, className, delayTime, backgroundColor, setStackedToastContent, bodyContent, onClose }) => {
    const [stackedToasts, setStackedToasts] = useState([]);
    const toastIndex = useRef(0);
    const [triggeringState, setTriggeringState] = useState(false);

    useEffect(() => {
        return () => {
            setStackedToasts([]);
        }
    }, []);

    useEffect(() => {
        let timeOutId = null;

        //When no toast is added in between the given delay or length of stack is greater than 9.....empty the stack
        if (triggeringState) {
            setStackedToasts([]);
            setStackedToastContent?.(null);            
        }
        else {                                                       // Remove toast one by one at given pace.....
            timeOutId = setTimeout(() => {
                setTriggeringState(true);
                if (stackedToasts.length > 0) {
                    const filteredToasts = stackedToasts.slice(1);
                    setStackedToasts(filteredToasts);
                }
                else {
                    clearTimeout(timeOutId);
                }
            }, [delayTime]);
        }

        return () => clearTimeout(timeOutId);

    }, [stackedToasts]);

    useEffect(() => {
        addToast(bodyContent, onClose);
    }, [bodyContent, onClose]);

    const addToast = (toastMessage) => {
        const toast =  {
            toastMessage : toastMessage,
            toastId : toastIndex.current++,
            onClose : onClose
        };        
        setStackedToasts([...stackedToasts, { toast: toast }]);
    }

    return (
        <React.Fragment>
            {validate.isNotEmpty(stackedToasts) && <ToastContainer position={position} className={className}>
                {stackedToasts.map((each) => {
                    return <NewToast id={each.toast.toastId} toastMessage={each.toast.toastMessage} delay={delayTime} bg={backgroundColor} onCloseCallBack={each.toast.onClose} />
                })}
            </ToastContainer>}
        </React.Fragment>
    );
};

export default StackedToasts;

StackedToasts.propTypes = {
    position: PropTypes.string,
    className: PropTypes.string,
    delayTime: PropTypes.number,
    backgroundColor: PropTypes.string,

    //Function to unmount the compnent
    setStackedToastContent: PropTypes.func,

    //Callback function to call when toast is closed
    onClose: PropTypes.func
}