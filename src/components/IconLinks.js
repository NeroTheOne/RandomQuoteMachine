import React from 'react';
import ReactDOM from 'react-dom';

const IconLinks = (props) => (
  <div className="icon-links">
    <a className="icon-links__link" href={props.getURL('t')} target="_blank">
      <i className="ion-social-twitter"></i>
    </a>
    <a
      href="#"
      className="icon-links__link"
    ><i className="ion-social-facebook"></i></a>
  </div>
);

export default IconLinks;

//                 <a
//                   href={this.getEncodedQuote('twitter')}
//                   target="_blank"
//                   class="quote-icon"><i class="ion-social-twitter"></i>
//                 </a>
//                 <a href="#" class="quote-icon"><i class="ion-social-facebook"></i></a>
