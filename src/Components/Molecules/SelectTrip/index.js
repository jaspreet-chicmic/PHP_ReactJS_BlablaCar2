import React from 'react'
import "./styles.css"
import { Images } from '../../../Shared/Images'
import { useNavigate } from 'react-router-dom'
export default function SelectTrip() {
    const navigate=useNavigate()
    return (
        <div className="selectTripDiv" >
            <form className="selectTripForm" >
                <div className="selectTripDataInputDiv" >
                    <label className="selectTripDataLabel">
                        <img src={Images?.ring} alt="" />
                    </label>
                    <input type="search" placeholder="Leaving from..." className="selectTripDataInput" />
                </div>
                <hr className="seperator" />
                <div className="selectTripDataInputDiv" >
                    <label className="selectTripDataLabel"  >
                        <img src={Images?.ring} alt="" />
                    </label>
                    <input type="search" placeholder="Going to..." className="selectTripDataInput" />
                </div>
                <hr className="seperator" />
                <div className="selectTripDataInputDiv" >
                    <button type="button" className="selectTripButton">
                        <input id="g" type="date" className="selectTripDataInput" ></input>
                    </button>
                </div>
              
                <div className="selectTripDataInputDiv" >
                    <button type="button" className="selectTripButton" >
                        <img src={Images?.userProfileIcon} alt="" />
                        <span className="selectTripSpan" >1 </span>
                    </button>
                </div>

                <div className="searchTripButton" onClick={()=>{navigate("/search-car-sharing")}}>
                    <button type="submit" className="selectTripButton"  >
                        <span className="searchTripSpan" >Search</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
