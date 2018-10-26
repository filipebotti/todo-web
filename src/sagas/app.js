import { takeLatest, takeEvery } from 'redux-saga/effects';
import { USER } from '../services/config';
import * as types from '../actions';

function* signOut() {

    USER.clear();
}

export default function* () {
    yield takeLatest(types.SIGN_OUT, signOut);
}