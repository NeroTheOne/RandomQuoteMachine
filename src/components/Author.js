import React from 'react';
import ReactDOM from 'react-dom';

const Author = (props) => (
  <div key="author" className="author">
    <p>- {props.quoteAuthor}</p>
  </div>
);

export default Author;
