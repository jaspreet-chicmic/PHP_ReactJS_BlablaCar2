
import { ACTION_STATES } from "../ActionStates";
const initialStateForRegister = []
export const VehicleDataReducer = (state = initialStateForRegister, action) => {
    switch (action?.type) {
        case ACTION_STATES.SET_VEHICLE_DATA:
            console.log(action?.payload,"res in reducer")
            return action.payload || [];
     
        default:
            return state
    }
}