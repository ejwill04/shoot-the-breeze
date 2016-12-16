import React from 'react'
import firebase, { reference, signIn } from '../firebase'
import MessageInput  from './MessageInput';
import { RenderMessages } from './RenderMessages';


export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      messagesArray: [],
      };
  }

  displayMessage(message) {
    this.state.messagesArray.push(Object.assign(message, { id: Date.now() }))
    this.setState({ messagesArray: this.state.messagesArray });
  }

  render() {
    return (
      <div className='application'>
        <h1>Shoot Thou Breeze</h1>
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
