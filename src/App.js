import React, { Component } from 'react';
import Area from './movie-area.js';
import Header from './header.js';
import movieData from './mock-data.js';
import Details from './movie-details.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null,
    };
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
  }

  showMovieDetails = event => {
    this.setState({currentMovie: event.target.id})
  }

  changeState = () => {
    this.setState({currentMovie: null})
  }

  render() {
    return (
      <main className = 'App'>
        <Header currentState={this.state.currentMovie}/>
        {!this.state.currentMovie &&
          <Area className='area' movies={this.state.movies} details={this.showMovieDetails}/>
        }
        {this.state.currentMovie &&
          <Details currentMovie = {this.state.currentMovie} movies = {this.state.movies} returnToMenu={this.changeState}/>
        }
      </main>
    )
  }
}

export default App;
