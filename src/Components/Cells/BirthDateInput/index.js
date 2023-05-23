import React, { useRef, useState } from "react";
import Header from "../../Atoms/Header";
import CustomInput from "../../Atoms/CustomInput";
import Button from "../../Atoms/Button";
import { useNavigate } from "react-router-dom";
import { STRINGS } from "../../../Shared/Constants";
import DateInput from "../../Atoms/DateInput";
import { registerData } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";
import { GET_DATE_TEN_YEARS_AGO } from "../../../Shared/Utilities";

export default function BirthDateInput() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(GET_DATE_TEN_YEARS_AGO());
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(registerData?.date(startDate.toLocaleString().split(",")[0]));
    navigate("/register/gender");
  };
  
  return (
    <>  
      <Header heading={STRINGS?.BIRTHDATE_HEADING} />
      <div className="section">
        <DateInput startDate={startDate} setStartDate={setStartDate} />
      </div>
      <Button handleSubmit={handleSubmit} />
    </>
  );
}
