import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QuoteBox from './components/QuoteBox'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import './style/vendors/css/normalize.css';
import './style/style.css';

ReactDOM.render(<QuoteBox/>, document.getElementById('app'));
