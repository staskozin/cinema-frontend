import React from 'react';
import ReactDOM from 'react-dom';

import Movies from './components/Movies';

import 'normalize.css';
import './index.scss';

ReactDOM.render(
  <>
    <Header />
    <Movies />
  </>,
  document.getElementById('app')
);
