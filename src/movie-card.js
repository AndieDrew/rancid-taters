import React from 'react';
import './movie-card.css';

const Card =({poster_path, title}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <img src={poster_path} className='movieImg'>
    </div>
  )
}

export default Card;
