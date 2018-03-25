import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    console.log('CONSTRUCTOR!');
    this.state = {
      quoteText: undefined,
      quoteAuthor: undefined
    };
    this.getRandomColor = this.getRandomColor.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.getEncodedQuote = this.getEncodedQuote.bind(this);
    this.fetchData();
  }

  getRandomColor() {
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

  getEncodedQuote(website) {
    if (website == 'facebook') {
      let root = 'https://twitter.com/intent/tweet?hashtags=quotes&text=';
      let uri = encodeURI(`${this.state.quoteText} ${this.state.quoteAuthor}`);
      return root + uri;
    } else if (website == 'twitter') {
      let root = 'https://twitter.com/intent/tweet?hashtags=quotes&text=';
      let uri = encodeURI(`${this.state.quoteText} ${this.state.quoteAuthor}`);
      return root + uri;
    }
  }

  fetchData() {
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
      <div class="container"
        style={
          {
            backgroundColor: this.getRandomColor(),
            transition: `backgroundColor 1s ease-in-out`
          }}>
          <div class="row" id="quote-box">
            <div class="row" id="quote-text">
              <i id="icon-quote" class="fas fa-quote-left"></i>
              <p>
                {this.state.quoteText}
              </p>
              <p id="quote-author">- {this.state.quoteAuthor}</p>
            </div>
            <div>
              <div>
                <a
                  href={this.getEncodedQuote('twitter')}
                  target="_blank"
                  class="quote-icon"><i class="ion-social-twitter"></i>
                </a>
                <a href="#" class="quote-icon"><i class="ion-social-facebook"></i></a>
                <button id="quote-btn" onClick={this.fetchData}>Next quote</button>
              </div>
            </div>
          </div>
        </div>
    );
  };
}


ReactDOM.render(<RandomQuoteMachine/>, document.getElementById('app'));
