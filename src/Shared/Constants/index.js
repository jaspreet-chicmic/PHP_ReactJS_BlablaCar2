export const STRINGS={
    BIRTHDATE_HEADING:"What is your date?",
    EMAIL_HEADING:"What is your email?",
    NAME_HEADING:"What is your name?",
    GENDER_SELECT_HEADING:"How would you like to be addressed?",
    PASSWORD_HEADING:"Define your password",
    MOBILE_VERIFICATION_HEADING:"Verify your mobile number",
    SEARCH_HEADING:"Find a ride",
    LOGIN_INPUT_HEADING:"What's your email and password?",
    FORGOT_PASSWORD:"What's your email? Check your inbox for a link to create a new password.",
    RESET_PASSWORD:"Reset Password",
    MINI_BIO_HEADING:"What would you like other members to know about you?",
    ADDING_VEHICLE_DETAILS:"What is your license plate number?",
    VERIFY_EMAIL:"Click to verify Email"
}


export const REGEX={
    email:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
    name: "[a-zA-Z][a-zA-Z]+",
    password:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})",
    numberAndText:"/^[a-zA-Z0-9]+$/",
    numer:"/^[0-9]+$/"
}

export const VALIDATION_MESSAGES={
    EMAIL:{
        NOT_VALID:"Enter Valid Email",
        EMPTY:"*Email Required"
    },
    FIRST_NAME:{
        NOT_VALID:"Enter Valid First Name",
        EMPTY:"*FirstName Required"
    },
    LAST_NAME:{
        NOT_VALID:"Enter Valid Last Name",
        EMPTY:"*LastName Required"
    },
    PASSWORD:{
        NOT_VALID:"Enter Valid Password",   
        EMPTY:"*Password Required",
      
    },
    BIO:"enter more than 15 character and numbers are not accepted  "
    ,  COUNTRY:{
        NOT_VALID:"Enter Valid country",   
        EMPTY:"*country Required",
      
    },
    VEHICLENUMBER:{
        NOT_VALID:"Enter Valid vehicleNumber",   
        EMPTY:"*VehicleNumber Required",
      
    },
    VEHICLEBRAND:{
        NOT_VALID:"Enter Valid vehicleBrand",   
        EMPTY:"*VehicleBrand Required",
      
    },
    VEHICLENAME:{
        NOT_VALID:"Enter Valid vehicleName",   
        EMPTY:"*VehicleName Required",
      
    },
    VEHICLETYPE:{
        NOT_VALID:"Enter Valid vehicleType",   
        EMPTY:"*VehicleType Required",
      
    },
    VEHICLECOLOR:{
        NOT_VALID:"Enter Valid vehicleColor",   
        EMPTY:"*VehicleColor Required",
      
    },
    VEHICLEMODELYEAR:{
        NOT_VALID:"Enter Valid vehicleModelYear",   
        EMPTY:"*VehicleModelYear Required",
      
    },
}


export const LOCALSTORAGE_KEY_NAME="token"