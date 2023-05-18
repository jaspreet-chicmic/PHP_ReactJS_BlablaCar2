import React from "react";
import { Images } from "../../Shared/Images";
import "./styles.css";

import SelectTrip from "../../Components/Molecules/SelectTrip";
export default function Home() {
  return (
    <div className="homeContent">
      <div className="foreGroundContentDiv">
        <div className="foreGroundContent">
          <div className="foreGroundHeading">
            <h1 className="homeLabel">Your pick of rides at low prices</h1>
            <SelectTrip />
          </div>
        </div>
      </div>
      <img
        className="homeBackgroundImg"
        src={Images.homeBackground}
        alt=""
      ></img>
    </div>
  );
}
