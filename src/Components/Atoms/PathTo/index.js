import React from 'react'

import { Images } from '../../../Shared/Images'
import "./styles.css"
export default function PathTo({picNeeded=true,linkText="" ,setShow=()=>{}}) {
  return (
    <div>

    <div className="publishRideLink"  onClick={()=>{setShow(true)}}>
      {picNeeded&& <img className="publishRideImg" src={Images?.additionIcon} alt =""></img>}
        <div className="publishRideText">{linkText}</div>
        </div>
    </div>
  )
}
