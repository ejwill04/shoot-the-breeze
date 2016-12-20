import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import MessageInput  from './MessageInput';
import { RenderMessages } from './RenderMessages';
import FilterBar from './FilterBar';
import { Login } from './Login';
import UserList from './UserList';


export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      messagesArray: [],
      searchResults: null,
      user: null,
      currentDirection: 'down',
    };
  }

  componentDidMount() {
    firebase.database().ref('messages').on('value', (snapshot) => {
      const messagesFromFirebase = this.createArray(snapshot.val());
      this.setState({ messagesArray: messagesFromFirebase });
    });
  }

  createArray(object) {
    const firebaseKeys = object ? Object.keys(object) : [];
    const messages = [];
    firebaseKeys.map((key) => {
      const singleMessage = object[key];
      singleMessage['firebaseId'] = key;
      messages.push(singleMessage);
    });
    return messages;
  }

  displayMessage(message) {
    const addDataToObj = Object.assign(message,
      { id: Date.now() },
      { userName: this.state.user.displayName },
      { usersEmail: this.state.user.email });
    firebase.database().ref('messages').push(addDataToObj);
    this.state.messagesArray.push(addDataToObj);
    this.setState({ messagesArray: this.state.messagesArray });
  }

  handleSort(newDirection) {
    if (newDirection !== this.state.currentDirection && this.state.searchResults) {
      const sortedArray = this.state.searchResults.reverse();
      this.setState({ searchResults: sortedArray, currentDirection: newDirection });
    } else if (newDirection !== this.state.currentDirection) {
      const sortedArray = this.state.messagesArray.reverse();
      this.setState({ messagesArray: sortedArray, currentDirection: newDirection });
    }
  }

  handleSearch(search) {
    const searchResults = this.state.messagesArray.filter((object) => {
      return object.input.indexOf(search) >= 0;
    });
    this.setState({ searchResults });
  }

  userSearch(e) {
    const userResults = this.state.messagesArray.filter((object) => {
      return object.userName.indexOf(e) >= 0;
    });
    this.setState({ searchResults: userResults });
  }


  render() {
    return (
      <div className='application'>
        <FilterBar
          handleSort={this.handleSort.bind(this)}
          handleSearch={this.handleSearch.bind(this)}
          />
        <UserList
            messages={this.state.messagesArray}
            userSearch={this.userSearch.bind(this)}
            loggedInUser={this.state.user}
          />
        <RenderMessages
          messages={this.state.searchResults ? this.state.searchResults : this.state.messagesArray}
          user={this.state.user}
          />
        <Login
          authorize={signIn}
          setUser= { (userFromFireBase) => {
            this.setState({ user: userFromFireBase.user });
          }}
          text="login"
          user={this.state.user}
          />
        <MessageInput
          input={this.state.input}
          message={this.state.messagesArray}
          displayMessage={this.displayMessage.bind(this)}
          key={ this.state.messagesArray.id }
          user={this.state.user}
        />
      </div>
    );
  }
}
