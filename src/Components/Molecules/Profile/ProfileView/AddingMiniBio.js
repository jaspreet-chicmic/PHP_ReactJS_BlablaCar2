import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import { STRINGS, VALIDATION_MESSAGES } from '../../../../Shared/Constants'
import ModalComponent from '../../../Cells/Modal'
import ContinueButton from '../../../Atoms/ContinueButton'
import { useDispatch } from 'react-redux'
import { addingBio } from '../../../../Redux/Actions'
import ValidationText from '../../../Atoms/ValidationText'

export default function AddingMiniBio({ show, setShow = () => { } }) {
  const [bio, setBio] = useState("")
  const dispatch = useDispatch()
  const [bioValidationMessage, setBioValidationMessage] = useState("")
  const handleSubmit = () => {
    if (bio.trim().length < 15 || bio.split("").some(val => !isNaN(val))) {
      setBioValidationMessage(VALIDATION_MESSAGES?.BIO)
    }
    else {
      dispatch(addingBio({ bio: bio }))
      setShow(false)
    }
  }
  return (
    <ModalComponent show={show} setShow={setShow}>
      <Header heading={STRINGS?.MINI_BIO_HEADING} />
      <div>

        <textarea className='miniBioInput' value={bio} onChange={(e) => {
          setBio(e.target.value)
          setBioValidationMessage("")
        }} placeholder='example:I love travelling!!' />
      </div>
      <ValidationText message={bioValidationMessage} />

      <ContinueButton ButtonText='save' handleSubmit={handleSubmit} />
    </ModalComponent>
  )
}
