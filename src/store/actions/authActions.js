import Axios from 'axios';
import { LOGIN_USER, LOGOUT_USER, CHECK_STATUS } from './types';

export const checkStatus = () => dispatch =>  {
   Axios.get('/api/auth/status')
      .then(res => {
         dispatch({
            type: CHECK_STATUS,
            loggedIn: res.data.success,
            user: res.data.user
         })
      })
      .catch(err => console.log(err));
};

export const loginUser = (username, password) => dispatch => {
   Axios.post('/api/auth/login', {
      username,
      password
   })
   .then(res => {
      dispatch({
         type: LOGIN_USER,
         loggedIn: res.data.success,
         user: res.data.user
      })
   })
   .catch(err => console.log(err.response.data));
};

export const logoutUser = () => dispatch => {
   Axios.post('/api/auth/logout')
      .then(res => {
         dispatch({
            type: LOGOUT_USER
         })
      })
      .catch(err => console.log(err.response.data));
};