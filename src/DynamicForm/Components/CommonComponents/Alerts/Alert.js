import React, { useEffect } from "react";
import Alert from 'react-bootstrap/Alert'; 

const CustomAlert = ({alertType,isDismissibleRequired,alertMessage,isAutohide,delayTime,isShow,onClose,isTransition}) => {

    useEffect(()=>{
        if(isAutohide && delayTime){
       const timerId= setTimeout(()=>{
            onClose();
        },delayTime)
        return(()=>{
           clearInterval(timerId);
        })
    }
    },[])
    return (
        <React.Fragment>
            <Alert show={isShow} onClose={onClose} variant={alertType} dismissible={isDismissibleRequired} transition={isTransition}>
               {alertMessage && alertMessage()}
            </Alert>
        </React.Fragment>
    )
}
export default CustomAlert;


export const ALERT_TYPE={
    SUCCESS:'success',
    ERROR:'danger',
    WARNING:'warning',
    INFO:'info',
    LIGHT:'light',
    DARK:'dark',
    PRIMARY:'primary',
    SECONDARY:'secondary'
}