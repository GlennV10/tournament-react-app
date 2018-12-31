import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTournaments } from '../../store/actions/tournamentActions';
import TournamentList from './TournamentList';
import Sidebar from './Sidebar';
import './Tournaments.css';

class Tournaments extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   componentDidMount() {
      this.props.getTournaments();
   }

   render() {
      const tournaments = this.props.tournaments;
      
      return (
         <div className="content-wrapper">
            <div className="main-container">
               <h1 className="content-title"><span>{ tournaments.length }</span> tournaments found</h1>
               <TournamentList tournaments={ tournaments } />            
            </div>
            <Sidebar />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      tournaments: state.tournament.tournaments
   }
};

export default connect(
   mapStateToProps,
   { getTournaments }
)(Tournaments);