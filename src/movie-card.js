import React from 'react';
import './movie-card.css';
import { Link } from 'react-router-dom'

const Card =({id, img, title}) => {

  return (
    <Link to={`/${id}`}>
    <div className='card' id={id}>
      <img className='poster' id={id} src={img} alt={`Poster of ${title} movie`}/>
    </div>
    </Link>
  )
}

export default Card;
