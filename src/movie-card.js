import React from 'react';
import './movie-card.css';

const Card =({id, img, title, showDetails}) => {

  return (
    <div className='card' id={id} onClick={showDetails}>
      <img className='poster' id={id} src={img} alt={`Poster of ${title} movie`}/>
    </div>
  )
}

export default Card;
