import React from 'react';
import './movie-card.css';

const Card =({id, img, title}) => {
  return (
    <div className='card' key={id}>
      <img className='poster' src={img} alt={`Poster of ${title} movie`}/>
      <h3>{title}</h3>
    </div>
  )
}

export default Card;
