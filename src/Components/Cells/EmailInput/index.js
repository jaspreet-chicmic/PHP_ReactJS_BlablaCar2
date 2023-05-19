import React, { useState } from "react";
import CustomInput from "../../Atoms/CustomInput";
import ContinueButton from "../../Atoms/ContinueButton";
import Header from "../../Atoms/Header";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { STRINGS, VALIDATION_MESSAGES } from "../../../Shared/Constants";
import { isValidEmail } from "../../../Shared/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { registerData, updateProfile } from "../../../Redux/Actions";
import { STATUS_MESSAGE } from "../../../Services/Java_Api/Constants";
export default function EmailInput() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState();
  const navigate = useNavigate();
  const userSavedData = useSelector((state) => state.registerReducer);

  const handleSubmit = () => {
    if (!email.trim()) {
      setValidationMessage(VALIDATION_MESSAGES?.EMAIL?.EMPTY);
    } else if (!isValidEmail.test(email)) {
      setValidationMessage(VALIDATION_MESSAGES?.EMAIL?.NOT_VALID);
    } else {
      //call api
      dispatch(registerData?.emailVerification(email));
      if (userSavedData?.payload === STATUS_MESSAGE.FORBIDDEN)
        navigate("/login");
      else {
        dispatch(registerData?.email(email));
        navigate("/register/name");
      }
      // dispatch(registerData?.email(email))
      // registerDataState?.emailStatus !== "exists" &&
      console.log("email status", userSavedData);
    }
  };

  return (
    <>
      <Header heading={STRINGS?.EMAIL_HEADING} />
      <div className="section">
        <CustomInput
          state={email}
          setState={setEmail}
          placeHolder="email"
          validationMessage={validationMessage}
          setValidationMessage={setValidationMessage}
          handleSubmit={handleSubmit}
        />
        <label className="validationMessage">{validationMessage}</label>
      </div>
      <ContinueButton handleSubmit={handleSubmit} />
    </>
  );
}
