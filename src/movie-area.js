import React from 'react';
import Card from './movie-card';
import './movie-area.css';

const Area = ({ movies }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
      title= {movie.title}
      img= {movie.poster_path}
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
