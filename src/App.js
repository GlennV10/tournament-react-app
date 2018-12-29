import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard';
import Tournaments from './components/Tournaments';
import Schedule from './components/Schedule';
import Session from './components/Session';
import Results from './components/Results';

class App extends Component {
   componentDidMount() {
      Axios.get('/api/auth/status')
         .then(res => this.props.loginUser(res.data.success, res.data.user))
         .catch(err => console.log(err));
   }

   render() {
      const { loggedIn } = this.props;

      return (
         <BrowserRouter>
            <div className="App">
               { loggedIn ? <Navbar /> : null }
               <Switch>
                  <Route exact path='/' render={() => (
                     !loggedIn ? ( <Home /> ) : ( <Dashboard /> )
                  )} />
                  <Route path='/tournaments' render={() => (
                     !loggedIn 
                        ? ( <Redirect to="/" /> ) 
                        : ( <Tournaments /> )
                  )} />
                  <Route path='/schedule' render={() => (
                     !loggedIn 
                        ? ( <Redirect to="/" /> ) 
                        : ( <Schedule /> )
                  )} />
                  <Route path='/session' render={() => (
                     !loggedIn 
                        ? ( <Redirect to="/" /> ) 
                        : ( <Session /> )
                  )} />
                  <Route path='/results' render={() => (
                     !loggedIn 
                        ? ( <Redirect to="/" /> ) 
                        : ( <Results /> )
                  )} />
                  <Redirect from='*' to='/' />
               </Switch>
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
)(App);
