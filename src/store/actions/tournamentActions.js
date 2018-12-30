import Axios from 'axios';
import { GET_TOURNAMENTS } from './types';

export const getTournaments = () => dispatch => {
   Axios.get('/api/tournaments')
      .then(res => {
         dispatch({
            type: GET_TOURNAMENTS,
            tournaments: res.data
         })
      })
      .catch(err => console.log(err));
};