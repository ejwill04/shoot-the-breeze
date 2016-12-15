import React from 'react';


export const MessageInput = (props) => {
  const { input, message, handleSubmit, updateMessageField } = props

  return (
  <div>
  <input onChange={ (e) => updateMessageField(e) }
         type='text'
         placeholder='Message'
       />
  <button onClick={ (e) => handleSubmit()}>Submit</button>
  <button>Clear</button>
</div>
  );
};
