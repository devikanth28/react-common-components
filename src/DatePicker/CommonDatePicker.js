import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import { Button } from "react-bootstrap";

const CommonDatePicker = React.forwardRef((props, ref) => {

    const { datePickerClassName, selectedDate, handleOnBlur, handleOnChange, handleOnFocus, minDate, maxDate, placeholderText, selectedDateRangeFlag, ...rest } = props;

    const customButtonsContainer = ({ children }) => {
        return (
            <div className="react-datepicker date-range-btn-container d-flex">
                <div style={{ minHeight: "18.1rem" }}>
                    <ul className="list-group border-end h-100">
                        {props.showTodayButton == "true" && <li className={`list-group-item d-flex border-0 border-bottom btn-link pointer p-0`} style={{width: "10rem"}}>
                            <Button variant="" className="text-dark text-start text-truncate font-14 w-100" title="Today" onClick={() => props.selectDateRange(1)}>Today</Button>
                            {selectedDateRangeFlag === 1 && <div class="align-items-center d-flex px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <g id="tickmark_black_icon_18px" transform="translate(-1458 -558)">
                                        <rect id="Rectangle_5706" data-name="Rectangle 5706" width="18" height="18" rx="3" transform="translate(1458 558)" fill="transparent"></rect>
                                        <path id="check" d="M18,6,8.375,15.625,4,11.25" transform="translate(1456 556)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="rgba(0,0,0,0)" stroke="#08ce73"></path>
                                    </g>
                                </svg>
                            </div>}
                        </li>}
                        {props.showLastWeekButton == "true"  && <li className={`list-group-item d-flex border-0 border-bottom btn-link pointer p-0`} style={{width: "10rem"}}>
                            <Button variant="" className="text-dark text-start text-truncate font-14 w-100" title="Last Week" onClick={() => props.selectDateRange(7)}>Last Week</Button>
                            {selectedDateRangeFlag === 7 && <div class="align-items-center d-flex px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <g id="tickmark_black_icon_18px" transform="translate(-1458 -558)">
                                        <rect id="Rectangle_5706" data-name="Rectangle 5706" width="18" height="18" rx="3" transform="translate(1458 558)" fill="transparent"></rect>
                                        <path id="check" d="M18,6,8.375,15.625,4,11.25" transform="translate(1456 556)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="rgba(0,0,0,0)" stroke="#08ce73"></path>
                                    </g>
                                </svg>
                            </div>}
                        </li>}
                        {props.showLast15DaysButton == "true"  && <li className={`list-group-item d-flex border-0 border-bottom btn-link pointer p-0`} style={{width: "10rem"}}>
                            <Button variant="" className="text-dark text-start text-truncate font-14 w-100" title="Last 15 Days" onClick={() => props.selectDateRange(15)}>Last 15 Days</Button>
                            {selectedDateRangeFlag === 15 && <div class="align-items-center d-flex px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <g id="tickmark_black_icon_18px" transform="translate(-1458 -558)">
                                        <rect id="Rectangle_5706" data-name="Rectangle 5706" width="18" height="18" rx="3" transform="translate(1458 558)" fill="transparent"></rect>
                                        <path id="check" d="M18,6,8.375,15.625,4,11.25" transform="translate(1456 556)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="rgba(0,0,0,0)" stroke="#08ce73"></path>
                                    </g>
                                </svg>
                            </div>}
                        </li>}
                        {props.showLast30DaysButton == "true"  && <li className={`list-group-item d-flex border-0 border-bottom btn-link pointer p-0`} style={{width: "10rem"}}>
                            <Button variant="" className="text-dark text-start text-truncate font-14 w-100" title="Last 30 Days" onClick={() => props.selectDateRange(30)}>Last 30 Days</Button>
                            {selectedDateRangeFlag === 30 && <div class="align-items-center d-flex px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <g id="tickmark_black_icon_18px" transform="translate(-1458 -558)">
                                        <rect id="Rectangle_5706" data-name="Rectangle 5706" width="18" height="18" rx="3" transform="translate(1458 558)" fill="transparent"></rect>
                                        <path id="check" d="M18,6,8.375,15.625,4,11.25" transform="translate(1456 556)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="rgba(0,0,0,0)" stroke="#08ce73"></path>
                                    </g>
                                </svg>
                            </div>}
                        </li>}
                    </ul>
                </div>
                <div style={{ position: "relative" }}>
                    <div class="react-datepicker__triangle" style={{ position: "absolute", left: "0px", transform: "translate(171px, 0px)" }}></div>
                    {children}
                </div>
            </div>
        );
    }

    return <React.Fragment>
        <ReactDatePicker
            minDate={minDate}
            maxDate={maxDate}
            calendarContainer={props.showTodayButton ? customButtonsContainer : null}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            placeholderText={placeholderText}
            dropdownMode="select"
            className={datePickerClassName}
            selected={selectedDate}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            isClearable
            ref={ref}            
            {...rest}
        />
    </React.Fragment>

});



export default CommonDatePicker;