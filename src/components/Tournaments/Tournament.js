import React from 'react';
import { withRouter } from 'react-router-dom';
import Pokerstars from '../../assets/images/PokerStars_emblem.svg';

const Tournament = ({ tournament, schedule, addToSchedule, removeFromSchedule, history }) => {
   const { _id, name, pokerroom, time, buyin } = tournament;

   return (
      <div className="tournament-container">
         <div className="tournament-general-container">
            <p className="tournament-name">{ name }</p>
            <div className="tournament-pokerroom-container">               
               <img className="tournament-pokerroom" alt="Pokerroom" src={ Pokerstars } />
               { pokerroom }
            </div>
         </div>
         <div className="tournament-info-container">
            <div className="tournament-time-container">
               <p className="tournament-time">{ time.hour }<span>:{ (time.minute).toString().padStart(2, '0') }</span></p>
               <p className="tournament-info-subtitle">Time</p>
            </div>
            <div className="tournament-buyin-container">            
               <p className="tournament-buyin">${ parseFloat(Math.round(buyin.total * 100) / 100).toFixed(2) }</p>
               <p className="tournament-info-subtitle">Buyin</p>
            </div>
         </div>
         <div className="tournament-button-container">
            <button 
               type="button" 
               className="btn btn-details"
               onClick={ () => history.push(`/tournaments/${_id}`)}>
                  <i className="fas fa-info-circle"></i> Details
            </button>
            <button 
               type="button" 
               className="btn btn-favourite"
               onClick={ schedule.some(t => t['_id'] === tournament['_id']) 
                           ? removeFromSchedule.bind(this, tournament) 
                           : addToSchedule.bind(this, tournament) }>
                  <i className={ `${ schedule.some(t => t['_id'] === tournament['_id']) ? 'fas' : 'far' } fa-star` }></i>
            </button>
         </div>
      </div>
   )
};

export default withRouter(Tournament);