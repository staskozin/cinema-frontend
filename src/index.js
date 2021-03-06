import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ScrollToTop from './components/Misc/ScrollToTop';
import Header from './components/Header/Header';
import ContactsPage from './components/Page/ContactsPage/ContactsPage';
import MoviesPage from './components/Page/MoviesPage/MoviesPage';
import MoviePage from './components/Page/MoviePage/MoviePage';
import ShowtimePage from './components/Page/ShowtimePage/ShowtimePage';
import ReservationPage from './components/Page/ReservationPage/ReservationPage';
import Footer from './components/Footer/Footer';

import 'normalize.css';
import './style/index.scss';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <Header />
    <Switch>
      <Route path="/reservation-:reservation_id" component={ReservationPage} />
      <Route path="/showtime-:showtime_id" component={ShowtimePage} />
      <Route path="/movie-:movie_id" component={MoviePage} />
      <Route path="/contacts">
        <ContactsPage />
      </Route>
      <Route path="/">
        <MoviesPage />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('app')
);
