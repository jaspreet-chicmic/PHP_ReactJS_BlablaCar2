import React from "react";
import "./styles.css";
export default function Button({
  handleSubmit = () => {},
  ButtonText = "Continue",
}) {
  return (
    <div className="ButtonDiv">
      <button className="Button" onClick={handleSubmit}>
        {ButtonText}
      </button>
    </div>
  );
}
