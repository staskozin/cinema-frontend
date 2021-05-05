import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header';
import MoviesPage from './components/MoviesPage';
import MoviePage from './components/MoviePage';

import 'normalize.css';
import './index.scss';

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route path="/movie/:movie_id" component={MoviePage} />
      <Route path="/contacts">
        <h1>Как добраться</h1>
      </Route>
      <Route path="/">
        <MoviesPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('app')
);
