import React from 'react';
import Card from '../Card/movie-card.js';
import './movie-area.css';

const Area = ({ movies }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
      img= {movie.poster_path}
      key= {movie.id}
      id= {movie.id}
      title={movie.title}
      />
    )
  })

  return (
    <div className= 'area'>
      {movieCards}
    </div>
  )
}

export default Area;
