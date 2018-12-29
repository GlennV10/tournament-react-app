import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';
import './Navbar.css';

class Navbar extends Component {
   logoutUser = () => {      
      Axios.post('/api/auth/logout')
         .then((res) => this.props.logoutUser())
         .catch((err) => console.log(err.response.data));
   };

   render() {
      return (
         <nav className="navbar">
            <NavbarTop user={this.props.user} logoutUser={this.logoutUser} />
            <NavbarBottom />
         </nav>
      );
   }
};

const mapStateToProps = (state) => {
   return {
      user: state.user
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      logoutUser: () => {
         dispatch({ 
            type: 'LOGOUT_USER'
         }) 
      }
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Navbar);