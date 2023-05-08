import { ACTION_STATES } from "../ActionStates";



export const profilePicReducer = (state = "", action) => {
    switch (action?.type) {
        case ACTION_STATES.SAVE_PROFILE_PIC:
            return (

                state=action?.payload
            )
            
        default:
            return state;
    }
}

