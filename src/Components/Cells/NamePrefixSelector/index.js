import React from "react";
import Header from "../../Atoms/Header";
import "./styles.css";
import CustomLinkListCreator from "../../Atoms/CustomLinkListCreator";
import { NAME_PREFIXES, STRINGS } from "../../../Shared/Constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerData } from "../../../Redux/Actions";

export default function NamePrefixSelector() {
  const namePrefixes = [
    NAME_PREFIXES.FEMALE,
    NAME_PREFIXES.MALE,
    NAME_PREFIXES.NEITHER,
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSelect = (val) => {
    dispatch(registerData?.nameTitle(val));
    navigate("/register/password");
  };

  return (
    <div className="section-content">
      <Header heading={STRINGS?.GENDER_SELECT_HEADING} />
      {namePrefixes.map((val, i) => (
        <CustomLinkListCreator linkText={val} handleSelect={handleSelect} />
      ))}
    </div>
  );
}
