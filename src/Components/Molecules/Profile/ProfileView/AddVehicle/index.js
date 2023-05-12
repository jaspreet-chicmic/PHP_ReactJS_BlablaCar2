import React, { useState } from 'react'
import Header from '../../../../Atoms/Header'
import { REGEX, STRINGS, VALIDATION_MESSAGES } from '../../../../../Shared/Constants'
import CustomInput from '../../../../Atoms/CustomInput'
import ContinueButton from '../../../../Atoms/ContinueButton'
import ValidationText from '../../../../Atoms/ValidationText'
import { isValidName, isValidNumber, isValidNumberAndText } from '../../../../../Shared/Utilities'
import { useDispatch } from 'react-redux'
import { addVehicleData } from '../../../../../Redux/Actions'
import { useNavigate } from 'react-router-dom'

export default function AddVehicleDetails() {
  const [country, setCountry] = useState("")
  const [countryValidationMessage, setCountryValidationMessage] = useState()
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [vehicleNumberValidationMessage, setVehicleNumberValidationMessage] = useState()
  const [vehicleBrand, setVehicleBrand] = useState("")
  const [vehicleBrandValidationMessage, setVehicleBrandValidationMessage] = useState()
  const [vehicleName, setVehicleName] = useState("")
  const [vehicleNameValidationMessage, setVehicleNameValidationMessage] = useState()
  const [vehicleType, setVehicleType] = useState("")
  const [vehicleTypeValidationMessage, setVehicleTypeValidationMessage] = useState()
  const [vehicleColor, setVehicleColor] = useState("")
  const [vehicleColorValidationMessage, setVehicleColorValidationMessage] = useState()
  const [vehicleModelYear, setVehicleModelYear] = useState("")
  const [vehicleModelYearValidationMessage, setVehicleModelYearValidationMessage] = useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()
const navigateToProfile=(res)=>{
  navigate("/dashboard/profile/menu")
}

  const handleSubmit = () => {
    if( !country.trim()){
      setCountryValidationMessage(VALIDATION_MESSAGES?.COUNTRY?.EMPTY)
    }
     if( !vehicleBrand.trim()  ){
      setVehicleBrandValidationMessage(VALIDATION_MESSAGES?.VEHICLEBRAND?.EMPTY)
    }
     if( !vehicleName.trim() ){
      setVehicleNameValidationMessage(VALIDATION_MESSAGES?.VEHICLENAME?.EMPTY)
    }
    if(   !vehicleNumber.trim() ){
    setVehicleNumberValidationMessage(VALIDATION_MESSAGES?.VEHICLENUMBER?.EMPTY)
   }
    if(   !vehicleType.trim() ){
    setVehicleTypeValidationMessage(VALIDATION_MESSAGES?.VEHICLETYPE?.EMPTY)
   }
    if(   !vehicleColor.trim() ){
    setVehicleColorValidationMessage(VALIDATION_MESSAGES?.VEHICLECOLOR?.EMPTY)
   }
   if( !vehicleModelYear.trim() ){
    setVehicleModelYearValidationMessage(VALIDATION_MESSAGES?.VEHICLEMODELYEAR?.EMPTY)
   }
  else{

    dispatch(addVehicleData({country:country,vehicle_number:vehicleNumber,vehicle_brand : vehicleBrand,vehicle_name: vehicleName,vehicle_type : vehicleType,vehicle_color : vehicleColor,vehicle_model_year : vehicleModelYear},navigateToProfile))
   
  }
}
  return (
    <div>
      <Header heading={STRINGS?.ADDING_VEHICLE_DETAILS} />
      <div className='section-content'>
        <CustomInput placeHolder='country' state={country} setState={setCountry} validationMessage={countryValidationMessage} setValidationMessage={setCountryValidationMessage} />
        <ValidationText message={countryValidationMessage} />
        <CustomInput placeHolder='vehicle_number' state={vehicleNumber} setState={setVehicleNumber} validationMessage={vehicleNumberValidationMessage} setValidationMessage={setVehicleNumberValidationMessage} />
        <ValidationText message={vehicleNumberValidationMessage} />
        <CustomInput placeHolder='vehicle_brand' state={vehicleBrand} setState={setVehicleBrand} validationMessage={vehicleBrandValidationMessage} setValidationMessage={setVehicleBrandValidationMessage} />
        <ValidationText message={vehicleBrandValidationMessage} />
        <CustomInput placeHolder='vehicle_name' state={vehicleName} setState={setVehicleName} validationMessage={vehicleNameValidationMessage} setValidationMessage={setVehicleNameValidationMessage} />
        <ValidationText message={vehicleNameValidationMessage} />
        <CustomInput placeHolder='vehicle_type' state={vehicleType} setState={setVehicleType} validationMessage={vehicleTypeValidationMessage} setValidationMessage={setVehicleTypeValidationMessage} />
        <ValidationText message={vehicleTypeValidationMessage} />
        <CustomInput placeHolder='vehicle_color' state={vehicleColor} setState={setVehicleColor} validationMessage={vehicleColorValidationMessage} setValidationMessage={setVehicleColorValidationMessage} />
        <ValidationText message={vehicleColorValidationMessage} />
        <CustomInput type={"number"} placeHolder='vehicle_model_year' state={vehicleModelYear} setState={setVehicleModelYear} validationMessage={vehicleModelYearValidationMessage} setValidationMessage={setVehicleModelYearValidationMessage} />
        <ValidationText message={vehicleModelYearValidationMessage} />
      </div>
      <ContinueButton ButtonText="save" handleSubmit={handleSubmit} />
    </div>
  )
}

