import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTournaments } from '../../store/actions/tournamentActions';
import TournamentList from './TournamentList';

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
         <div>
            <h1>Tournaments</h1>
            <TournamentList tournaments={ tournaments } />
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