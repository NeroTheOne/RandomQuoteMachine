class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.fetchQuoteAPI = this.fetchQuoteAPI.bind(this);
  }

  render() {
    return (
      <Card/>
    );
  };
}


class Card extends React.Component {
  render() {
    return (
      <div id="card">
        <div className="row">
          <div id="quote">"This is a quote"</div>
        </div>

        <div id="logo"></div>
        <div id="author"></div>
      </div>
    );
  };
}

const appRoot = document.getElementById('app');
ReactDOM.render(<RandomQuoteMachine/>, appRoot);
