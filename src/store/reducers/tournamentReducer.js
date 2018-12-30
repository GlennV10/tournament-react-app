import {
   GET_TOURNAMENTS
} from '../actions/types';

const initState = {
   tournaments: []
};

const tournamentReducer = (state = initState, action) => {
   switch (action.type) {
      case GET_TOURNAMENTS:
         return {
            ...state,
            tournaments: action.tournaments
         }
      default:
         return state;
   }
};

export default tournamentReducer;