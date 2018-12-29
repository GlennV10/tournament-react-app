import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard';
import Tournaments from './components/Tournaments';
import Schedule from './components/Schedule';
import Session from './components/Session';
import Results from './components/Results';

class App extends Component {
   render() {
      const { loggedIn } = this.props;
      console.log("Status", loggedIn);

      return (
         <BrowserRouter>
            <div className="App">
               <Navbar />
               <Route exact path='/' component={ Home } />
               <Route path='/dashboard' component={ Dashboard } />
               <Route path='/tournaments' component={ Tournaments } />
               <Route path='/schedule' component={ Schedule } />
               <Route path='/session' component={ Session } />
               <Route path='/results' component={ Results } />
            </div>
         </BrowserRouter>      
      );
   }
};

const mapStateToProps = (state) => {
   return {
      loggedIn: state.loggedIn
   }
};

export default connect(
   mapStateToProps
)(App);
