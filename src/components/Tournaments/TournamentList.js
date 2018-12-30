import React from 'react';
import Tournament from './Tournament';

const TournamentList = ({ tournaments }) => {
   return (
      <div className="tournament-list-container">
         {
            tournaments.map(tournament => {
               return (
                  <Tournament key={ tournament._id } tournament={ tournament } />
               )
            })
         }     
      </div>
   )
};

export default TournamentList;