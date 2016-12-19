import React from 'react'
import firebase, { reference, signIn } from '../firebase'
import MessageInput  from './MessageInput';
import { RenderMessages } from './RenderMessages';
import FilterBar from './FilterBar';


export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      messagesArray: [],
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
      let singleMessage = object[key];
      singleMessage['firebaseId'] = key;
      messages.push(singleMessage);
     });
    return messages;
  }

  displayMessage(message, user) {
    let addDateToObj = Object.assign(message, { id: Date.now() });
    firebase.database().ref('messages').push(addDateToObj);
    this.state.messagesArray.push(addDateToObj);
    this.setState({ messagesArray: this.state.messagesArray });
  }

  handleSort(newDirection) {
    if (newDirection !== this.state.currentDirection) {
      const newArray = this.state.messagesArray.reverse();
      this.setState({ messagesArray: newArray, currentDirection: newDirection });
    }
  }

  // handleSearch(usersSearch) {
  //   this.state.messagesArray.filter((message) => {
  //     return message.user === usersSearch;
  //   });
  // }

  render() {
    return (
      <div className='application'>
        <FilterBar
          handleSort={this.handleSort.bind(this)}
          />
        <RenderMessages
          messages={this.state.messagesArray}
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
        />
      </div>
    );
  }
}

const Login = ({ authorize, setUser, text, user }) => {
  if (user) {
    return (
      <div
        className='loggedInAs'>
        Logged in as <span className='usersName'> {user.displayName} </span> ({user.email})
      </div>
    );
  }
  return (
    <div>
    <button
      onClick={() => authorize().then((fromFirebase) => setUser(fromFirebase)) }
      >{text}
    </button>
    </div>
  );
};

// if (!this.state.user) {
//   return (
//     <div>
//       Please Login
//       <Login
//         authorize={signIn}
//         setUser= { (userFromFireBase) => {
//           this.setState({ user: userFromFireBase.user });
//         }}
//         text="login" />
//     </div>
//   );
// }
