export default FilterDropDown;
declare function FilterDropDown(props: any): React.JSX.Element;
declare namespace FilterDropDown {
    namespace propsType {
        let itemsMap: PropTypes.Validator<object>;
        let onSelectionHandler: PropTypes.Validator<(...args: any[]) => any>;
        let checkedKey: PropTypes.Validator<string>;
        let columnKey: PropTypes.Validator<string>;
        let tabIndex: PropTypes.Requireable<number>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
