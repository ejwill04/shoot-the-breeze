import React from 'react'


export default class MessagesInput extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      value: '',
    };
  }
  handleSubmit() {
    this.setState({
      message: this.state.value
    })
  }
  updateMessageField(e) {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return(
    <div>
    <input onChange={ (e) => this.updateMessageField(e) }
           type='text'
           placeholder='Message'
         />
    <button onClick={(e) => this.handleSubmit()}>Submit</button>
    <button>Clear</button>
    <p>{this.state.message}</p>
     </div>
    );
  }
}
