import React, { Component } from 'react';
import Area from '../Area/movie-area.js';
import Header from '../Header/header.js';
import Details from '../Details/movie-details.js';
import { getMovies } from '../../api-calls';
import { Switch, Route } from 'react-router-dom';
import tater from '../../images/potatos.png';


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
            <Switch>
              <Route exact path ='/'
                render={() => (

                  !this.state.movies.length && !this.state.error ?
                  <div className='loading'>
                  <h1>LOADING</h1>
                  <img src={tater} className="tater-logo" alt="logo" />
                  </div>

                  : this.state.error ?
                   <h1>Sorry, no movies found</h1>

                  : !this.state.error &&
                  <div>
                    <Header/>
                    <Area className='area' movies={this.state.movies} />
                  </div>
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
