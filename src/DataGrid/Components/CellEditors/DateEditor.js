import React, { forwardRef } from "react";
import CommonDatePicker from "../../../DatePicker/CommonDatePicker";
import { getDateFormatForDatePicker } from "../../Utils/DateFormatsHelper";


const DateEditor = forwardRef((props,ref) => {
      
    const { selectedDate, dateFormatStr, onDateChange,className,minDate,maxDate,closeOnScroll, placeholder,...rest} = props;
    const dateFormat = getDateFormatForDatePicker(dateFormatStr);


    const onChange = (date) => {
       onDateChange(date);
    }

    const handleOnScroll = (e) =>{
        const { scrollTop, scrollLeft ,scrollRight,scrollDown } = e.target;
        if(scrollTop > 5 || scrollLeft >5 || scrollRight > 5 || scrollDown > 5) {
            if(closeOnScroll) {
                return closeOnScroll(e);
            }
            return true;
        }
        return false;
  
      }

    return <div>
                <CommonDatePicker 
                    ref={ref}
                    {...rest}
                    closeOnScroll= { handleOnScroll}
                    portalId="root-portal"
                    placeholderText={placeholder ? placeholder : dateFormat} datePickerClassName={`${className ? className : ''}`} maxDate={maxDate} minDate= {minDate} dateFormat={dateFormat} selectedDate={selectedDate ? selectedDate : null} handleOnChange={onChange} />
            </div>
    
});


export default DateEditor;