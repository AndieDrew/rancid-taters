import React, { Component } from 'react';
import Area from './movie-area.js';
import Header from './header.js';
import movieData from './mock-data.js';

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

  render() {
    return (
      <main className = 'App'>
        <Header/>
        <Area className='area' movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
