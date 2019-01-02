import Axios from 'axios';
import { GET_SCHEDULE, ADD_TO_SCHEDULE, REMOVE_FROM_SCHEDULE } from './types';

export const getUserSchedule = () => dispatch => {
   Axios.get('/api/users/schedule')
      .then(res => {
         dispatch({
            type: GET_SCHEDULE,
            schedule: res.data
         })
      })
      .catch(err => console.log(err));
};

export const addToSchedule = (tournament) => dispatch => {
   Axios.post('/api/users/schedule', { 
         id: tournament._id 
      })
      .then(res => {
         dispatch({
            type: ADD_TO_SCHEDULE,
            tournament
         })
      })
      .catch(err => console.log(err));
};

export const removeFromSchedule = (id) => dispatch => {
   Axios.delete(`/api/users/schedule/${id}`)
      .then(res => {
         dispatch({
            type: REMOVE_FROM_SCHEDULE,
            id
         })
      })
      .catch(err => console.log(err));
};