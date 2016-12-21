import React from 'react';

export const Login = ({ authorize, setUser, text, user }) => {
  if (user) {
    return (
      <div
        className='loggedInAs'>
        Logged in as <span className='usersName'> {user.displayName.split(' ').slice(0, -1).join(' ')} </span> ({user.email})
      </div>
    );
  }
  return (
    <div className='logInBar'>
      <button
        className='logInBtn'
        onClick={() => authorize().then((fromFirebase) => setUser(fromFirebase)) }
        >{text}
      </button>
    </div>
  );
};
