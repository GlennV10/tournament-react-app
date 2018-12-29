import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: ''
      };
   }

   handleChange = (event) => {
      const { target } = event;
      this.setState({ [target.id]: target.value });
   }

   handleSubmit = (event) => {
      event.preventDefault();
      
      Axios.post('/api/auth/login', {
            username: this.state.username,
            password: this.state.password
         })
         .then((res) => this.props.loginUser(res.data.success, res.data.user))
         .catch((err) => console.log(err.response.data));
   }

   render() {
      return(
         <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={ this.state.username } onChange={ this.handleChange } />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={ this.state.password } onChange={ this.handleChange } />

            <input type="submit" value="Login" />
         </form>
      )
   }
};

const mapStateToProps = (state) => {
   return {
      loggedIn: state.loggedIn,
      user: state.user
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      loginUser: (loggedIn, user) => {
         dispatch({ 
            type: 'LOGIN_USER', 
            loggedIn,
            user 
         }) 
      }
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Login);