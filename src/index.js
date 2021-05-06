import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header';
import MoviesPage from './components/Page/MoviesPage/MoviesPage';
import MoviePage from './components/Page/MoviePage/MoviePage';
import Footer from './components/Footer/Footer';

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
    <Footer />
  </Router>,
  document.getElementById('app')
);
