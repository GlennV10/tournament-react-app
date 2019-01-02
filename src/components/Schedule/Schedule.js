import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserSchedule } from '../../store/actions/userActions';

class Schedule extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   componentDidMount() {
      this.props.getUserSchedule();
   }

   render() {
      const { schedule } = this.props;

      return (
         <div>
            {
               schedule.map(tournament => {
                  return (
                     <p>{ tournament.name }</p>
                  )
               })
            }
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      schedule: state.user.schedule
   }
};

export default connect(
   mapStateToProps,
   { getUserSchedule }
)(Schedule);