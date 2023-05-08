import { ACTION_STATES } from "../ActionStates";



export const loaderStateReducer = (state = false, action) => {
    switch (action?.type) {
        case ACTION_STATES.SETTING_LOADER_STATE:
            return (

                state=action?.payload
            )
            
        default:
            return state;
    }
}

