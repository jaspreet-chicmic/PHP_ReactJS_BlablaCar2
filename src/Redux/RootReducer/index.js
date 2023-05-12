import { combineReducers } from "redux";

import { registerReducer } from "../Reducer/registerReducer";
import { loaderStateReducer } from "../Reducer/loaderStateReducer";
import { profilePicReducer } from "../Reducer/ProfilePicReducer";
import { VehicleDataReducer } from "../Reducer/setVehicleData";

const appReducer = combineReducers({
    registerReducer: registerReducer,
    loaderStateReducer:loaderStateReducer,
    profilePicReducer:profilePicReducer,
    vehicleDataReducer:VehicleDataReducer,
 
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;