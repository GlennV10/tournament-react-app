const initState = {
   loggedIn: false,
   user: null,
   tournaments: [],
   results: []
};

const rootReducer = (state = initState, action) => {
   if (action.type === 'LOGIN_USER') {
      return {
         ...state,
         loggedIn: action.loggedIn,
         user: action.user
      }
   }

   if (action.type === 'LOGOUT_USER') {
      return {
         ...state,
         loggedIn: false,
         user: null
      }
   }
   
   return state;
};

export default rootReducer;