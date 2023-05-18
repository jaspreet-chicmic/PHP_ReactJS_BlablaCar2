import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { Images } from "../../../Shared/Images";

import { LOCALSTORAGE_KEY_NAME } from "../../../Shared/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  profile,
  registerData,
  settingLoaderState,
} from "../../../Redux/Actions";
import { saveUserDataReducer } from "../../../Redux/Reducer/saveUserDataReducer";

export default function CustomLinkListCreator({
  profileViewLink = false,
  pic = false,
  route,
  linkText,
  setDropDownListShow = () => {},
  setDropDownIconPosition = () => {},
  handleSelect = () => {},
  profilePic,
}) {
  const dispatch = useDispatch();
  const profileRed = useSelector((state) => state.saveUserDataReducer);

  const handleClick = () => {
    handleSelect(linkText);
    if (linkText === "Logout") {
      // dispatch(settingLoaderState(true))
      console.log("in logout");
      // dispatch(profile?.logout())
      dispatch(registerData?.logout());

      dispatch(registerData?.clearPayload());
      dispatch(profile?.logout());
      // localStorage.clear(LOCALSTORAGE_KEY_NAME)
      // setTimeout(() => { dispatch(settingLoaderState(false)) }, [100])
    }
  };

  return (
    <>
      <ul
        className={!profileViewLink ? `links` : `profilelinks`}
        onClick={() => {
          handleClick();
        }}
      >
        <li
          className={!profileViewLink ? `linksList` : `profilelinksList`}
          onClick={() => {
            setDropDownListShow(false);
            setDropDownIconPosition("dropDownIconDown");
          }}
        >
          <Link
            className={!profileViewLink ? `linkTo` : `profilelinkTo`}
            to={route}
          >
            <span className={!profileViewLink ? `linkText` : `profilelinkText`}>
              {linkText || profileRed?.firstName}
            </span>
            {pic && (
              <div className="profilePicDiv">
                <img
                  className="profilePic"
                  src={profilePic || Images.profile}
                  alt=""
                />
              </div>
            )}
            <span className="linkIcon">
              <img src={Images.rightArrow} alt=""></img>
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
}
