import React, { Component } from 'react';
import Login from './Login';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return(
         <div>
            <h1>Home</h1>
            <Login />
         </div>
      )
   }
};

export default Home;