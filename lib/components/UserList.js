import React from 'react';

export default class UserList extends React.Component {

  displayFunction() {
    let users = this.getUsers();
    let keys = Object.keys(users);
    let userArray = [];
    keys.map((e, i) => {
      userArray.push(
        <p
          key={i}
          {users[e].userName}: {users[e].usersEmail}
        </p>
      )
    });
    return userArray;
  }

  getUsers() {
    let users = {};
    this.props.messages.map((message) => {
      users[message.userName] = {
        userName: message.userName,
        usersEmail: message.usersEmail,
      }
    });
    return users;
  }

  render(){
    return (
      <div className="user-list">{this.displayFunction()}</div>
  )}
}
