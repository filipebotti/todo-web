import * as types from '../actions';

const initialState = {
    name: '',
    isRegistering: false,
    error: '',
    isAuthenticated: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.AUTH_SUCCESS:
            return { ...state, name: action.user ? action.user.name : '', isAuthenticated: true };
        case types.SIGN_UP:
            return { ...state, isRegistering: true, error: '', isAuthenticated: false }
        case types.SIGN_UP_SUCCESS:
            return { ...state, isRegistering: false, isAuthenticated: true }
        case types.SIGN_UP_FAIL: 
            return { ...state, isRegistering: false, error: action.error }
        case types.SIGN_OUT:
            return { ...state, isAuthenticated: false }
        default:
            return state;
    }
}