export default CustomToast;
export namespace TOAST_POSITION {
    let TOP_START: string;
    let TOP_CENTER: string;
    let TOP_END: string;
    let MIDDLE_START: string;
    let MIDDLE_CENTER: string;
    let MIDDLE_END: string;
    let BOTTOM_START: string;
    let BOTTOM_CENTER: string;
    let BOTTOM_END: string;
}
declare function CustomToast({ position, className, isShow, delayTime, isAnimationRequired, isAutohide, backgroundColor, headerContent, bodyContent, onClose }: {
    position: any;
    className: any;
    isShow: any;
    delayTime: any;
    isAnimationRequired: any;
    isAutohide: any;
    backgroundColor: any;
    headerContent: any;
    bodyContent: any;
    onClose: any;
}): React.JSX.Element;
import React from "react";
