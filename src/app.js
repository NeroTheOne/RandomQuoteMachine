import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QuoteBox from './components/QuoteBox'

import './style/vendors/css/normalize.css';
import './style/style.css';
// <link rel="stylesheet" type="text/css" href="./vendors/css/grid.css">

ReactDOM.render(<QuoteBox/>, document.getElementById('app'));
