export const ColumnType = {
    string : "STRING",
    number : "NUMBER",
    date : "DATE"
}

export const ColumnSubtype = {
    amount : "AMOUNT"
}


export const FilterType = {
    string : "STRING",
    number : "NUMBER",
    date : "DATE"
}

export const FrozenColumnPosition = Object.freeze({
    RIGHT : "RIGHT",
    LEFT :"LEFT"
});

export const CellNavigationModeEnum = Object.freeze({
    NONE : 'NONE',
	LOOP_OVER_ROW :'LOOP_OVER_ROW',
	CHANGE_ROW : 'CHANGE_ROW'
})

export const FunctionReturnType = Object.freeze({
    REACT_NODE : 'REACT_NODE',
	STRING :'STRING',
	INTEGER : 'INTEGER',
	MAP :'MAP'
})


export const ChangeType = Object.freeze({
    SORT_INFO :'SORT_INFO',
    FILTER_INFO : 'FILTER_INFO',
    PAGINATION_INFO :'PAGINATION_INFO'
})

export const FUNCTION_TYPE = "FUNCTION";


export const defaultDateFormatValue = "yyyy/mm/dd h:MM:ss TT";

export const ONE_DAY_ONE_SECOND_LESS_TIME_IN_MILLISECONDS = 86399*1000;

export const ClaimConstants = Object.freeze({
    CLAIM : 'claim',
	UNCLAIM :'unclaim'
})