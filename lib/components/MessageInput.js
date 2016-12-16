import React from 'react';


export default class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      };
  }

  submitItem() {
    this.props.displayMessage(this.state);
    this.clearField();
  }

  clearField() {
    this.setState({ input: '' });
  }

  inputField(e){
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Message'
          value={this.state.input}
          onChange={(e)=>{ this.inputField(e) }}/>
        <input type='submit' onClick={() => { this.submitItem()}}/>
      </div>
    );
  }
};
