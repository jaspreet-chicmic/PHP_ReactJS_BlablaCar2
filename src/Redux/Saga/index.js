import { takeLatest, put, all, select } from "redux-saga/effects";
import axios from "axios";
import { ACTION_STATES } from "../ActionStates";
import {
  BASE_URL,
  STATUS_MESSAGE,
  URL_EXTENSIONS,
} from "../../Services/Java_Api/Constants";
import { LOCALSTORAGE_KEY_NAME } from "../../Shared/Constants";
import {
  profile,
  savingProfilePic,
  setVehicleData,
  settingLoaderState,
  updateProfile,
} from "../Actions";
import { useSelector } from "react-redux";

function* emailVerificationCheck(email) {
  try {
    // const token = localStorage.getItem("token")
    // const config = {
    //     headers: { "Authorization" : "Bearer {tokenValue}"}
    // };
    yield put(settingLoaderState(true));

    // const formData = new FormData();
    // formData.append("email", email);

    console.log("email api b4 response", email);
    const res = yield axios.post(BASE_URL + URL_EXTENSIONS.EMAIL, email);
    // yield put(settingLoaderState(false))
    console.log(res, "email api response");
    yield put(settingLoaderState(false));
    // if (res?.status && res?.status === STATUS_MESSAGE.FORBIDDEN) {
    //     email.navigateToProfile(res)
    //     yield put({
    //         type: ACTION_STATES.CHECK_IF_EMAIL_EXISTS_IN_DB,
    //         payload: STATUS_MESSAGE.FORBIDDEN
    //     })

    //     throw new Error("Email Already Exists!")
    // }
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding email");
  }
}

function* logOut() {
  try {
    console.log("in logout");
    yield put(settingLoaderState(true));
    const profileRed = yield select((state) => {
      console.log(state, "state In logout");
      return state.saveUserDataReducer;
    });
    const authVal = "Bearer " + profileRed.token;
    console.log(authVal, " authVal");
    const headers = {
      "ngrok-skip-browser-warning": "69420",
      "Content-Type": "application/json", // Example header
      Authorization: authVal, // Example authorization header
    };
    const res = yield axios.post(BASE_URL + URL_EXTENSIONS.LOG_OUT, "", {
      headers,
    });
    // const res2 = yield axios.post(
    //     BASE_URL + URL_EXTENSIONS.LOG_OUT,"",
    //     {headers}
    // );
    // console.log(res2, "in logout")
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
  }
}
function* postRegisterData(payload) {
  try {
    yield put(settingLoaderState(true));
    const { dob, gender, password, nameTitle, firstName, lastName, email } =
      payload?.payload;
    const initialPayload = {
      email,
      password,
      dob,
      gender,
      firstName: firstName,
      lastName: lastName,
      // nameTitle,
    };

    const formData = new FormData();
    for (let key in initialPayload) {
      formData.append(key, initialPayload[key]);
    }

    const res = yield axios.post(
      BASE_URL + URL_EXTENSIONS.SIGN_UP,
      initialPayload
    );
    console.log(
      res,
      "res token and headers",
      res?.headers,
      res.success?.token,
      res.success?.firstName
    );
    // localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res))
    // localStorage.setItem("CurrentUser", JSON.stringify(res?.data))

    payload?.successRegister();
    yield put(settingLoaderState(false));
    console.log(res, "payload jp@gmail.com");
  } catch (error) {
    console.log(error, payload, "errorInRegister");
    yield put(settingLoaderState(false));
    payload?.failedRegister(error?.response?.data || "server not responding");
  }
}
// successLogin,failedLogin
function* postLoginData(payload) {
  try {
    yield put(settingLoaderState(true));

    const { password, email } = payload?.payload;
    const initialPayload = {
      email,
      password,
    };

    const formData = new FormData();
    for (let key in initialPayload) {
      formData.append(key, initialPayload[key]);
    }

    const res = yield axios.post(BASE_URL + URL_EXTENSIONS.SIGN_IN, formData);
    console.log(res, "res token "); //, res.data?.data?.

    if (!res?.data?.error)
      yield put(profile.saveProfile(res?.data?.detail));
    // localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.data?.token))
    // localStorage.setItem("CurrentUser", JSON.stringify(res?.data?.detail))

    console.log("token ", res?.data?.token);
    if (!res?.data?.error) {
      yield put(profile.saveToken({ token: res?.data?.token }));
      payload?.successLogin();
    }

    // localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
    // localStorage.setItem("CurrentUser", JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error);
    payload?.failedLogin(error?.response?.data || "server not responding");
  }
}

function* sendPasswordResetMailData(payload) {
  try {
    yield put(settingLoaderState(true));
    const res = yield axios.post(BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, {
      user: payload?.payload,
    });
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in sending mail");
  }
}
function* sendResetPassword(payload) {
  try {
    yield put(settingLoaderState(true));
    const res = yield axios.put(BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, {
      user: payload?.payload,
    });
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in reseting password");
  }
}

function* uploadingPic(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    console.log(payload?.payload, "imageinsaga");
    yield put(settingLoaderState(true));
    const res = yield axios.put(
      BASE_URL + URL_EXTENSIONS.PROFILE_PIC,
      payload?.payload,
      config
    );
    payload?.successImageUpload();
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in uploading pic");
  }
}

function* gettingProfilePic() {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    console.log("get image called");
    yield put(settingLoaderState(true));
    const res = yield axios.get(BASE_URL + URL_EXTENSIONS.PROFILE_PIC, config);
    console.log(res, "imageinsaga");
    yield put(savingProfilePic(res?.data?.data?.image_url));
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in getting pic");
  }
}

function* updateProfileData(action) {
  try {
    yield put(settingLoaderState(true));

    const { dob, gender, firstName, lastName, phoneNumber="" } = action?.payload;
    const initialPayload = {
      dob,
      gender,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
    }
    const formData = new FormData();
    for (let key in initialPayload) {
      formData.append(key, initialPayload[key]);
    }

    const profileRed = yield select((state) => {
      return state.saveUserDataReducer;
    });
    const authVal = "Bearer " + profileRed.token;
    console.log(authVal, " authVal");
    const headers = {
      "ngrok-skip-browser-warning": "69420",
      "Content-Type": "application/json", // Example header
      Authorization: authVal, // Example authorization header
    };
    const res = yield axios.post(BASE_URL + URL_EXTENSIONS.PROFILE_UPDATE, "", {
      headers,
    });

    // console.log(res?.data?.status?.data, "profileUpdated");
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "errorInLogin");
  }
}

function* updateBioData(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    const res = yield axios.put(
      BASE_URL + URL_EXTENSIONS.SIGN_UP,
      { user: payload?.payload },
      config
    );
    console.log(res?.data?.status?.data, "bioUpdated");
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "errorInLogin");
  }
}

function* addVehicle(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    const res = yield axios.post(
      BASE_URL + URL_EXTENSIONS.VEHICLE,
      { vehicle: payload?.payload },
      config
    );
    payload.navigateToProfile(res);
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding vehicle");
  }
}

function* getVehicle() {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    const res = yield axios.get(BASE_URL + URL_EXTENSIONS.VEHICLE, config);
    console.log(res?.data, "res in saga");
    yield put(setVehicleData(res?.data));
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding vehicle");
  }
}

function* deleteVehicleData(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    const res = yield axios.delete(
      BASE_URL + URL_EXTENSIONS.VEHICLE + `/${payload?.id}`,
      config
    );
    payload.navigateToProfile(res);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding vehicle");
  }
}

function* updateVehicleDetails(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    const res = yield axios.put(
      BASE_URL + URL_EXTENSIONS.VEHICLE + `/${payload?.id}`,
      { vehicle: payload?.payload },
      config
    );
    payload.navigateToProfile(res);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding vehicle");
  }
}

function* sendingEmailVerificationLink(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    const res = yield axios.post(
      BASE_URL + URL_EXTENSIONS.EMAIL_VERIFICATION,
      payload?.payload,
      config
    );
    payload.successSend(res);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    console.log(error, "error in sending email verification");
  }
}

function* sendingEmailVerificationStatus(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    yield axios.get(
      `localhost:3000/account_activations/${payload?.id}/edit`,
      payload?.payload,
      config
    );
    // console.log(res,"after email verifn")
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    // payload.failedSend(error?.response?.data || "server not responding")
    console.log(error, "error in sending email verification");
  }
}

function* Saga() {
  yield all([
    takeLatest(ACTION_STATES.SIGN_UP, postRegisterData),
    takeLatest(ACTION_STATES.LOG_OUT, logOut),
    takeLatest(ACTION_STATES.SIGN_IN, postLoginData),
    takeLatest(
      ACTION_STATES.CHECK_IF_EMAIL_EXISTS_IN_DB,
      emailVerificationCheck
    ),
    takeLatest(
      ACTION_STATES.SEND_FORGET_PASSWORD_MAIL,
      sendPasswordResetMailData
    ),
    takeLatest(ACTION_STATES.SEND_RESET_PASSWORD, sendResetPassword),
    takeLatest(ACTION_STATES.UPDATE_PROFILE, updateProfileData),
    takeLatest(ACTION_STATES.ADDING_MINI_BIO, updateBioData),
    takeLatest(ACTION_STATES.UPLOADING_PROFILE_PIC, uploadingPic),
    takeLatest(ACTION_STATES.GETTING_PROFILE_PIC, gettingProfilePic),
    takeLatest(ACTION_STATES.ADD_VEHICLE_DATA, addVehicle),
    takeLatest(ACTION_STATES.GET_VEHICLE_DATA, getVehicle),
    takeLatest(ACTION_STATES.DELETE_VEHICLE, deleteVehicleData),
    takeLatest(ACTION_STATES.UPDATE_VEHICLE, updateVehicleDetails),
    takeLatest(
      ACTION_STATES.SEND_EMAIL_VERIFICATION_LINK,
      sendingEmailVerificationLink
    ),
    takeLatest(
      ACTION_STATES.SEND_EMAIL_VERIFICATION_STATUS,
      sendingEmailVerificationStatus
    ),
  ]);
}
export default Saga;
