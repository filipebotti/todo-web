import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import task from './tasks'

export default combineReducers({ auth, user, task });