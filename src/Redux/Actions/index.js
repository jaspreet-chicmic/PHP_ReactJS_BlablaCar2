import { ACTION_STATES } from "../ActionStates";

export const registerData = {
  emailVerification: (payload) => {
    return {
      type: ACTION_STATES.CHECK_IF_EMAIL_EXISTS_IN_DB,
      payload,
    };
  },

  clearPayload: (payload) => {
    return {
      type: ACTION_STATES.CLEAR_PAYLOAD,
      payload,
    };
  },
  logout: (payload) => {
    return {
      type: ACTION_STATES.LOG_OUT,
      payload,
    };
  },
  email: (payload) => {
    return {
      type: ACTION_STATES.ADD_EMAIL,
      payload,
    };
  },
  password: (payload) => {
    return {
      type: ACTION_STATES.ADD_PASSWORD,
      payload,
    };
  },
  nameTitle: (payload) => {
    return {
      type: ACTION_STATES.ADD_TITLE,
      payload,
    };
  },
  date: (payload) => {
    return {
      type: ACTION_STATES.ADD_DATE,
      payload,
    };
  },
  firstName: (payload) => {
    return {
      type: ACTION_STATES.ADD_FIRSTNAME,
      payload,
    };
  },
  lastName: (payload) => {
    return {
      type: ACTION_STATES.ADD_LASTNAME,
      payload,
    };
  },
  signup: (payload, successRegister, failedRegister) => {
    console.log("sign up called");
    return {
      type: ACTION_STATES.SIGN_UP,
      payload,
      successRegister,
      failedRegister,
    };
  },
};

export const profile = {
  saveProfile: (payload) => {
    return {
      type: ACTION_STATES.SAVE_PROFILE,
      payload,
    };
  },
  saveToken: (payload) => {
    return {
      type: ACTION_STATES.SAVE_PROFILE_TOKEN,
      payload,
    };
  },
  logout: (payload) => {
    return {
      type: ACTION_STATES.CLEAR_PAYLOAD,
      payload,
    };
  },
};
export const loginData = {
  signin: (payload, successLogin, failedLogin) => {
    return {
      type: ACTION_STATES.SIGN_IN,
      payload,
      successLogin,
      failedLogin,
    };
  },
};

export const currentUserUpdate = (payload) => {
  console.log("currentUserUpdateCalled");
  return {
    type: ACTION_STATES.SET_CURRENT_USER,
    payload,
  };
};

export const sendPasswordResetMail = (payload) => {
  return {
    type: ACTION_STATES.SEND_FORGET_PASSWORD_MAIL,
    payload,
  };
};
export const sendResetPassword = (payload) => {
  return {
    type: ACTION_STATES.SEND_RESET_PASSWORD,
    payload,
  };
};

export const settingLoaderState = (payload) => {
  return {
    type: ACTION_STATES.SETTING_LOADER_STATE,
    payload,
  };
};

export const uploadProfilePic = (payload, successImageUpload) => {
  return {
    type: ACTION_STATES.UPLOADING_PROFILE_PIC,
    payload,
    successImageUpload,
  };
};
export const updateProfile = (payload) => {
  return {
    type: ACTION_STATES.SAVE_PROFILE,
    payload,
  };
};
export const addingBio = (payload) => {
  return {
    type: ACTION_STATES.ADDING_MINI_BIO,
    payload,
  };
};

export const gettingProfilePic = (payload) => {
  return {
    type: ACTION_STATES.GETTING_PROFILE_PIC,
    payload,
  };
};
export const addVehicleData = (payload, navigateToProfile) => {
  return {
    type: ACTION_STATES.ADD_VEHICLE_DATA,
    payload,
    navigateToProfile,
  };
};
export const savingProfilePic = (payload) => {
  return {
    type: ACTION_STATES.SAVE_PROFILE_PIC,
    payload,
  };
};
export const getVehicleData = () => {
  return {
    type: ACTION_STATES.GET_VEHICLE_DATA,
  };
};
export const setVehicleData = (payload) => {
  console.log(payload, "res in action");
  return {
    type: ACTION_STATES.SET_VEHICLE_DATA,
    payload,
  };
};

export const deleteVehicle = (id, navigateToProfile) => {
  return {
    type: ACTION_STATES?.DELETE_VEHICLE,
    id,
    navigateToProfile,
  };
};
export const updateVehicleData = (payload, id, navigateToProfile) => {
  return {
    type: ACTION_STATES.UPDATE_VEHICLE,
    payload,
    id,
    navigateToProfile,
  };
};

export const sendEmailVerificationLink = (payload, succesSend, failedSend) => {
  return {
    type: ACTION_STATES.SEND_EMAIL_VERIFICATION_LINK,
    payload,
    succesSend,
    failedSend,
  };
};

export const sendEmailVerificationstatus = (payload, id) => {
  return {
    type: ACTION_STATES.SEND_EMAIL_VERIFICATION_STATUS,
    payload,
    id,
  };
};
