import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarBottom = () => {
   return (
      <nav className="navbar-bottom">
         <ul className="navbar-list">
            <li className="nav-item"><NavLink to="/" exact activeClassName="nav-link-active" className="nav-link">Dashboard</NavLink></li>
            <li className="nav-item"><NavLink to="/tournaments" exact activeClassName="nav-link-active" className="nav-link">Tournaments</NavLink></li>
            <li className="nav-item"><NavLink to="/schedule" exact activeClassName="nav-link-active" className="nav-link">Schedule</NavLink> </li>
            <li className="nav-item"><NavLink to="/session" exact activeClassName="nav-link-active" className="nav-link">Session</NavLink></li>
            <li className="nav-item"><NavLink to="/results" exact activeClassName="nav-link-active" className="nav-link">Results</NavLink></li>
         </ul >

         <ul className="navbar-list navbar-list-right">
            <li className="nav-item nav-item-right"><a className="nav-link">Help <i className="fas fa-question-circle"></i></a></li>
         </ul >
      </nav>
   )
};

export default NavbarBottom;