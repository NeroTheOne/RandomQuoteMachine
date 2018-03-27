import React from 'react';
import ReactDOM from 'react-dom';

const Quote = (props) => (
  <div className="quote">
    <i className="quote__icon fas fa-quote-left"></i>
    <p classNam="quote__text">{props.quoteText}</p>
  </div>
);

export default Quote;
