import React from "react";
import "./styles.css";
import { Images } from "../../../Shared/Images";
import { updateProfile } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";
export default function CustomInput({
  type = "text",
  state = "",
  setState = () => { },
  placeHolder = "",
  validationMessage = "",
  handleSubmit = () => { },
  setValidationMessage = () => { },
  inputType = "",
  inputId,
  showEyePicture = false,
  setInputType = () => { },
  actionName = updateProfile,
  payloadKey = "",
}) {
  const dispatch = useDispatch();

  const handleKey = (e) => {
    if (e.code === "Enter") {
      console.log(e, e.code, "In custom input handleKey");
      handleSubmit();
    }
    if (e.code === "Enter" && inputId === "firstName") {
      document?.getElementById("lastName")?.focus();
    }
  };
  const handleChange = (value) => {
    setState(value);
    // const newObj = {
    //   `${payloadKey}`:
    // }
    // dispatch(actionName({[payloadKey]: value}))
    setValidationMessage("");
  };
  return (

<div className='section-data'>
      <div className={!validationMessage ? `inputDiv` : `inputDivInvalid`}>
        <input id={inputId} className='Input' onKeyDown={handleKey} type={type} placeholder={placeHolder} value={state} onChange={(e) => { handleChange(e.target.value) }} /><br />
        {showEyePicture &&(inputType!=="password"? <img className="closePasswordIcon" src={Images.closeEye} alt="" onClick={()=>{setInputType("password")}}/>: <img className="showPasswordIcon" src={Images.openEye} alt="" onClick={()=>{setInputType("text")}} />)}       
      </div>
    </div>
  );
}
