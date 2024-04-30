import React, { useRef, useState } from "react";
import { getDateFormatForDatePicker } from "../../../DataGrid/Utils/DateFormatsHelper";
import CommonDatePicker from "../../../DatePicker/CommonDatePicker";
import ErrorMessage from "../CommonComponents/ErrorMessage";
import HelperText from "../CommonComponents/HelperText";
import dateFormat from "dateformat";

const DateRangeElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {
  const { id, value, startDate, endDate , minRange, maxRange, dateFormatStr, disabled, className, readOnly, required, hidden, message , helperText, attributes, labelClassName = ""} = htmlElement;
  const datePickerClassName = className ? className : "form-control form-input-height w-100" ;
  const datePickerFormat = getDateFormatForDatePicker(dateFormatStr ? dateFormatStr : "NORMAL_DATE");
  const [selectedDateRangeFlag, setSelectedDateRangeFlag] = useState(0);
  const ref = useRef(null);
  const getDatesFormat = (dates) => {
    const dateValues = [];
    if (dates[0]) {
      dateValues.push(dates[0].getTime())
    }
    if (dates[1]) {
      dateValues.push(dates[1].getTime())
    }
    return dateValues
  }
  const action = (dates, e) => {
    if (e.type == 'click' || e.type == 'change') {
      setSelectedDateRangeFlag(0);
      e.type = 'change';
      e.target.value = dates ? getDatesFormat(dates) : [];
    }
    const payload = [e, htmlElement, formId];
    observers['ALL'][0][1](payload);
    Object.entries(observers).map(([key, configs]) => {
      if (id == key && key != 'ALL') {
        configs.map(config => {
          const [eve, callBack] = config;
          if (eve == e.type && key != 'ALL') {
            callBack(payload);
          }
        })
      }
    })
  }
  
  const selectDateRange = (noOfDays) =>{
    setSelectedDateRangeFlag(noOfDays);
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(noOfDays ? today.getDate()-(noOfDays-1):today.getDate());
    helpers.updateValue([dateFormat(startDate, 'yyyy-mm-dd 00:00:00'),dateFormat(today, 'yyyy-mm-dd 00:00:00')],id);
    ref.current.state.open = false;
  }
  
  return (
    <React.Fragment>
      {!hidden &&
        <div className={labelClassName}>
          <div className={message ? "is-invalid datepicker-close" : ''}>
            <CommonDatePicker
              selectsRange={true}
              startDate={value && value[0] ? new Date(value[0]) : ''}
              endDate={value && value[0] && value[1] ? new Date(value[1]) : ''}
              dateFormat={datePickerFormat}
              datePickerClassName={message ? `${datePickerClassName} is-invalid` : datePickerClassName}
              handleOnChange={action}
              handleOnFocus={(e)=>action(null,e)}
              handleOnBlur={(e)=>action(null,e)}
              disabled={disabled}
              required={required}
              readOnly={readOnly}
              minDate={minRange ? new Date(minRange) :null}
              maxDate={maxRange ? new Date(maxRange) : null}
              selectDateRange={selectDateRange}
              selectedDateRangeFlag={selectedDateRangeFlag}
              ref = {ref}
              {...attributes}
            />
          </div>
          {message && <ErrorMessage errorMessage={message} />}
          {helperText && !message && <HelperText helperText={helperText} />}
        </div>
      }
    </React.Fragment>
  );

}

export default DateRangeElement;