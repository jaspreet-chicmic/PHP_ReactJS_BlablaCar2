import { ACTION_STATES } from "../ActionStates";
const initialUserDataState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  dob: "",
  title: "",
  phone_number: "",
  token: "",
  gender: "",
};

export const saveUserDataReducer = (state = initialUserDataState, action) => {
  switch (action?.type) {
    case ACTION_STATES.SAVE_PROFILE:
      return {
        ...state,
        ...action?.payload,
      };
    case ACTION_STATES.SAVE_PROFILE_TOKEN:
      return {
        ...state,
        ...action?.payload,
      };
    case ACTION_STATES.CLEAR_PAYLOAD:
      return { ...initialUserDataState };
    default:
      return state;
  }
};
