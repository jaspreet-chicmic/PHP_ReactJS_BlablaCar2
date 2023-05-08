import React from 'react'
import CustomLinkListCreator from '../../../Atoms/CustomLinkListCreator'
import PathTo from '../../../Atoms/PathTo'

export default function AccountDetailsUpdate() {
    const profileViewList=["Ratings given","Postal Address"]
  return (
    <div>
       {profileViewList.map(val=><CustomLinkListCreator linkText={val}/>)}
       <PathTo linkText="Logout" picNeeded={false}/>
       <PathTo linkText="CloseMyAccount" picNeeded={false}/>
    </div>
  )
}
