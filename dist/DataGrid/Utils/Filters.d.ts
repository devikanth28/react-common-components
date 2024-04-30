export const filterTypes: {
    [x: string]: {
        defaultValue: string;
        operators: {
            name: string;
            filterFunction: ({ value, filterValue }: {
                value: any;
                filterValue: any;
            }) => boolean;
        }[];
        listOperators: string[];
        rangeOperatorsList: any[];
        filterOptionsList: {
            CONTAINS_STRING: string;
            EQUALS_STRING: string;
            IN_LIST_STRING: string;
            NOT_LIST_STRING: string;
            GREATER?: undefined;
            GREATER_EQUAL?: undefined;
            LESS?: undefined;
            LESS_EQUAL?: undefined;
            EQUALS_NUMERIC?: undefined;
            IN_LIST_NUMBER?: undefined;
            NOT_LIST_NUMBER?: undefined;
            AFTER_ON?: undefined;
            AFTER?: undefined;
            BEFORE_ON?: undefined;
            BEFORE?: undefined;
            IN_RANGE_DATE?: undefined;
            NOT_IN_RANGE_DATE?: undefined;
        };
    } | {
        defaultValue: string;
        operators: {
            name: string;
            filterFunction: ({ value, filterValue }: {
                value: any;
                filterValue: any;
            }) => boolean;
        }[];
        listOperators: string[];
        rangeOperatorsList: string[];
        filterOptionsList: {
            GREATER: string;
            GREATER_EQUAL: string;
            LESS: string;
            LESS_EQUAL: string;
            EQUALS_NUMERIC: string;
            IN_LIST_NUMBER: string;
            NOT_LIST_NUMBER: string;
            CONTAINS_STRING?: undefined;
            EQUALS_STRING?: undefined;
            IN_LIST_STRING?: undefined;
            NOT_LIST_STRING?: undefined;
            AFTER_ON?: undefined;
            AFTER?: undefined;
            BEFORE_ON?: undefined;
            BEFORE?: undefined;
            IN_RANGE_DATE?: undefined;
            NOT_IN_RANGE_DATE?: undefined;
        };
    } | {
        defaultValue: string;
        operators: {
            name: string;
            filterFunction: ({ value, filterValue }: {
                value: any;
                filterValue: any;
            }) => boolean;
        }[];
        listOperators: any[];
        rangeOperatorsList: string[];
        filterOptionsList: {
            AFTER_ON: string;
            AFTER: string;
            BEFORE_ON: string;
            BEFORE: string;
            IN_RANGE_DATE: string;
            NOT_IN_RANGE_DATE: string;
            CONTAINS_STRING?: undefined;
            EQUALS_STRING?: undefined;
            IN_LIST_STRING?: undefined;
            NOT_LIST_STRING?: undefined;
            GREATER?: undefined;
            GREATER_EQUAL?: undefined;
            LESS?: undefined;
            LESS_EQUAL?: undefined;
            EQUALS_NUMERIC?: undefined;
            IN_LIST_NUMBER?: undefined;
            NOT_LIST_NUMBER?: undefined;
        };
    };
};
export function getFilterOptions(filterObject: any, filterOptions: any): any;
