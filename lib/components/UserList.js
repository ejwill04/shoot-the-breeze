import React from 'react'

export const UserList = ({ user }) => {
  return (
    <div>
      {messages.map((message, i) => {
        return (
          <article key={i}>
            <p className='message-displayName'>{user.displayName}</p>
            <p className='message-id'>{moment(message.id).format('MMMM Do, h:mma')}</p>
            <p className='message-input'>{message.input}</p>
          </article>
        )
      })}
    </div>
  )
}
