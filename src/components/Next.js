import React from 'react';
import ReactDOM from 'react-dom';

const Next = (props) => (
  <div className="next">
    <button className="next__btn" onClick={props.fetchData}>Next quote</button>
  </div>
);


export default Next;
