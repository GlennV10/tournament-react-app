import React from 'react';
import Avatar from '../../assets/images/default_picture.png';

const NavbarTop = ({ user, logoutUser }) => {
   let userFullName = 'Not Logged In'
   if (user !== null) {
      userFullName = `${user.firstname} ${user.lastname}`
   }

   return (
      <nav className="navbar-top">
         <div className="navbar-top-header">

         </div>
         <div className="navbar-top-dropdown">
            <li className="dropdown">
               <input id="dropdown-link" type="checkbox" name="dropdown-menu" />
               <label htmlFor="dropdown-link"><img src={ Avatar } alt="avatar"></img>{ userFullName }</label>
               <ul className="dropdown-menu">
                  <li><a href="#"><i className="far fa-user"></i> Profile</a></li>
                  <li><a href="#"><i className="fas fa-cog"></i> Settings</a></li>
                  <li><a onClick={ logoutUser }><i className="fas fa-sign-out-alt"></i> Logout</a></li>
               </ul>
            </li>
         </div>
      </nav>
   )
};

export default NavbarTop;