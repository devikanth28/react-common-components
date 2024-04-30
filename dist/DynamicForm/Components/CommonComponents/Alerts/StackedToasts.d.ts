export default StackedToasts;
declare function StackedToasts({ position, className, delayTime, backgroundColor, setStackedToastContent, bodyContent, onClose }: {
    position: any;
    className: any;
    delayTime: any;
    backgroundColor: any;
    setStackedToastContent: any;
    bodyContent: any;
    onClose: any;
}): React.JSX.Element;
declare namespace StackedToasts {
    namespace propTypes {
        let position: PropTypes.Requireable<string>;
        let className: PropTypes.Requireable<string>;
        let delayTime: PropTypes.Requireable<number>;
        let backgroundColor: PropTypes.Requireable<string>;
        let setStackedToastContent: PropTypes.Requireable<(...args: any[]) => any>;
        let onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
