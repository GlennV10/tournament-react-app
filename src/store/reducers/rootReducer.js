import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tournamentReducer from './tournamentReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
   auth: authReducer,
   tournament: tournamentReducer,
   user: userReducer
});

export default rootReducer;