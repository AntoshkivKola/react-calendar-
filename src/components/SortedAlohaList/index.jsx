import { Component } from 'react';
import AlohaList from '../AlohaList';

class SortedAlohaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDirectSort: true,
    };
  }
  sortUsers = () => {
    const { isDirectSort } = this.state;
    const { users, setUsers } = this.props;

    const usersCopy = JSON.parse(JSON.stringify(users));

    this.setState({
      isDirectSort: !isDirectSort,
    });
   
    setUsers(
      usersCopy.sort((a, b) => (isDirectSort ? b.id - a.id : a.id - b.id))
    );
  };

  render() {
    const { isDirectSort } = this.state;
    const { users, setUsers } = this.props;
   
    return (
      <>
        <span>Порядок сортировки {isDirectSort ? 'Прямой' : 'Реверс'}</span>
        <AlohaList users={users} setUsers={setUsers}/>
        <button onClick={this.sortUsers}>SORT</button>
      </>
    );
  }
}

export default SortedAlohaList;
