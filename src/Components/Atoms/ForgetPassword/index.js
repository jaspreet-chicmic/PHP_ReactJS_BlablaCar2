import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
export default function ForgetPassword() {
  return (
   <Link className='forgetPasswordLinkContainer' to="/login/forgot">
   <div className='forgetPasswordLinkDiv'>

   <label className='forgetPasswordLink'>Forget Password?</label>
   </div>
   </Link>
  )
}
