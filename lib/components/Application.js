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

  displayMessage(message) {
    let addDateToObj = Object.assign(message, { id: Date.now() });
    firebase.database().ref('messages').push(addDateToObj);
    this.state.messagesArray.push(addDateToObj);
    this.setState({ messagesArray: this.state.messagesArray });
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
        <FilterBar />
        <RenderMessages
          messages={this.state.messagesArray}
          />
        <MessageInput
          input={this.state.input}
          message={this.state.messagesArray}
          displayMessage={this.displayMessage.bind(this)}
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
