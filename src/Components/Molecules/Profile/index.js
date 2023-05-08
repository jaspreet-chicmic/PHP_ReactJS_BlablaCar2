import React, { useState } from 'react'
import "./styles.css"
import NameAndProfilePicView from './ProfileView'
import EditPersonalDetails from './ProfileView/EditPersonalDetails'
import AddingMiniBio from './ProfileView/AddingMiniBio'
import AccountDetailsUpdate from './AccountView/index.js'
import EmailVerificationLinkModal from './ProfileView/EmailVerificationLinkModal'
export default function Profile() {
    const [selectedOptionOne, setSelectedOptionOne] = useState(true)
    const [selectedOptionTwo, setSelectedOptionTwo] = useState(false)
    const [showEditPersonalDetails, setShowEditPersonalDetails] = useState(false)
    const [showMiniBio, setShowMiniBio] = useState(false)
    const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(false)
    return (
        <div className='profile-section'>
            <div className='profileWrapper'>
                <div className='profileContainer'>
                    <div className='profileHeading'>
                        <div className='profileHeadingData'>
                            <button className={!selectedOptionOne ? `profileHeadingButton` : `profileHeadingButtonSelected`} onClick={() => {
                                setSelectedOptionOne(true)
                                setSelectedOptionTwo(false)
                            }}>
                                <span className='profileHeadingSpan'>About you</span>
                            </button>
                        </div>
                        <div className='profileHeadingData' >
                            <button className={!selectedOptionTwo ? `profileHeadingButton` : `profileHeadingButtonSelected`} onClick={() => {
                                setSelectedOptionTwo(true)
                                setSelectedOptionOne(false)
                            }}>
                                <span className='profileHeadingSpan'>Account</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='profileBody'>
                <div className='profileContent'>
                    {selectedOptionOne && <NameAndProfilePicView setShowEditPersonalDetails={setShowEditPersonalDetails} setShowMiniBio={setShowMiniBio}  setShowEmailVerificationModal={setShowEmailVerificationModal}/>}
                    {selectedOptionTwo && <AccountDetailsUpdate />}
                </div>
            </div>
            <EditPersonalDetails show={showEditPersonalDetails} setShow={setShowEditPersonalDetails} />
            <AddingMiniBio show={showMiniBio} setShow={setShowMiniBio} />
            <EmailVerificationLinkModal show={showEmailVerificationModal} setShow={setShowEmailVerificationModal}/> 
        </div>
    )
}
