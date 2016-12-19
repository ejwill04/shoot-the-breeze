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
      };
  }

  componentDidMount() {
    firebase.database().ref('messages').on('value', (snapshot) => {
      let messagesFromFirebase = this.createArray(snapshot.val())
      this.setState({ messagesArray: messagesFromFirebase })
    })
  }

  createArray(object) {
    const firebaseKeys = object ? Object.keys(object) : [];
    const messages = [];
    firebaseKeys.map((key) => {
           let singleMessage = object[key]
           singleMessage['firebaseId'] = key
           messages.push(singleMessage);
         });
    return messages
  }

  displayMessage(message, user) {
    let addDateToObj = Object.assign(message, { id: Date.now() });
    firebase.database().ref('messages').push(addDateToObj);
    this.state.messagesArray.push(addDateToObj);
    this.setState({ messagesArray: this.state.messagesArray });
  }

  handleReverse() {
    this.setState({ messagesArray: this.state.messagesArray.sort((a, b) => {
      return a.id - b.id;
    }) });
  }

  render() {
    if (!this.state.user) {
      return (
        <div>
          Please Login
          <Login authorize={signIn} setUser= { (userFromFireBase) => { this.setState({ user: userFromFireBase.user })}} text="login" />
        </div>
      )
    }
    return (
      <div className='application'>
        <FilterBar
          messagesArray={this.state.messagesArray}
          handleReverse={this.handleReverse.bind(this)}
          />
        <RenderMessages
          messages={this.state.messagesArray}
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

const Login = ({ authorize, setUser, text }) => {
  return (
    <div>
    <button onClick={() =>  authorize().then((fromFirebase) => setUser(fromFirebase)) }>{text}</button>
    </div>
  );
};
