export const flattenColumnsList = (columns) => {

    return columns.flatMap((element) => {
        if(element.isGroup) {
            if(element.childColumns && element.childColumns.length > 0) {
                return [...flattenColumnsList(element.childColumns)];
            }
            return [];
        } 

        return element;

    });

}

/* 
    To make columns level flatten after  converting to grid columns 
*/

export const flattenGridColumnList = (columns) => {

    return columns.flatMap((element) => {
                if(element.children && element.children.length > 0) {
                    return [...flattenColumnsList(element.children)];
                }

             return element;

    });

}