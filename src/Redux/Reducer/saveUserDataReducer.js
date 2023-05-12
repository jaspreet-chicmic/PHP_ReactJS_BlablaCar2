
import { ACTION_STATES } from "../ActionStates";
const initialUserDataState= {
    "email": "",
    "password": "",
    "first_name": "",
    "last_name": "",
    "dob": "",
    "title": "",
    "phone_number": ""
}
export const saveUserDataReducer = (state = initialUserDataState, action) => {
    switch (action?.type) {
        case ACTION_STATES.SAVE_PROFILE:
            return {
                ...state, ...action?.payload
            }
        default:
            return state
    }
}