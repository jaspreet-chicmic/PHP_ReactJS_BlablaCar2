import React from 'react'
import CustomLinkListCreator from '../CustomLinkListCreator'

export default function DropDownListViewer({dropDownListData,setDropDownListShow=()=>{},setDropDownIconPosition=()=>{}}) {
  return (
    <div className='dropDown'>

    <div className="DropDownListDiv" >
        <div className="DropDownListDivContent" >
            {dropDownListData?.map((val) => <CustomLinkListCreator route={val.route}linkText={val.linkText} setDropDownListShow={setDropDownListShow} setDropDownIconPosition={setDropDownIconPosition}/>)}
        </div>
    </div>
</div>
  )
}
