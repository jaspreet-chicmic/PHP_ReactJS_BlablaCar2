import React, { useEffect, useState } from "react";
import CustomLinkListCreator from "../../../Atoms/CustomLinkListCreator";
import Linkto from "../../../Atoms/LinkTo";
import "../styles.css";
import PathTo from "../../../Atoms/PathTo";

import { useDispatch, useSelector } from "react-redux";
import { getVehicleData } from "../../../../Redux/Actions";

export default function NameAndProfilePicView({
  setShowEditPersonalDetails = () => {},
  setShowMiniBio = () => {},
  setShowEmailVerificationModal,
}) {
  const userData = JSON.parse(localStorage.getItem("CurrentUser"));
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(gettingProfilePic({}))
    // dispatch(getVehicleData({}))
  }, []);
  const StoreData = useSelector((state) => state);

  const handleSelect = () => {};
  return (
    <div className="profile">
      <div className="profileMain">
        <CustomLinkListCreator
          pic={true}
          profileViewLink={true}
          linkText={userData?.firstName}
          handleSelect={handleSelect}
          profilePic={StoreData?.profilePicReducer}
        />
        <Linkto
          linkText="Add profile picture"
          route="/dashboard/profile/picture"
        />
        <PathTo
          linkText="Edit Personal Details"
          picNeeded={false}
          setShow={setShowEditPersonalDetails}
        />
      </div>
      <div className="profileMain">
        <h1 className="headingData">Verify Your Profile</h1>
        <PathTo
          linkText={`Confirm email ${userData?.email}`}
          setShow={setShowEmailVerificationModal}
        />
      </div>
      <div className="profileMain">
        <h1 className="headingData">About You</h1>
        <PathTo linkText="Add a mini bio" setShow={setShowMiniBio} />
      </div>
      <div className="profileMain">
        <h1 className="headingData">Vehicles</h1>

        {Object.values(StoreData?.vehicleDataReducer)?.map((val) => (
          <div>
            <CustomLinkListCreator
              linkText={`VehicleName : ${val?.vehicle_name}  
                                    VehicleColor :${val?.vehicle_color}`}
              route={`/dashboard/profile/vehicle/${val?.id}`}
            />
          </div>
        ))}

        <Linkto linkText="Add vehicle" route="/dashboard/profile/vehicle/add" />
      </div>
    </div>
  );
}
