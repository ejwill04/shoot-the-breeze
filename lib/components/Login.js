import React from 'react';

export const Login = ({ authorize, setUser, text, user }) => {
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