export default CustomAlert;
export namespace ALERT_TYPE {
    let SUCCESS: string;
    let ERROR: string;
    let WARNING: string;
    let INFO: string;
    let LIGHT: string;
    let DARK: string;
    let PRIMARY: string;
    let SECONDARY: string;
}
declare function CustomAlert({ alertType, isDismissibleRequired, alertMessage, isAutohide, delayTime, isShow, onClose, isTransition }: {
    alertType: any;
    isDismissibleRequired: any;
    alertMessage: any;
    isAutohide: any;
    delayTime: any;
    isShow: any;
    onClose: any;
    isTransition: any;
}): React.JSX.Element;
import React from "react";
