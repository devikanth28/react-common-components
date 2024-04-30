
export const getDateFormatForDatePicker = (value) => {

        switch(value) {
            case "DATE_WITH_24_TIME" :
                return "MMM dd yyyy HH:mm:ss";
            case "DATE_WITH_12_TIME" :
                return "MMM dd yyyy hh:mm:ss aa";
            case "NORMAL_DATE" :
                return "MMM dd, yyyy"
            case "NORMAL_DATE_WITH_24_TIME" :
                return "MMM dd, yyyy HH:mm"
            case "PADDED_DATE" :
                return  "MM/dd/yyyy";
            case "PADDED_DATE_24_TIME" :
                return "MM/dd/yyyy HH:mm:ss";
            case "PADDED_DATE_12_TIME" :
                return "MM/dd/yyyy hh:mm:ss aa";
            case "ISO_DATE" :
                return "yyyy-MM-dd";
            case "ISO_DATE_24_TIME" : 
                return "yyyy-MM-dd HH:mm:ss";
            case "ISO_DATE_12_TIME":
                return "yyyy-MM-dd hh:mm:ss aa";
            default :
                return "yyyy/MM/dd h:mm:ss aa";
        }

}


export const getDateFormatForDateFormatter = (value) => {

    switch(value) {
        case "DATE_WITH_24_TIME" :
            return "mmm dd yyyy HH:MM:ss";
        case "DATE_WITH_12_TIME" :
            return "mmm dd yyyy hh:MM:ss TT";
        case "NORMAL_DATE" :
            return "mmm dd, yyyy"
        case "NORMAL_DATE_WITH_24_TIME" :
            return "mmm dd, yyyy HH:MM"
        case "PADDED_DATE" :
            return  "mm/dd/yyyy";
        case "PADDED_DATE_24_TIME" :
            return "mm/dd/yyyy HH:MM:ss";
        case "PADDED_DATE_12_TIME" :
            return "mm/dd/yyyy hh:MM:ss TT";
        case "ISO_DATE" :
            return "yyyy-mm-dd";
        case "ISO_DATE_24_TIME" : 
            return "yyyy-mm-dd HH:MM:ss";
        case "ISO_DATE_12_TIME":
            return "yyyy-mm-dd hh:MM:ss TT";
        default :
            return "yyyy/mm/dd h:MM:ss TT";
    }

}