import React from 'react'
import "./styles.css"
export default function ValidationText({message}) {
  return (
    <div>
        <label className='validationMessage'>{message}</label>
    </div>
  )
}
