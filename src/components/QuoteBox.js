import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import ReactDOM from 'react-dom';
import axios from 'axios';
import Quote from './Quote';
import Author from './Author';
import IconLinks from './IconLinks';
import Next from './Next';

export default class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: undefined,
      quoteAuthor: undefined
    };
    this.fetchData();
  }

  getRandomColor = () => {
    console.log('fired randomColor');
    let colors = [
      'rgb(26, 188, 156)', 'rgb(241, 196, 15)',
      'rgb(46, 204, 113)', 'rgb(230, 126, 34)',
      'rgb(231, 76, 60)', 'rgb(236, 240, 241)',
      'rgb(155, 89, 182)', 'rgb(155, 89, 182)',
    ];
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  }

  getURL = (website) => {
    if (website == 'fb') {
      // api link to post
    } else if (website == 't') {
      let root = 'https://twitter.com/intent/tweet?hashtags=quotes&text=';
      let uri = encodeURI(`${this.state.quoteText} ${this.state.quoteAuthor}`);
      return root + uri;
    }
  }

  fetchData = () => {
    console.log('fetchData')
    axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10', {
      headers: {
        'X-Mashape-Key': 'a7MW36eCHMmshwdxbxgPvyiPKrxXp1zoTFIjsnJz9Q5UQLRWJ9',
        'Accept': 'application/json'
      }
    })
    .then((res) => {
      console.log('success\n', res);
      let quoteText = res.data.quote;
      let quoteAuthor = res.data.author;
      this.setState(() => ({
        quoteText,
        quoteAuthor
      }));
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="quote-box">
          <Quote quoteText={this.state.quoteText}/>
          <Author quoteAuthor={this.state.quoteAuthor}/>
        <div className="quote-box__footer">
          <IconLinks getURL={this.getURL}/>
          <Next fetchData={this.fetchData}/>
        </div>
      </div>
    );
  };
}

// export default class QuoteBox extends React.Component {
//   constructor(props) {
//      super(props);
//
//      this.state = {
//         items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
//      }
//      this.handleAdd = this.handleAdd.bind(this);
//   };
//   handleAdd() {
//      var newItems = this.state.items.concat([prompt('Create New Item')]);
//      this.setState({items: newItems});
//   }
//   handleRemove(i) {
//      var newItems = this.state.items.slice();
//      newItems.splice(i, 1);
//      this.setState({items: newItems});
//   }
//   render() {
//      var items = this.state.items.map(function(item, i) {
//         return (
//            <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
//               {item}
//            </div>
//         );
//      }.bind(this));
//
//      return (
//         <div>
//            <button onClick = {this.handleAdd}>Add Item</button>
//
//            <ReactCSSTransitionGroup transitionName = "examples"
//               transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
//               <Quote quoteText={"SUUUP!"}/>
//            </ReactCSSTransitionGroup>
//         </div>
//      );
//   }
// }

// <div class="container"
//         style={
//           {
//             backgroundColor: this.getRandomColor(),
//             transition: `backgroundColor 1s ease-in-out`
//           }}>
//           <div class="row" id="quote-box">
//             <div class="row" id="quote-text">
//               <i id="icon-quote" class="fas fa-quote-left"></i>
//               <p>
//                 {this.state.quoteText}
//               </p>
//               <p id="quote-author">- {this.state.quoteAuthor}</p>
//             </div>
//             <div>
//               <div>
//                 <a
//                   href={this.getEncodedQuote('twitter')}
//                   target="_blank"
//                   class="quote-icon"><i class="ion-social-twitter"></i>
//                 </a>
//                 <a href="#" class="quote-icon"><i class="ion-social-facebook"></i></a>
//                 <button id="quote-btn" onClick={this.fetchData}>Next quote</button>
//               </div>
//             </div>
//           </div>
//         </div>
