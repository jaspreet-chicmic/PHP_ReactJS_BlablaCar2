import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVehicleData } from '../../../../../../Redux/Actions'
import Header from '../../../../../Atoms/Header'
import PathTo from '../../../../../Atoms/PathTo'
import DeleteVehicle from './DeleteVehicle'
import UpdateVehicles from './UpdateVehicle'
import Linkto from '../../../../../Atoms/LinkTo'

export default function EditOrDeleteVehicle() {
  const [showUpdate,setShowUpdate]=useState(false)
  const [showDeleteVehicle,setShowDeleteVehicle]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getVehicleData({}))
              
    },[])
    const {id}=useParams()
    const vehicleData=useSelector(state=>state?.vehicleDataReducer)
    const vehicle=(Object.values(vehicleData).length&&Object.values(vehicleData)?.find(val=>val?.id==id))
  return (
    <div className='section-content'>
      <Header heading={`Name:${vehicle?.vehicle_name}`}/>
      <div className='FillingMessageDiv'>
                <span className='FillingMessage'>color :{vehicle?.vehicle_color}</span>
            </div>
            <div>

            <PathTo  picNeeded={false}  linkText="Edit info" setShow={setShowUpdate}/>
            </div>
            <PathTo  picNeeded={false}  linkText="Delete vehicle" setShow={setShowDeleteVehicle}/>
             <DeleteVehicle show={showDeleteVehicle} setShow={setShowDeleteVehicle} id={id}/>
             <UpdateVehicles show={showUpdate} setShow={setShowUpdate} id={id} vehicle={vehicle}/>
    </div>
  )
}
