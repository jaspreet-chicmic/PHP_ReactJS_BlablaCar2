import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { ACTION_STATES } from "../ActionStates";
import { BASE_URL, URL_EXTENSIONS } from "../../Services/ROR_Api/Constants";
import { LOCALSTORAGE_KEY_NAME } from "../../Shared/Constants";
import { savingProfilePic, setVehicleData, settingLoaderState } from "../Actions";

function* postRegisterData(payload) {
    try {
        yield put(settingLoaderState(true))
        const res = yield axios.post(BASE_URL + URL_EXTENSIONS.SIGN_UP, { user: payload?.payload });
        
        localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
        localStorage.setItem("CurrentUser", JSON.stringify(res?.data?.status?.data))

        yield (put(payload?.successRegister()))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        // yield(put(payload?.failedRegister(error?.response?.data||"server not responding")))
        console.log(error, "errorInRegister")
    }
}
// successLogin,failedLogin
function* postLoginData(payload) {
    try {
        yield put(settingLoaderState(true))
        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.SIGN_IN, { user: payload?.payload }
        );
        payload?.successLogin()
        localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
        localStorage.setItem("CurrentUser", JSON.stringify(res?.data?.status?.data))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error)
        payload?.failedLogin(error?.response?.data || "server not responding")
    }
}

function* sendPasswordResetMailData(payload) {
    try {
        yield put(settingLoaderState(true))
        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, { user: payload?.payload }
        );
        yield put(settingLoaderState(false))

    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in sending mail")
    }
}
function* sendResetPassword(payload) {
    try {
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, { user: payload?.payload }
        );
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in reseting password")
    }
}

function* uploadingPic(payload) {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        console.log(payload?.payload, "imageinsaga")
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.PROFILE_PIC, payload?.payload, config
        );
        payload?.successImageUpload()
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in uploading pic")
    }
}

function* gettingProfilePic() {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        console.log("get image called")
        yield put(settingLoaderState(true))
        const res = yield axios.get(
            BASE_URL + URL_EXTENSIONS.PROFILE_PIC, config
        );
        console.log(res, "imageinsaga")
        yield put(savingProfilePic(res?.data?.data?.image_url))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in getting pic")
    }
}



function* updateProfileData(payload) {
    try {
        const token = localStorage.getItem("token")
        const config = { headers: { 'Authorization': token } };
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.SIGN_UP, { user: payload?.payload }, config
        );
        console.log(res?.data?.status?.data, "profileUpdated")
        // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "errorInLogin")
    }
}

function* updateBioData(payload) {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.SIGN_UP, { user: payload?.payload }, config
        );
        console.log(res?.data?.status?.data, "bioUpdated")
        // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "errorInLogin")
    }
}

function* addVehicle(payload) {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        yield put(settingLoaderState(true))
        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.VEHICLE, { vehicle: payload?.payload }, config
        );
        payload.navigateToProfile(res)
        // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in adding vehicle")
    }
}

function* getVehicle() {
    try {

        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        yield put(settingLoaderState(true))
        const res = yield axios.get(
            BASE_URL + URL_EXTENSIONS.VEHICLE, config
        );
        console.log(res?.data, "res in saga")
        yield put(setVehicleData(res?.data))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in adding vehicle")
    }
}

function* deleteVehicleData(payload) {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        yield put(settingLoaderState(true))
        const res = yield axios.delete(
            BASE_URL + URL_EXTENSIONS.VEHICLE + `/${payload?.id}`, config
        );
        payload.navigateToProfile(res)
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in adding vehicle")
    }
}

function* updateVehicleDetails(payload) {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.VEHICLE + `/${payload?.id}`, { vehicle: payload?.payload }, config
        );
        payload.navigateToProfile(res)
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in adding vehicle")
    }
}



function* sendingEmailVerificationLink(payload) {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        yield put(settingLoaderState(true))
        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.EMAIL_VERIFICATION, payload?.payload,config
        );
        payload.successSend(res)
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        payload.failedSend(error?.response?.data )
        console.log(error, "error in sending email verification")
    }
}

function* sendingEmailVerificationStatus(payload) {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
        };
        yield put(settingLoaderState(true))
        yield axios.get(
           `localhost:3000/account_activations/${payload?.id}/edit`, payload?.payload,config
        );
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        payload.failedSend(error?.response?.data || "server not responding")
        console.log(error, "error in sending email verification")
    }
}


function* Saga() {
    yield all([
        takeLatest(ACTION_STATES.SIGN_UP, postRegisterData),
        takeLatest(ACTION_STATES.SIGN_IN, postLoginData),
        takeLatest(ACTION_STATES.SEND_FORGET_PASSWORD_MAIL, sendPasswordResetMailData),
        takeLatest(ACTION_STATES.SEND_RESET_PASSWORD, sendResetPassword),
        takeLatest(ACTION_STATES.UPDATE_PROFILE, updateProfileData),
        takeLatest(ACTION_STATES.ADDING_MINI_BIO, updateBioData),
        takeLatest(ACTION_STATES.UPLOADING_PROFILE_PIC, uploadingPic),
        takeLatest(ACTION_STATES.GETTING_PROFILE_PIC, gettingProfilePic),
        takeLatest(ACTION_STATES.ADD_VEHICLE_DATA, addVehicle),
        takeLatest(ACTION_STATES.GET_VEHICLE_DATA, getVehicle),
        takeLatest(ACTION_STATES.DELETE_VEHICLE, deleteVehicleData),
        takeLatest(ACTION_STATES.UPDATE_VEHICLE, updateVehicleDetails),
        takeLatest(ACTION_STATES.SEND_EMAIL_VERIFICATION_LINK, sendingEmailVerificationLink),
        takeLatest(ACTION_STATES.SEND_EMAIL_VERIFICATION_STATUS, sendingEmailVerificationStatus)
    ]);
}
export default Saga;