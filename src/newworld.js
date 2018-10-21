'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

//this class utilizes react-table additional react library
class App extends React.Component {
  render() {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      },
      {
        name: 'James Fraser-Jones',
        age: 23,
        friend: {
          name: 'Toby Benson',
          age: 19,
        }
      },
      {
        name: 'Edie Woolf',
        age: 22,
        friend: {
          name: 'Todd Jennings',
          age: 21,
        }
      }
    ]

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    return <ReactTable data={data} columns={columns} />;
  }
}

//render the above app in the react entry point in the html file
var domContainer = document.querySelector('#newworld_entry');
ReactDOM.render(e(LikeButton), domContainer);
domContainer = document.querySelector('#newworld_entry2');
ReactDOM.render(e(App), domContainer);
