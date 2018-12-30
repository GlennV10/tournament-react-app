import React from 'react';

const Tournament = ({ tournament }) => {
   const { name, time } = tournament;

   return (
      <div className="tournament-container">
         <h2 className="tournament-name">{ name }</h2>
         <p>{ time.hour }:{ time.minute }</p>
      </div>
   )
};

export default Tournament;