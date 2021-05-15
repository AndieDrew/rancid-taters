import React from 'react';
import Card from './movie-card';
import './movie-area.css';

const Area = ({ movies, details }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
      img= {movie.poster_path}
      key= {movie.id}
      id= {movie.id}
      showDetails={details}
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
