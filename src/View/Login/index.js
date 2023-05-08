import React from 'react'
import Header from '../../Components/Atoms/Header'
import { Link } from 'react-router-dom'
import rightArrow from "../../assets/rightArrow.svg"
import CustomLinkListCreator from '../../Components/Atoms/CustomLinkListCreator'
export default function Login() {
  return (
    <div className="section-content">
      <Header heading={"log in"}></Header>
      <CustomLinkListCreator linkText={"Continue with email"} route={"/login/email"} />

      <div className="loginRedirectDiv">

        <p className="loginRedirect"> Not a member yet? </p>
        <Link className="loginLink" to={"/register"}>Sign up</Link>
      </div>
    </div>
  )
}
