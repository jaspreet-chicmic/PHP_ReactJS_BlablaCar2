import React, { useEffect } from "react";
import { Images } from "../../Shared/Images";
import { useDispatch, useSelector } from "react-redux";
import { gettingProfilePic } from "../../Redux/Actions";

export default function NavContent({
  handleDropDownIconPosition = () => {},
  dropDownIconPosition,
}) {
  const profile = useSelector((state) => state.saveUserDataReducer);
  const dispatch = useDispatch();
  const userDataRed = useSelector((state) => state.saveUserDataReducer);
  const token = userDataRed.token;
  // useEffect(()=>{   dispatch(gettingProfilePic())},[token])
  // const userData=JSON.parse(localStorage.getItem(("CurrentUser")))
  const profilePic = useSelector((state) => state?.profilePicReducer);
  return (
    <div className="navContent">
      <button
        className="navDropDown"
        onClick={() => {
          handleDropDownIconPosition();
        }}
      >
        {profile?.firstName && (
          <label className="userName">{profile?.firstName}</label>
        )}
        <div className="profileOptions">
          {token && profilePic ? (
            <img className="profileImg" src={profilePic} alt=""></img>
          ) : (
            <img className="profileImg" src={Images?.profile} alt=""></img>
          )}
        </div>
        <img
          className={dropDownIconPosition}
          src={Images?.upsideArrow}
          alt=""
        ></img>
      </button>
    </div>
  );
}
