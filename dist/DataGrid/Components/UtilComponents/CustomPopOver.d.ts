export default CustomPopOver;
declare function CustomPopOver(props: any): React.JSX.Element;
declare namespace CustomPopOver {
    namespace propTypes {
        let target: PropTypes.Validator<string>;
        let value: PropTypes.Validator<string>;
        let closePopOver: PropTypes.Requireable<boolean>;
        let setClosePopOver: PropTypes.Requireable<(...args: any[]) => any>;
        let headerText: PropTypes.Requireable<string>;
        let placement: PropTypes.Requireable<string>;
        let trigger: PropTypes.Requireable<string>;
    }
}
import React from 'react';
import PropTypes from "prop-types";
