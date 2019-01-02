import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTournaments } from '../../store/actions/tournamentActions';
import { getUserSchedule, addToSchedule, removeFromSchedule } from '../../store/actions/userActions'
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
      this.props.getUserSchedule();
   }

   addToSchedule = (tournament) => {
      this.props.addToSchedule(tournament);
   };

   removeFromSchedule = (tournament) => {
      this.props.removeFromSchedule(tournament._id);
   };

   render() {
      const tournaments = this.props.tournaments;
      const schedule = this.props.schedule;
      
      return (
         <div className="content-wrapper">
            <div className="main-container">
               <h1 className="content-title"><span>{ tournaments.length }</span> tournaments found</h1>
               <TournamentList 
                  tournaments={ tournaments } 
                  schedule={ schedule } 
                  addToSchedule={ this.addToSchedule } 
                  removeFromSchedule={ this.removeFromSchedule } />  
            </div>
            <Sidebar />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      tournaments: state.tournament.tournaments,
      schedule: state.user.schedule
   }
};

export default connect(
   mapStateToProps,
   { getTournaments, getUserSchedule, addToSchedule, removeFromSchedule }
)(Tournaments);