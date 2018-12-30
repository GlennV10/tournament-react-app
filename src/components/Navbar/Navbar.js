import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/authActions';
import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';
import './Navbar.css';

class Navbar extends Component {
   logoutUser = () => {
      this.props.logoutUser();
   };

   render() {
      return (
         <header className="header">
            <nav className="navbar">
               <NavbarTop user={this.props.user} logoutUser={this.logoutUser} />
               <NavbarBottom />
            </nav>
         </header>
      );
   }
};

const mapStateToProps = (state) => {
   return {
      user: state.auth.user
   }
};

export default connect(
   mapStateToProps,
   { logoutUser },
   null,
   { pure: false }
)(Navbar);