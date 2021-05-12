import React, { Component } from 'react';
import Area from './movie-area.js';
import Card from './movie-card.js';
import movieData from './mock-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
  }

  render() {
    return (
      <main className = 'App' >
        <Area movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
