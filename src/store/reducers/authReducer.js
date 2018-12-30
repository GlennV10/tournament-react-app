import {
   LOGIN_USER,
   LOGOUT_USER,
   CHECK_STATUS
} from '../actions/types';

const initState = {
   loggedIn: false,
   user: null
};

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case CHECK_STATUS:
         return {
            ...state,
            loggedIn: action.loggedIn,
            user: action.user
         };
      case LOGIN_USER:
         return {
            ...state,
            loggedIn: action.loggedIn,
            user: action.user
         };
      case LOGOUT_USER:
         return {
            ...state,
            loggedIn: false,
            user: null
         }
      default:
         return state;
   }
};

export default authReducer;