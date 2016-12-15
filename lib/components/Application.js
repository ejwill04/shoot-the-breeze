import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase'
import MessagesInput  from './MessagesInput';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messagesInput: '',
      };
  }
  render() {
    // if (!this.state.user) {
    //   return (
    //     <div>
    //     Please Login
    //     <Login authorize={signIn} setUser= { (userFromFireBase)=> { this.setState({user: userFromFireBase.user})}} text="login" />
    //     </div>
    //   )
    // }
    return (
      <div>
        <h1>Shoot Thou Breeze</h1>
        {/* <FilterField className='filterField'/> */}
         {/* <SortBtns className='sortBtns'/> */}
        <div className='messagesArea'>{this.state.messagesInput}</div>
        {/*<UsersArea className='usersArea'/>
        <LoggedInAs className='loggedInAs'/> */}
        <MessagesInput />
        {/* <CharCount className='charCount'/>
        <SubmitBtn className='submitBtn'/>
        <ClearBtn className='clearBtn'/> */}
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
