import { ACTION_STATES } from "../ActionStates";

const initialState = {
  loader: false,
};

export const loaderStateReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ACTION_STATES.SETTING_LOADER_STATE:
      return {
        ...state,
        loader: action?.payload,
      };
    default:
      return state;
  }
};
