import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import { STRINGS, VALIDATION_MESSAGES } from '../../../Shared/Constants'
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import { isValidEmail, isValidPassword } from '../../../Shared/Utilities'
import { gettingProfilePic, loginData, registerData } from '../../../Redux/Actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import ForgetPassword from '../../Atoms/ForgetPassword'
import Loader from '../../Atoms/Loader'
import PasswordInput from '../PasswordInput'

export default function LoginInputs() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
 
    const [password, setPassword] = useState("")
    const [validationMessageEmail, setValidationMessageEmail] = useState()
    const [validationMessagePassword, setValidationMessagePassword] = useState()
    const [inputType,setInputType]=useState("password")
    const navigate=useNavigate()

    const successLogin=()=>{
        dispatch(gettingProfilePic({}))
        navigate("/")
    }
    const failedLogin=(res)=>{
        setValidationMessagePassword(res)
    }

    const handleSubmit = () => {

        if (!email.trim()) {
            setValidationMessageEmail(VALIDATION_MESSAGES?.EMAIL?.EMPTY)
        }
        if (!password.trim()) {
            setValidationMessagePassword(VALIDATION_MESSAGES?.PASSWORD?.EMPTY)
        }
        else if (!isValidPassword.test(password)) {
            setValidationMessagePassword(VALIDATION_MESSAGES?.PASSWORD?.NOT_VALID)
        }
        else if (!isValidEmail.test(email)) {
            setValidationMessageEmail(VALIDATION_MESSAGES?.EMAIL?.NOT_VALID)
        }
        else {
               
            dispatch(loginData?.signin({email:email,password:password},successLogin,failedLogin))
            
        }
    }
    return (
        <>
               <Header heading={STRINGS?.LOGIN_INPUT_HEADING} />
            <div className='section'>
                <CustomInput state={email} setState={setEmail}  placeHolder="email" validationMessage={validationMessageEmail} setValidationMessage={setValidationMessageEmail} handleSubmit={handleSubmit} />
                <label className='validationMessage'>{validationMessageEmail}</label>
                <CustomInput type={inputType} showEyePicture={true} state={password}       inputType={inputType} setInputType={setInputType} setState={setPassword} placeHolder="password" validationMessage={validationMessagePassword} setValidationMessage={setValidationMessagePassword} handleSubmit={handleSubmit} />
                
                <label className='validationMessage'>{validationMessagePassword}</label>
            </div>
            <ForgetPassword/>
            <ContinueButton handleSubmit={handleSubmit} />
        </>
    )
}
