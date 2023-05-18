import React, { useState } from "react";
import "./styles.css";
import { Images } from "../../Shared/Images";
import { useLocation, useNavigate } from "react-router-dom";
import DropDownListViewer from "../../Components/Atoms/DropDownListViewer";
import NavContent from "./DropDownButton";

import Linkto from "../../Components/Atoms/LinkTo";
import { useSelector } from "react-redux";
export default function Navbar() {
  const navigate = useNavigate();
  const currentPath = useLocation();
  const userDataRed = useSelector((state) => state.saveUserDataReducer);
  const token = userDataRed.token;
  console.log(token, "token");
  const [dropDownIconPosition, setDropDownIconPosition] =
    useState("dropDownIconDown");
  const [dropDownListShow, setDropDownListShow] = useState(false);
  const dropDownListDataForGuest = [
    { linkText: "Log in ", route: "/login" },
    { linkText: "Sign up", route: "/register" },
  ];
  const dropDownListDataForUser = [
    { linkText: "Your Rides", route: "/rides" },
    { linkText: "Inbox", route: "/messages/list" },
    { linkText: "Profile", route: "/dashboard/profile/menu" },
    { linkText: "Logout", route: "/" },
  ];
  const handleDropDownIconPosition = () => {
    if (dropDownIconPosition === "dropDownIconDown") {
      setDropDownIconPosition("dropDownIconUp");
      setDropDownListShow(true);
    } else {
      setDropDownIconPosition("dropDownIconDown");
      setDropDownListShow(false);
    }
  };
  return (
    <div className="header">
      <div className="header-content">
        <div className="headerData">
          <span className="Logo">
            <img
              src={Images.blablacarLogo}
              alt="BlaBlaCar"
              onClick={() => {
                navigate("/");
              }}
            ></img>
          </span>
        </div>
        {(!currentPath?.pathname?.includes("register") || token) && (
          <Linkto linkText={"Publish a ride"} />
        )}
        {(!currentPath?.pathname?.includes("register") || token) && (
          <NavContent
            handleDropDownIconPosition={handleDropDownIconPosition}
            dropDownIconPosition={dropDownIconPosition}
          />
        )}
        {dropDownListShow && (
          <DropDownListViewer
            dropDownListData={
              !token ? dropDownListDataForGuest : dropDownListDataForUser
            }
            setDropDownListShow={setDropDownListShow}
            setDropDownIconPosition={setDropDownIconPosition}
          />
        )}
      </div>
    </div>
  );
}
