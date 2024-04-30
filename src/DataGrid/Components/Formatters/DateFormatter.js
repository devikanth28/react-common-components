import React from "react";
import dateFormat from "dateformat";
import { getDateFormatForDateFormatter } from "../../Utils/DateFormatsHelper";


const DateFormatter = (props) => {

    const {date , dateFormatStr } = props;
    let formattedDate = '';

    try{
        if(date) {
            formattedDate = dateFormat(new Date(date), getDateFormatForDateFormatter(dateFormatStr ? dateFormatStr : ''));
        }
    } catch(err){
        console.log(err);
        formattedDate = date;
    }
    
    return <React.Fragment>
            {formattedDate}
    </React.Fragment>
}

export default DateFormatter;