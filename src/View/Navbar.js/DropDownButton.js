import React, { useEffect } from 'react'
import { Images } from '../../Shared/Images'
import { useDispatch, useSelector } from 'react-redux'
import { gettingProfilePic } from '../../Redux/Actions'


export default function NavContent({handleDropDownIconPosition=()=>{},dropDownIconPosition}) {
  const dispatch = useDispatch()
  const token=localStorage.getItem("token")
  useEffect(()=>{   dispatch(gettingProfilePic())},[token])
  const userData=JSON.parse(localStorage.getItem(("CurrentUser")))
  const profilePic=useSelector(state=>state?.profilePicReducer)
  return (
    <div className='navContent'>
    <button className='navDropDown' onClick={() => { handleDropDownIconPosition() }}>
    {userData&& <label className='userName'>{userData?.first_name}</label>}
        <div className='profileOptions'>
            {token&&profilePic?<img className='profileImg' src={profilePic} alt=""></img>:<img className='profileImg' src={Images?.profile} alt=""></img>}
        </div>
        <img className={dropDownIconPosition} src={Images?.upsideArrow} alt="" ></img>
    </button>
</div>
  )
}
