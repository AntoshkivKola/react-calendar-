import React, { Component } from "react";
import UserCard from "./UserCard/iindex";

const userDB = [
  {
    id: 1,
    firstName: "John",
    lastName: "Snow",
    age: 25,
  },
  {
    id: 2,
    firstName: "Test",
    lastName: "Doe",
    age: 58,
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Doe",
    age: 98,
  },
  {
    id: 4,
    firstName: "Sasha",
    lastName: "Doe",
    age: 120,
  },
  {
    id: 5,
    firstName: "Masha",
    lastName: "Doe",
    age: 25,
  },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: userDB.map((u) => ({ ...u, isSelected: false })) };
  }


  hendlerSelect = (userId) => {
    const { users } = this.state;
    
    this.setState({ users:users.map((u) => { 
      
      if(u.id === userId){
        u.isSelected = !u.isSelected;
      }
      //u.id === userId ? (u.isSelected = !u.isSelected) : undefined;
      return {...u};
    })})
  };

  mapUser = (user) => <UserCard key={user.id} user={user} hendlerSelect={this.hendlerSelect} />;
 
  render() {
    const { users } = this.state;
    return (
      <section>
        <h1>Users from DB</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

export default UserList;
