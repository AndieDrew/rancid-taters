import React from 'react';
import './movie-card.css';

const Card =({id, img, title}) => {
  return (
    <div className='card' id={id}>
      <img className='poster' src={img} alt={`Poster of ${title} movie`}/>
    </div>
  )
}

export default Card;
