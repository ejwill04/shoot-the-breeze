import React from 'react';

export default class UserList extends React.Component {

  displayFunction() {
    const users = this.getUsers();
    const keys = Object.keys(users);
    const userArray = [];
    keys.map((e, i) => {
      userArray.push(
        <p
          className='user-list-btn'
          key={i}
          onClick={() => { this.props.userSearch(e); }}>
            {users[e].userName.split(' ').slice(0, -1).join(' ')} ({users[e].usersEmail})
        </p>
      );
    });
    return userArray;
  }

  getUsers() {
    let users = {};
    this.props.messages.map((message) => {
      users[message.userName] = {
        userName: message.userName,
        usersEmail: message.usersEmail,
      };
    });
    return users;
  }

  render() {
    return (
      <div className="user-list">
        <h2 className='usersHeader'>Users</h2>
        {this.displayFunction()}
      </div>
    );
  }
}
