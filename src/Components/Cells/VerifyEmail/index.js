import React from "react";
import ModalComponent from "../Modal";
import ContinueButton from "../../Atoms/ContinueButton";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendEmailVerificationstatus } from "../../../Redux/Actions";

export default function VerifyEmail() {
  // const userData=JSON.parse(localStorage.getItem("CurrentUser"))
  const userData = {};
  const dispatch = useDispatch();
  const { emailVerificationId } = useParams();
  const handleSubmit = () => {
    dispatch(
      sendEmailVerificationstatus(
        { email: userData?.email },
        emailVerificationId
      )
    );
  };
  return (
    <ModalComponent show={true}>
      <div className="Container">
        <ContinueButton ButtonText="Verify" handleSubmit={handleSubmit} />
      </div>
    </ModalComponent>
  );
}
