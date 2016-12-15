import React from 'react'
import firebase, { reference, signIn } from '../firebase'
import { MessageInput }  from './MessageInput';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      messageInput: '',
      message: '',
      input: '',
      };
  }

  handleSubmit() {
    this.setState({
      message: this.state.input,
    });
  }

  updateMessageField(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Shoot Thou Breeze</h1>
        <MessageArea
          message={this.state.message}
        />
        <MessageInput
          input={this.state.input}
          message={this.state.message}
          handleSubmit={this.handleSubmit.bind(this)}
          updateMessageField={this.updateMessageField.bind(this)}
        />
      </div>
    );
  }
}
