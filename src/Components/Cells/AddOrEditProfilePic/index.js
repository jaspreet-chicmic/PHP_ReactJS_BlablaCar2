import React, { useState } from "react";
import Header from "../../Atoms/Header";
import Button from "../../Atoms/Button";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { gettingProfilePic, uploadProfilePic } from "../../../Redux/Actions";
import { useNavigate } from "react-router-dom";
export default function AddOrEditProfilePic() {
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successImageUpload = () => {
    dispatch(gettingProfilePic({}));
    navigate("/dashboard/profile/menu");
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", image);

    dispatch(uploadProfilePic(formData, successImageUpload));
  };
  return (
    <div>
      <div>
        <Header heading="Don't wear sunglasses, look straight ahead and make sure you're alone."/>
        <div className="ButtonDiv">
          <input
            id="profilePicInput"
            type="file"
            accept="image/*"
            name="image"
            className="inputProfilePicture"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <label className="Button" onClick={handleSubmit}>
            Choose a Picture
          </label>
        </div>
      </div>
    </div>
  );
}
