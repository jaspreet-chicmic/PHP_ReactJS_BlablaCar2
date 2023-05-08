import React, { useState } from 'react'
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import Header from '../../Atoms/Header'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
import { STRINGS, VALIDATION_MESSAGES } from '../../../Shared/Constants'
import { isValidEmail } from '../../../Shared/Utilities'
import { useDispatch } from 'react-redux'
import { registerData } from '../../../Redux/Actions'
export default function EmailInput() {
    const dispatch=useDispatch()
    const [email, setEmail] = useState("")
    const [validationMessage, setValidationMessage] = useState()
    const navigate = useNavigate()
 
    const handleSubmit = () => {
        if (!email.trim()) {
            setValidationMessage(VALIDATION_MESSAGES?.EMAIL?.EMPTY)
        }
        else if (!isValidEmail.test(email)) {
            setValidationMessage(VALIDATION_MESSAGES?.EMAIL?.NOT_VALID)
        }
        else {
             dispatch(registerData?.email(email))
            navigate("/register/name")
        }
    }

    return (
        <>
            <Header heading={STRINGS?.EMAIL_HEADING} />
            <div className='section'>
                <CustomInput state={email} setState={setEmail} placeHolder="email" validationMessage={validationMessage} setValidationMessage={setValidationMessage} handleSubmit={handleSubmit} />
                <label className='validationMessage'>{validationMessage}</label>
            </div>
            <ContinueButton handleSubmit={handleSubmit} />
        </>
    )
}
