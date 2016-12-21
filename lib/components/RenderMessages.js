import React from 'react';
import moment from 'moment';

export const RenderMessages = ({ messages }) => {
  return (
    <div className='messageBody'>
      {messages.map((message, i) => {
        return (
          <article key={i}>
            <p className='message-id'>{moment(message.id).format('MMMM Do, h:mma')}</p>
            <p className='message-displayName'>{message.userName.split(' ').slice(0, -1).join(' ')}</p>
            <p className='message-input'>{message.input}</p>
          </article>
        );
      })}
    </div>
  );
};
