'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return 'You liked this.';
      }

      return e('button', { onClick: function onClick() {
          return _this2.setState({ liked: true });
        } }, 'Like');
    }
  }]);

  return LikeButton;
}(React.Component);

//this class utilizes react-table additional react library


var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23
        }
      }, {
        name: 'James Fraser-Jones',
        age: 23,
        friend: {
          name: 'Toby Benson',
          age: 19
        }
      }, {
        name: 'Edie Woolf',
        age: 22,
        friend: {
          name: 'Todd Jennings',
          age: 21
        }
      }];

      var columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: function Cell(props) {
          return React.createElement(
            'span',
            { className: 'number' },
            props.value
          );
        } // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: function accessor(d) {
          return d.friend.name;
        } // Custom value accessors!
      }, {
        Header: function Header(props) {
          return React.createElement(
            'span',
            null,
            'Friend Age'
          );
        }, // Custom header components!
        accessor: 'friend.age'
      }];

      return React.createElement(ReactTable, { data: data, columns: columns });
    }
  }]);

  return App;
}(React.Component);

//render the above app in the react entry point in the html file


var domContainer = document.querySelector('#newworld_entry');
ReactDOM.render(e(LikeButton), domContainer);
domContainer = document.querySelector('#newworld_entry2');
ReactDOM.render(e(App), domContainer);