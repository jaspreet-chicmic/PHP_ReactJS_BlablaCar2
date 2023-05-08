import React from 'react'
import Header from '../../Atoms/Header'
import { STRINGS } from '../../../Shared/Constants'
import SelectTrip from '../SelectTrip'
import "./styles.css"
export default function Search() {
  return (
    <div>
        
        <Header heading={STRINGS?.SEARCH_HEADING}></Header>
               <SelectTrip/>
        
    </div>
  )
}
