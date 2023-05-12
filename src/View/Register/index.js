
import { Link } from "react-router-dom"
import Header from "../../Components/Atoms/Header"
import "./styles.css"
import CustomLinkListCreator from "../../Components/Atoms/CustomLinkListCreator"

export default function Register() {

  return (
    <div className="section-content">
      <Header heading={"sign up"}></Header>
      <CustomLinkListCreator route={"/register/email"} linkText={"Continue With Email"} />
      <div className="loginRedirectDiv">
        <p className="loginRedirect"> Already a member?  </p>
        <Link className="loginLink" to={"/login"}>Log in</Link>
      </div>
    </div>
  )
}
