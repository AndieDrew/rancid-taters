import React, { Component } from 'react';
import Area from '../Area/movie-area.js';
import Header from '../Header/header.js';
import Details from '../Details/movie-details.js';
import { getMovies } from '../../api-calls';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount() {
    getMovies()
    .then(data => {
      this.setState({movies: data.movies})
    })
    .catch(error => this.setState({ error: 'Something went wrong!'}))
  }

  render() {
    return (

        <main className = 'App'>
          <Header/>
            <Switch>
              <Route exact path ='/'
                render={() => (
                  this.state.error ?
                   <h1>Sorry no movies found 🤷‍♂️</h1>
                  : !this.state.error &&
                    <Area className='area' movies={this.state.movies} />
                )}
              />
              <Route path={`/:id`}
                render={() => (
                   !this.state.error &&
                    <Details/>
                )}
              />
            </Switch>
        </main>

    )
  }
}

export default App;
