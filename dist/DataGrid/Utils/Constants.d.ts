export namespace ColumnType {
    let string: string;
    let number: string;
    let date: string;
}
export namespace ColumnSubtype {
    let amount: string;
}
export namespace FilterType {
    let string_1: string;
    export { string_1 as string };
    let number_1: string;
    export { number_1 as number };
    let date_1: string;
    export { date_1 as date };
}
export const FrozenColumnPosition: Readonly<{
    RIGHT: "RIGHT";
    LEFT: "LEFT";
}>;
export const CellNavigationModeEnum: Readonly<{
    NONE: "NONE";
    LOOP_OVER_ROW: "LOOP_OVER_ROW";
    CHANGE_ROW: "CHANGE_ROW";
}>;
export const FunctionReturnType: Readonly<{
    REACT_NODE: "REACT_NODE";
    STRING: "STRING";
    INTEGER: "INTEGER";
    MAP: "MAP";
}>;
export const ChangeType: Readonly<{
    SORT_INFO: "SORT_INFO";
    FILTER_INFO: "FILTER_INFO";
    PAGINATION_INFO: "PAGINATION_INFO";
}>;
export const FUNCTION_TYPE: "FUNCTION";
export const defaultDateFormatValue: "yyyy/mm/dd h:MM:ss TT";
export const ONE_DAY_ONE_SECOND_LESS_TIME_IN_MILLISECONDS: number;
export const ClaimConstants: Readonly<{
    CLAIM: "claim";
    UNCLAIM: "unclaim";
}>;
