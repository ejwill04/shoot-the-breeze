import React from 'react';

export default class UserList extends React.Component {

  displayFunction() {
    let users = this.getUsers();
    let keys = Object.keys(users);
    let userArray = [];
    keys.map((e, i) => {
      userArray.push(
        <p
          className='user-list-btn'
          key={i}
          onClick={() => { this.props.userSearch(e) }}>
            {users[e].userName}: {users[e].usersEmail}
        </p>
      )
    });
    return userArray;
  }

  // redDot(this) {
  //   console.log(this)
  //   if (messageUser === loggedInUser.displayName) {
  //     console.log(this);
  //   }   
  // }

  getUsers(){
    let users = {}
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
      <div className="user-list">
        {this.displayFunction()}
        </div>
  )}
}
