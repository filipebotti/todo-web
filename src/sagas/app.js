import { takeLatest, takeEvery } from 'redux-saga/effects';
import { USER } from '../services/config';
import * as types from '../actions';

function* signOut() {

    USER.clear();
    // Actions.reset("login")
}

function* onSignUp() {
    // Actions.main();
}

export default function* () {
    yield takeLatest(types.SIGN_OUT, signOut);
    yield takeEvery(types.SIGN_UP_SUCCESS, onSignUp);
}