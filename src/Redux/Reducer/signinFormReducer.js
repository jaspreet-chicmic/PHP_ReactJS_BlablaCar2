import { ACTION_STATES } from "../ActionStates";
const initialFormData = {
  email: "",
  password: "",
};

export const saveUserDataReducer = (state = initialUserDataState, action) => {
  switch (action?.type) {
    case ACTION_STATES.SAVE_SIGNIN_FORM_DATA:
      return {
        ...state,
        ...action?.payload,
      };
    case ACTION_STATES.CLEAR_SIGNIN_PAYLOAD:
      return { ...initialFormData };
    default:
      return state;
  }
};
