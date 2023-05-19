import React, { useState } from "react";
import ModalComponent from "../../../Cells/Modal";
import Header from "../../../Atoms/Header";
import "../styles.css";
import CustomInput from "../../../Atoms/CustomInput";
import ContinueButton from "../../../Atoms/ContinueButton";
import {
  PLACEHOLDERS,
  VALIDATION_MESSAGES,
  VALIDATION_TYPE,
} from "../../../../Shared/Constants";
import { isValidEmail, isValidName } from "../../../../Shared/Utilities";
import DateInput from "../../../Atoms/DateInput";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../../Redux/Actions";
import ValidationText from "../../../Atoms/ValidationText";
import { useNavigate } from "react-router-dom";
export default function EditPersonalDetails({ show, setShow = () => { } }) {
  const userDataRed = useSelector((state) => state.saveUserDataReducer);
  const registerDataRed = useSelector((state) => state.registerReducer);

  // const userData = JSON.parse(localStorage.getItem("CurrentUser"));
  const [firstName, setFirstName] = useState(userDataRed?.firstName || "");
  const [lastName, setLastName] = useState(userDataRed?.lastName || "");
  const [dob, setDob] = useState(new Date(userDataRed?.dob));
  const [gender, setGender] = useState(userDataRed?.gender || registerDataRed?.gender || "");
  const [email, setEmail] = useState(userDataRed?.email || "");
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [validationMessageFirstName, setValidationMessageFirstName] = useState();
  const [validationMessageLastName, setValidationMessageLastName] = useState();
  const [validationMessageDOB, setValidationMessageDOB] = useState();
  const [validationMessageGender, setValidationMessageGender] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!email.trim()) {
      setEmailValidationMessage(VALIDATION_MESSAGES?.EMAIL?.EMPTY);
    } else if (!isValidEmail.test(email)) {
      setEmailValidationMessage(VALIDATION_MESSAGES?.EMAIL?.NOT_VALID);
    }
    if (!firstName.trim()) {
      setValidationMessageFirstName(VALIDATION_MESSAGES?.FIRST_NAME?.EMPTY);
    }
    if (!lastName.trim()) {
      setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.EMPTY);
    } else if (!isValidName.test(firstName)) {
      setValidationMessageFirstName(VALIDATION_MESSAGES?.FIRST_NAME?.NOT_VALID);
    } else if (!isValidName.test(lastName)) {
      setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.NOT_VALID);
    } else {
      // const myData = JSON.parse(localStorage.getItem('CurrentUser'));
      // myData.email=email
      // myData.firstName=firstName
      // myData.lastName=lastName
      // myData.dob=dob.toLocaleString().split(",")[0]
      // myData.title=gender
      // localStorage.setItem("CurrentUser",JSON.stringify(myData))
      dispatch(
        updateProfile({
          email: email,
          firstName: firstName,
          lastName: lastName,
          dob: dob.toLocaleString().split(",")[0],
          gender: gender,
          phoneNumber: ""
        })
      );
      setShow(false);
    }
  };

  console.log(userDataRed, " saveUserDataReducer");
  return (
    <ModalComponent show={show} setShow={setShow}>
      <Header heading={"Personal details"} />
      <div className="section-content">
        <div className="FillingMessageDiv">
          <span className="FillingMessage">First Name</span>
        </div>
        <CustomInput
          validationType={VALIDATION_TYPE.NAME}
          state={userDataRed?.firstName}
          setState={setFirstName}
          actionName={updateProfile}
          payloadKey="firstName"
          validationMessage={validationMessageFirstName}
          setValidationMessage={setValidationMessageFirstName}
          placeHolder={PLACEHOLDERS.FIRST_NAME}
        />
        <ValidationText message={validationMessageFirstName} />
        <div className="FillingMessageDiv">
          <span className="FillingMessage">{PLACEHOLDERS.LAST_NAME}</span>
        </div>
        <CustomInput
          validationType={VALIDATION_TYPE.NAME}
          state={userDataRed?.lastName}
          setState={setLastName}
          actionName={updateProfile}
          payloadKey="secondName"
          validationMessage={validationMessageLastName}
          setValidationMessage={setValidationMessageLastName}
          placeHolder={PLACEHOLDERS.LAST_NAME}
        />
        <ValidationText message={validationMessageLastName} />
        <div className="FillingMessageDiv">
          <span className="FillingMessage">{PLACEHOLDERS.GENDER}</span>
        </div>
        <CustomInput
          state={userDataRed?.gender || registerDataRed?.gender}
          setState={setGender}
          actionName={updateProfile}
          payloadKey="gender"
          validationMessage={validationMessageGender}
          setValidationMessage={setValidationMessageGender}
          placeHolder={PLACEHOLDERS.GENDER}
        />
        <ValidationText message={validationMessageGender} />

        <div className="FillingMessageDiv">
          <span className="FillingMessage">{PLACEHOLDERS.DOB}</span>
        </div>
        {/* <DateInput startDate={dob} setStartDate={setDob}  setValidationMessageDOB={setValidationMessageDOB}/>
        <ValidationText message={validationMessageDOB} /> */}
        <div className="FillingMessageDiv">
          <span className="FillingMessage">{PLACEHOLDERS.EMAIL_ADDRESS}</span>
        </div>
        <CustomInput
          validationType={VALIDATION_TYPE.EMAIL}
          state={userDataRed?.email}
          setState={setEmail}
          actionName={updateProfile}
          payloadKey="email"
          validationMessage={emailValidationMessage}
          setValidationMessage={setEmailValidationMessage}
          placeHolder={PLACEHOLDERS.EMAIL_ADDRESS}
        />
        <ValidationText message={emailValidationMessage} />
      </div>
      <ContinueButton ButtonText="Update" handleSubmit={() => handleSubmit()} />
    </ModalComponent>
  );
}
