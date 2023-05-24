import React from "react";
import ModalComponent from "../Modal";
import Button from "../../Atoms/Button";
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
        <Button ButtonText="Verify" handleSubmit={handleSubmit} />
      </div>
    </ModalComponent>
  );
}
