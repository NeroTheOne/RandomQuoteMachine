"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RandomQuoteMachine = function (_React$Component) {
  _inherits(RandomQuoteMachine, _React$Component);

  function RandomQuoteMachine(props) {
    _classCallCheck(this, RandomQuoteMachine);

    return _possibleConstructorReturn(this, (RandomQuoteMachine.__proto__ || Object.getPrototypeOf(RandomQuoteMachine)).call(this, props));
  }

  _createClass(RandomQuoteMachine, [{
    key: "render",
    value: function render() {
      return React.createElement(Card, null);
    }
  }]);

  return RandomQuoteMachine;
}(React.Component);

var Card = function (_React$Component2) {
  _inherits(Card, _React$Component2);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "card" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { id: "quote" },
            "\"This is a quote\""
          )
        ),
        React.createElement("div", { id: "logo" }),
        React.createElement("div", { id: "author" })
      );
    }
  }]);

  return Card;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(RandomQuoteMachine, null), appRoot);
