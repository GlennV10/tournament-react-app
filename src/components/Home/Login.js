import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';

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
      this.props.loginUser(this.state.username, this.state.password);
   }

   render() {
      return(
         <form onSubmit={ this.handleSubmit }>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={ this.state.username } onChange={ this.handleChange } />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={ this.state.password } onChange={ this.handleChange } />

            <input type="submit" value="Login" />
         </form>
      )
   }
};

export default connect(
   null,
   { loginUser }
)(Login);