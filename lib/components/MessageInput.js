import React from 'react';


export default class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      charLimit: 140,
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

  enableSubmit() {
    let typedChar = this.state.charLimit - this.state.input.length
    return typedChar > 0 && typedChar < this.state.charLimit ? false : true
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Message'
          value={this.state.input}
          onChange={(e)=>{ this.inputField(e) }}/>
        <button
          disabled={this.enableSubmit()}
          type='submit' onClick={() => { this.submitItem()}}>Submit</button>
        <button onClick={()=> this.clearField()}>Clear</button>
        <h5>{this.state.charLimit - this.state.input.length}</h5>
      </div>
    );
  }
};
