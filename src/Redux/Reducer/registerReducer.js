
import { ACTION_STATES } from "../ActionStates";
const initialStateForRegister = {
    "email": "",
    "password": "",
    "first_name": "",
    "last_name": "",
    "dob": "",
    "title": "",
    "phone_number": ""
}
export const registerReducer = (state = initialStateForRegister, action) => {
    switch (action?.type) {
        case ACTION_STATES.ADD_DATE:
            return {
                ...state, dob: action?.payload
            }
        case ACTION_STATES.ADD_EMAIL:
            return {
                ...state, email: action?.payload
            }
        case ACTION_STATES.ADD_FIRSTNAME:
            return {
                ...state, first_name: action?.payload
            }
        case ACTION_STATES.ADD_LASTNAME:
            return {
                ...state, last_name: action?.payload
            }
        case ACTION_STATES.ADD_TITLE:
            return {
                ...state, title: action?.payload
            }
        case ACTION_STATES.ADD_PASSWORD:
            return {
                ...state, password: action?.payload
            }

        default:
            return state
    }
}