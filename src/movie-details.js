import React, { Component } from 'react';
import './movie-details.css';
import { Link } from 'react-router-dom';
import { getMovie, getVideo } from './api-calls';
import tater from './potatos.png';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      videos: null,
      error: '',
    }
  }

  componentDidMount() {
    getMovie(Number(window.location.href.split('/')[3]))
      .then(data => {
        this.setState({movie: data.movie})
      })
    .catch(error => this.setState({ error: 'Something went wrong!'}))

    getVideo(Number(window.location.href.split('/')[3]))
    .then(video => {
      this.setState({videos: video.videos})
    })
    .catch(error => this.setState({ error: 'Video is unavailable'}))
  }

  render() {
    return (
      !this.state.movie ?
      <div className='loading'>
      <h1>LOADING</h1>
      <img src={tater} className="tater-logo" alt="logo" />
      </div>

      : this.state.movie &&
      <article className='article'>
        <div className='backdrop-container'>

        <img className='backdrop' id={Number(this.state.movie.id)}
        src={this.state.movie.backdrop_path} alt={`Backdrop of ${this.state.movie.title} movie`}/>
        </div>
        <div className='details'>
          <Link to='/'>
            <button className='return-btn' >Return to main menu</button>
          </Link>
          <h1 className='movie-title'>{this.state.movie.title}</h1>
          <h3 className='average-rating'>Average Rating: {this.state.movie.average_rating}</h3>
          <h3 className='release-date'>Release date: {this.state.movie.release_date}</h3>

          <h3>Overview: {this.state.movie.overview}</h3>

          <h3>Genres: {this.state.movie.genres.join(', ')}</h3>

          {this.state.movie.budget > 0 &&
            <h3>Budget: {this.state.movie.budget}</h3>
          }

          {this.state.movie.revenue > 0 &&
          <h3>Revenue: {this.state.movie.revenue}</h3>
          }

          <h3>Runtime: {this.state.movie.runtime}</h3>

          {this.state.movie.tagline.length > 1 &&
            <h3>Tagline: {this.state.movie.tagline}</h3>
          }

        </div>
      </article>
    )
  }
}

export default Details;
