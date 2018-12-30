import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavbarBottom extends Component {
   getNavLinkClass = (path) => {
      const { location } = this.props;
      return location.pathname === path ? 'nav-link-active' : '';
   };

   render() {
      return (
         <nav className="navbar-bottom">
            <ul className="navbar-list">
               <li className={ `nav-item ${this.getNavLinkClass('/')}` }>
                  <NavLink to="/" exact activeClassName="nav-link-active" className="nav-link">Dashboard</NavLink>
               </li>
               <li className={ `nav-item ${this.getNavLinkClass('/tournaments')}` }>
                  <NavLink to="/tournaments" activeClassName="nav-link-active" className="nav-link">Tournaments</NavLink>
               </li>
               <li className={ `nav-item ${this.getNavLinkClass('/schedule')}` }>
                  <NavLink to="/schedule" activeClassName="nav-link-active" className="nav-link">Schedule</NavLink>
               </li>
               <li className={ `nav-item ${this.getNavLinkClass('/session')}` }>
                  <NavLink to="/session" activeClassName="nav-link-active" className="nav-link">Session</NavLink>
               </li>
               <li className={ `nav-item ${this.getNavLinkClass('/results')}` }>
                  <NavLink to="/results" activeClassName="nav-link-active" className="nav-link">Results</NavLink>
               </li>
            </ul>
   
            <ul className="navbar-list navbar-list-right">
               <li className="nav-item nav-item-right"><a className="nav-link">Help <i className="fas fa-question-circle"></i></a></li>
            </ul>
         </nav>
      )
   }
};

export default withRouter(NavbarBottom);