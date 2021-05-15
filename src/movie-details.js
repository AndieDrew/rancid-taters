import React from 'react';
import Button from './button.js'
import './movie-details.css';

const Details = ({ currentMovie, movies, returnToMenu }) => {

  const findMovie = movies.find(movie => movie.id === Number(currentMovie))

  return (
    <article className='article'>
      <div className='backdrop-container'>
      <img className='backdrop' id={Number(currentMovie)}
      src={findMovie.backdrop_path} alt={`Backdrop of ${findMovie.title} movie`}/>
      </div>
      <Button returnToMenu={returnToMenu}/>
      <div className='details'>
        <h1 className='movie-title'>{findMovie.title}</h1>
        <h3 className='average-rating'>Average Rating: {findMovie.average_rating}</h3>
        <h3 className='release-date'>Release date: {findMovie.release_date}</h3>
        <h3>Overview: </h3>
        <h3>Genres: </h3>
        <h3>Budget: </h3>
        <h3>Revenue: </h3>
        <h3>Runtime: </h3>
        <h3>Tagline: </h3>
      </div>
    </article>
  )
}

export default Details;
