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
    axios.get('http://quotes.rest/qod.json?category=inspire')
    .then((res) => {
      console.log(res);
      let quoteText = res.data.contents.quotes[0].quote;
      let quoteAuthor = res.data.contents.quotes[0].author;
      this.setState(() => ({
        quoteText,
        quoteAuthor
      }));
      console.log('quoteText:', this.state.quoteText);
      console.log('quoteAuthor:', this.state.quoteAuthor);
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div id="box">
        <div id="quote">{this.state.quoteText}</div>
        <div>
          <div id="sm_links"></div>
          <button>Next quote</button>
        </div>
      </div>
    );
  };
}


ReactDOM.render(<RandomQuoteMachine/>, document.getElementById('app'));
