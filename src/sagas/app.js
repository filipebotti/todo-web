import { takeLatest } from 'redux-saga/effects';
import { USER } from '../services/config';
import * as types from '../actions';

function* signOut() {

    yield USER.clear();
}

export default function* () {
    yield takeLatest(types.SIGN_OUT, signOut);
}