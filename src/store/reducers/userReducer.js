import {
   GET_SCHEDULE,
   ADD_TO_SCHEDULE,
   REMOVE_FROM_SCHEDULE
} from '../actions/types';

const initState = {
   schedule: []
};

const userReducer = (state = initState, action) => {
   switch (action.type) {
      case GET_SCHEDULE:
         return {
            ...state,
            schedule: action.schedule
         }
      case ADD_TO_SCHEDULE:
         return {
            ...state,
            schedule: [action.tournament, ...state.schedule]
         }
      case REMOVE_FROM_SCHEDULE:
         return {
            ...state,
            schedule: state.schedule.filter(tournament => tournament._id !== action.id)
         }
      default: 
         return state;
   }
};

export default userReducer;