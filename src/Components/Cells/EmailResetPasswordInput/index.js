import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import { STRINGS, VALIDATION_MESSAGES } from '../../../Shared/Constants'
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import { isValidEmail, isValidPassword } from '../../../Shared/Utilities'
import { loginData, registerData, sendPasswordResetMail } from '../../../Redux/Actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ForgetPassword from '../../Atoms/ForgetPassword'

export default function LoginForgetPassword() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [validationMessageEmail, setValidationMessageEmail] = useState()
    const navigate = useNavigate()
    const handleSubmit = () => {
        if (!email.trim()) {
            setValidationMessageEmail(VALIDATION_MESSAGES?.EMAIL?.EMPTY)
        }
        else if (!isValidEmail.test(email)) {
            setValidationMessageEmail(VALIDATION_MESSAGES?.EMAIL?.NOT_VALID)
        }
        else {
            dispatch(sendPasswordResetMail({ email: email }))
            // navigate("/")
        }
    }
    return (
        <>
            <Header heading={STRINGS?.FORGOT_PASSWORD} />
            <div className='section'>
                <CustomInput state={email} setState={setEmail} placeHolder="email" validationMessage={validationMessageEmail} setValidationMessage={setValidationMessageEmail} handleSubmit={handleSubmit} />
                <label className='validationMessage'>{validationMessageEmail}</label>
            </div>
            <ContinueButton handleSubmit={handleSubmit} />
        </>
    )
}
