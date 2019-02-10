import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Tournament extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tournament: null
      };
   }

   componentDidMount() {
      this.getTournament(this.props.match.params.id);
   };

   getTournament = (id) => {
      const { tournaments } = this.props;
      let tournament = tournaments.filter(tournament => tournament._id === id);
      this.setState({ tournament: tournament[0] });
   };

   render() {
      if (this.state.tournament) {
         const { name } = this.state.tournament;
         return (
            <h2>{ name }</h2>
         )
      } else {
         return (
            <p>test</p>
         )
      }
   }
};

const mapStateToProps = (state) => {
   return {
      tournaments: state.tournament.tournaments
   }
};

export default withRouter(connect(mapStateToProps)(Tournament));