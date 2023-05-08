import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./styles.css"
import "react-datepicker/dist/react-datepicker.css";    



const DateInput = ({validationMessage="" ,startDate,setStartDate}) => {
 
  return (
    <div className='section-data'>
    <div className={!validationMessage?`inputDiv`:`inputDivInvalid`}>
    <div className="singup-date-picker-wrapper">
    <DatePicker 
    showIcon
    placeholderText="Select a weekday"
    className="singup-date-picker"
    selected={startDate} onChange={(date) => setStartDate(date)} 
     minDate={'01-01-1960'}/>
    </div>
        <br />
    </div>
  </div>
   
  );
};
export default DateInput;