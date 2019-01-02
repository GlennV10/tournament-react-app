import React from 'react';
import Tournament from './Tournament';

const TournamentList = ({ tournaments, schedule, addToSchedule, removeFromSchedule }) => {
   return (
      <div className="tournament-list-container">
         {
            tournaments.map(tournament => {
               return (
                  <Tournament key={ tournament._id } 
                     tournament={ tournament } 
                     schedule={ schedule }
                     addToSchedule={ addToSchedule } 
                     removeFromSchedule={ removeFromSchedule } />
               )
            })
         }     
      </div>
   )
};

export default TournamentList;