import React, { useState } from 'react'
import Header from '../../Atoms/Header'

import CustomInput from '../../Atoms/CustomInput'
import { useLocation, useNavigate } from 'react-router-dom'
import ContinueButton from '../../Atoms/ContinueButton'
import { STRINGS, VALIDATION_MESSAGES } from '../../../Shared/Constants'
import { isValidPassword } from '../../../Shared/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { registerData, sendResetPassword } from '../../../Redux/Actions'
export default function ResetPassword() {
  const dispatch=useDispatch()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('reset_password_token');
  console.log(token,"token")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const [passwordValidationMessage, setPasswordValidationMessage] = useState()
    const [repasswordValidationMessage, setRepasswordValidationMessage] = useState()
   
    const navigate=useNavigate()
    const handleSubmit = () => {
      if (!password.trim()) {
        setPasswordValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.EMPTY)
    }
    else if (!isValidPassword.test(password)) {
        setPasswordValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.NOT_VALID)
    }
    if (!repassword.trim()) {
        setRepasswordValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.EMPTY)
    }
    else if (!isValidPassword.test(repassword)) {
        setRepasswordValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.NOT_VALID)
    }
    else if(password!==repassword){
      setRepasswordValidationMessage("password not match")
    }
    else {
          dispatch(sendResetPassword({
             "reset_password_token": token,
      "password": password,
      "password_confirmation": repassword}))
      }
    }
  return (
    <div className='section-content'>
     <Header heading={STRINGS.RESET_PASSWORD}></Header>
     <div className='passwordFillingMessageDiv'>
  <span className='passwordFillingMessage'>It must have at least 8 characters, 1 letter, 1 number and 1 special character.</span>
     </div>
    
     <CustomInput type="password" state={password} setState={setPassword} placeHolder='Enter password' validationMessage={passwordValidationMessage} setValidationMessage={setPasswordValidationMessage}/>
     <label className='validationMessage'>{passwordValidationMessage}</label>
     <CustomInput type="password" state={repassword} setState={setRepassword} placeHolder='ReEnter password' validationMessage={repasswordValidationMessage} setValidationMessage={setRepasswordValidationMessage}/>
     <label className='validationMessage'>{repasswordValidationMessage}</label>
     <ContinueButton handleSubmit={handleSubmit} />
    </div>
  )
}
