import React from 'react'
import ModalComponent from '../../../../../Cells/Modal'
import ContinueButton from '../../../../../Atoms/ContinueButton'
import Header from '../../../../../Atoms/Header'
import { useDispatch } from 'react-redux'
import { deleteVehicle, getVehicleData } from '../../../../../../Redux/Actions'
import { useNavigate } from 'react-router'

export default function DeleteVehicle({show,setShow=()=>{},id}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const navigateToProfile=(res)=>{
        navigate("/dashboard/profile/menu")
        getVehicleData({})
        console.log("deleted",res)
    }

    const handleSubmit=()=>{
    dispatch(deleteVehicle(id,navigateToProfile))
    setShow(false)
   
    
    }
  return (
    <div>
        <ModalComponent show={show} setShow={setShow}>
          <div>
            <Header heading="Sure to delete Vehicle"></Header>
            <ContinueButton ButtonText='Delete' handleSubmit={handleSubmit}/>
          </div>
        </ModalComponent>
    </div>
  )
}
