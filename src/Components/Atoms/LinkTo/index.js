import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../../Shared/Images'
import "./styles.css"
export default function Linkto({picNeeded=true,linkText="" ,route=""}) {
  return (
    <div>

    <Link className="publishRideLink" to={route} >
      {picNeeded&& <img className="publishRideImg" src={Images?.additionIcon} alt =""></img>}
        <div className="publishRideText">{linkText}</div>
        </Link>
    </div>
  )
}
