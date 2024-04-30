


export const isNullOrUndefined = (value) => {
    if(typeof value == "undefined" || value == null || value == '') {
        return true;
    }
    return false;
}

export const isEmptyNumber = (value) => {
    if (value == undefined || value == "undefined" || value == null || value == "null") {
        return true;
    }
    return value.toString().trim().length <= 0;
}