import React, { Component } from 'react';
import SortedAlohaList from './SortedAlohaList';

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Snow',
        },
        {
          id: 2,
          firstName: 'Test',
          lastName: 'Doe',
        },
        {
          id: 3,
          firstName: 'Jane',
          lastName: 'Doe',
        },
        {
          id: 4,
          firstName: 'Sasha',
          lastName: 'Doe',
        },
        {
          id: 5,
          firstName: 'Masha',
          lastName: 'Doe',
        },
      ],
    };
  }

  setUsers = (users) =>
    this.setState({
      users,
    });

  render() {
    const { users } = this.state;

    return (
      <>
        <SortedAlohaList users={users} setUsers={this.setUsers} />
      </>
    );
  }
}

export default AlohaDashboard;
