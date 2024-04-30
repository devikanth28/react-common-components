import React from "react";
import Modal from 'react-bootstrap/Modal';


const CustomModal = ({ show, backdrop, keyboard, animation, size, closeButton, centered, headerContent, bodyContent, footerContent }) => {
    return (
        <React.Fragment>
            <Modal show={show}
                backdrop={backdrop}
                keyboard={keyboard}
                animation={animation}
                size={size}
                aria-labelledby="contained-modal-title-vcenter"
                centered={centered}>
                {(headerContent || closeButton) && <Modal.Header  closeButton={closeButton}>
                    {headerContent}
                </Modal.Header>}
                {bodyContent &&
                    <Modal.Body>{bodyContent}</Modal.Body>}
                {footerContent && <Modal.Footer>
                    {footerContent}
                </Modal.Footer>}
            </Modal>
        </React.Fragment>
    )
}
export default CustomModal;