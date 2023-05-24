import { NAME_PREFIXES } from "../../Shared/Constants";
import { ACTION_STATES } from "../ActionStates";
const initialStateForRegister = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  dob: "",
  title: "",
  gender: "",
  phone_number: "",
};
export const registerReducer = (state = initialStateForRegister, action) => {
  switch (action?.type) {
    case ACTION_STATES.ADD_DATE:
      return {
        ...state,
        dob: action?.payload,
      };
    case ACTION_STATES.ADD_EMAIL:
      return {
        ...state,
        email: action?.payload,
      };
    case ACTION_STATES.ADD_FIRSTNAME:
      return {
        ...state,
        firstName: action?.payload,
      };
    case ACTION_STATES.ADD_LASTNAME:
      return {
        ...state,
        lastName: action?.payload,
      };
    case ACTION_STATES.ADD_TITLE:
      let gender;
      if (action?.payload === NAME_PREFIXES.MALE) gender = "Male";
      else if (action?.payload === NAME_PREFIXES.FEMALE) gender = "Female";
      else gender = "Other";
      return {
        ...state,
        title: action?.payload,
        gender: gender,
      };
    case ACTION_STATES.ADD_PASSWORD:
      return {
        ...state,
        password: action?.payload,
      };
    case ACTION_STATES.CHECK_IF_EMAIL_EXISTS_IN_DB:
      return {
        ...state,
        emailStatus: action?.payload,
      };
    case ACTION_STATES.CLEAR_PAYLOAD:
      return {
        ...initialStateForRegister,
      };
    default:
      return state;
  }
};
