import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,

    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,

    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,

    RESIGN_REQUEST,
    RESIGN_SUCCESS,
    RESIGN_FAILURE,

    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_SUCCESS,
    LOAD_MY_INFO_FAILURE,
} from '../reducer/user';

function loadMyInfoAPI() {
    return axios.get('/api/user/loadMyInfo');
}

function* loadMyInfo() {
    try {
        const { data: { nickname } } = yield call(loadMyInfoAPI);
        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: nickname,
        });

    } catch (err) {
        // console.error(err);
        yield put({
            type: LOAD_MY_INFO_FAILURE,
            error: err.response.data,
        });
    }
}

function logInAPI(data) {
    console.log(data, "insaga")
    return axios.post('/api/user/login', data);
}

function* logIn(action) {
    try {
        const { data: { success, message, user, error } } = yield call(logInAPI, action.data);
        if (success) {
            console.log(user)
            yield put({
                type: LOG_IN_SUCCESS,
                data: user.nickname,
            });
        }
        else {
            yield put({
                type: LOG_IN_FAILURE,
                error: message,
            });
        }
    } catch (err) {
        // console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/user/logout');
}

function* logOut() {
    try {
        const { data: { success, message, error } } = yield call(logOutAPI);
        if (success) {
            yield put({
                type: LOG_OUT_SUCCESS,
            });
        }
        else {
            yield put({
                type: LOG_OUT_FAILURE,
                error: message
            });
        }
    } catch (err) {
        // console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    return axios.post('/api/user/register', data);
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        // console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
    yield all([
        fork(watchLoadMyInfo),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}
