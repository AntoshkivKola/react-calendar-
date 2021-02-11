
import './App.css';
import React from 'react';
import Aloha from './components/Greeting';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          age: 27,
          firstName: 'Josh',
        },
        {
          id: 2,
          age: 2088,
          firstName: 'Test',
        },
        {
          id: 3,
          age: 21,
          firstName: 'Joon',
        },
        {
          id: 4,
          age: 22,
          firstName: 'Joue',
        },
        {
          id: 5,
          age: 20,
          firstName: 'Tim',
        },
      ]
    }
  }

  render() {
    const { users } = this.state;

    const liArray = users.map(({ firstName, age }) => {
      return (
        <li>
          <Aloha name={firstName} age={age} />
        </li>
      );
    })
    return <ul>{liArray}</ul>

  }
}

export default App;
