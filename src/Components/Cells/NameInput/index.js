import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
import { STRINGS, VALIDATION_MESSAGES } from '../../../Shared/Constants'
import { isValidName } from '../../../Shared/Utilities'
import { registerData } from '../../../Redux/Actions'
import { useDispatch } from 'react-redux'
export default function NameInput() {
  const dispatch=useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [validationMessageFirstName, setValidationMessageFirstName] = useState()
    const [validationMessageLastName, setValidationMessageLastName] = useState()
    const navigate=useNavigate()
    const handleSubmit = () => { 
      if (!firstName.trim()) {
        setValidationMessageFirstName(VALIDATION_MESSAGES?.FIRST_NAME?.EMPTY)
    }
    if (!lastName.trim()) {
      setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.EMPTY)
  }

    else if (!isValidName.test(firstName)) {
      setValidationMessageFirstName(VALIDATION_MESSAGES?.FIRST_NAME?.NOT_VALID)
    }
    else if (!isValidName.test(lastName)) {
      setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.NOT_VALID)
    }
    
    else {
      dispatch(registerData?.firstName(firstName))
      dispatch(registerData?.lastName(lastName))
      navigate("/register/birthDate")
    }
    }
      
      
      
  return (
    <>
    <Header heading={STRINGS?.NAME_HEADING} />
  <div className='section'>
      <CustomInput state={firstName} setState={setFirstName} placeHolder="firstName" validationMessage={validationMessageFirstName} setValidationMessage={setValidationMessageFirstName} handleSubmit={handleSubmit} inputType={"firstName"}/>
      <label className='validationMessage'>{validationMessageFirstName}</label>
      <CustomInput state={lastName} setState={setLastName} placeHolder="lastName" validationMessage={validationMessageLastName} setValidationMessage={setValidationMessageLastName} handleSubmit={handleSubmit} inputType={"lastName"}/>
      <label className='validationMessage'>{validationMessageLastName}</label>
  </div>
  <ContinueButton handleSubmit={handleSubmit} />
</>
  )
}
