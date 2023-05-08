import BirthDateInput from "../Components/Cells/BirthDateInput";
import EmailInput from "../Components/Cells/EmailInput";
import LoginForgetPassword from "../Components/Cells/EmailResetPasswordInput";
import LoginInputs from "../Components/Cells/LoginInputs";
import NameInput from "../Components/Cells/NameInput";
import NamePrefixSelector from "../Components/Cells/NamePrefixSelector";
import PasswordInput from "../Components/Cells/PasswordInput";
import ResetPassword from "../Components/Cells/ResetPassword";
import Login from "../View/Login";
import Register from "../View/Register";


export const AUTH_ROUTES = [
  {
    path: "/login",
    component: <Login/>,
    
  },
  {
    path: "/register",
    component: <Register />,
    
  },
  {
    path: "/register/email",
    component: <EmailInput />,
    
  },
  {
    path: "/register/name",
    component: <NameInput />,
    
  },
  {
    path: "/register/birthDate",
    component: <BirthDateInput />,
    
  },
  {
    path: "/register/gender",
    component: <NamePrefixSelector />,
    
  },
  {
    path: "/register/password",
    component: <PasswordInput />,
    
  },
  {
    path: "/login/email",
    component: <LoginInputs />,
    
  },
  {
    path: "/login/forgot",
    component: <LoginForgetPassword />,
    
  },
  {
    path: "/users/password/edit",
    component: <ResetPassword  />,
    
  },
];