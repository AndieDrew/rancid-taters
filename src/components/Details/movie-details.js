import React, { Component } from 'react';
import './movie-details.css';
import { Link } from 'react-router-dom';
import { getMovie, getVideo } from '../../api-calls';
import tater from '../../images/potatos.png';

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
      !this.state.movie && !this.state.error?
      <div className='loading'>
      <h1 className='loading-h1'>LOADING</h1>
      <img src={tater} className="tater-logo" alt="logo" />
      </div>

      : !this.state.videos && !this.state.error ?
      <div className='loading'>
      <h1>LOADING</h1>
      <img src={tater} className="tater-logo" alt="logo" />
      </div>

      :this.state.error ?
       <h1>Sorry no movies found 🤷‍♂️</h1>

      : this.state.movie &&
      <article className='article'>
        <div className='backdrop-container'>
          <img className='backdrop' id={Number(this.state.movie.id)}
          src={this.state.movie.backdrop_path} alt={`Backdrop of ${this.state.movie.title} movie`}/>
        </div>
        <div className='details-container'>
          <div className='details'>
            <Link to='/'>
              <button className='return-btn' >Return to main menu</button>
            </Link>
            <h1 className='movie-title'>{this.state.movie.title}</h1>
            <h3><span className="first">Average Rating: </span><span className="second">{(this.state.movie.average_rating).toFixed(2)}</span></h3>
            <h3><span className="first">Release date: </span><span className="second">{this.state.movie.release_date}</span></h3>

            {this.state.movie.overview.length > 2 &&
            <h3><span className="first">Overview: </span><span className="second">{this.state.movie.overview}</span></h3>
            }
            {this.state.movie.genres.length > 0 &&
            <h3><span className="first">Genres: </span><span className="second">{this.state.movie.genres.join(', ')}</span></h3>
            }
            {this.state.movie.budget > 0 &&
              <h3><span className="first">Budget: </span><span className="second">{this.state.movie.budget}</span></h3>
            }
            {this.state.movie.revenue > 0 &&
            <h3><span className="first">Revenue: </span><span className="second">{this.state.movie.revenue}</span></h3>
            }
            {this.state.movie.runtime > 0 &&
            <h3><span className="first">Runtime: </span><span className="second">{this.state.movie.runtime}</span></h3>
            }
            {this.state.movie.tagline.length > 1 &&
              <h3><span className="first">Tagline: </span><span className="second">{this.state.movie.tagline}</span></h3>
            }
          </div>
          {this.state.videos.length > 0 &&
            <div className='video-container'>
            <a className='video-link' target="_blank" rel="noreferrer" href={`https://www.youtube.com/embed/${this.state.videos[0].key}`}>Watch Video!</a>
              <iframe
                      data-cy='video'
                      width='654'
                      height='380'
                      src={`https://www.youtube.com/embed/${this.state.videos[0].key}`}
                      frameBorder='0'
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
            </div>
            }
        </div>
      </article>
    )
  }
}

export default Details;
