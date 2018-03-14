import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: undefined,
      quoteAuthor: undefined
    };
    this.fetchData = this.fetchData.bind(this);
    this.fetchData();
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
      <div class="row" id="quote-box">
        <div class="row" id="quote-text">
          <p>
            <i src="./vendors/fonts/quote-left.svg"></i>
            {this.state.quoteText}
          </p>
          <p id="quote-author">- {this.state.quoteAuthor}</p>
        </div>
        <div>
          <div>
            <i class="ion-social-twitter quote-icon"></i>
            <i class="ion-social-facebook quote-icon"></i>
            <button onClick={this.fetchData}>Next quote</button>
          </div>
        </div>
      </div>
    );
  };
}


ReactDOM.render(<RandomQuoteMachine/>, document.getElementById('app'));
