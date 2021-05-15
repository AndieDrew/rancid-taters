import React, { Component } from 'react';
import Area from './movie-area.js';
import Header from './header.js';
import Details from './movie-details.js';
import { getMovie } from './api-calls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null,

    };
  }

  componentDidMount() {
    getMovie()
    .then(data => {
      this.setState({movies: data.movies})
    })
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
        {this.state.error &&
         <h1>Sorry no movies found 🤷‍♂️</h1>}
        {!this.state.currentMovie && !this.state.error &&
          <Area className='area' movies={this.state.movies} details={this.showMovieDetails}/>
        }
        {this.state.currentMovie && !this.state.error &&
          <Details currentMovie = {this.state.currentMovie} movies = {this.state.movies} returnToMenu={this.changeState}/>
        }
      </main>
    )
  }
}

export default App;
