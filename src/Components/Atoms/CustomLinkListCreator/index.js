import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./styles.css"
import { Images } from '../../../Shared/Images'

import { LOCALSTORAGE_KEY_NAME } from '../../../Shared/Constants'
import { useDispatch } from 'react-redux'
import { settingLoaderState } from '../../../Redux/Actions'
export default function CustomLinkListCreator({ profileViewLink = false, pic = false, route, linkText, setDropDownListShow = () => { }, setDropDownIconPosition = () => { }, handleSelect = () => { }, profilePic }) {
    const dispatch = useDispatch()


    const handleClick = () => {
        handleSelect(linkText)
        if (linkText === "Logout") {
            dispatch(settingLoaderState(true))
            localStorage.clear(LOCALSTORAGE_KEY_NAME)
            setTimeout(() => { dispatch(settingLoaderState(false)) }, [100])
        }
    }


    return (
        <>
            <ul className={!profileViewLink ? `links` : `profilelinks`} onClick={() => { handleClick() }} >
                <li className={!profileViewLink ? `linksList` : `profilelinksList`} onClick={() => {
                    setDropDownListShow(false)
                    setDropDownIconPosition("dropDownIconDown")
                }}>
                    <Link className={!profileViewLink ? `linkTo` : `profilelinkTo`} to={route}>
                        <span className={!profileViewLink ? `linkText` : `profilelinkText`}>
                            {linkText}
                        </span>
                        {pic && <div className="profilePicDiv">
                            {profilePic ? <img className='profilePic' src={profilePic} alt=""></img> : <img className='profilePic' src={Images.profile} alt=""></img>}
                        </div>}
                        <span className="linkIcon">
                            <img src={Images.rightArrow} alt=""></img>
                        </span>
                    </Link>

                </li>
            </ul>
        </>
    )
}
