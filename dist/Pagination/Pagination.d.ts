export default Pagination;
declare function Pagination(props: any): React.JSX.Element;
declare namespace Pagination {
    namespace propsType {
        let totalRecords: PropTypes.Validator<number>;
        let currentPageNumber: PropTypes.Validator<number>;
        let recordsPerPage: PropTypes.Validator<any[]>;
        let limit: PropTypes.Validator<number>;
        let onChange: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from 'prop-types';
