import React from 'react'
import moment from 'moment'

export const RenderMessages = ({ messages, user }) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <article>
            <p>{user.displayName}</p>
            <p>{moment(message.id).format('MMMM Do, h:mma')}</p>
            <p>{message.input}</p>
          </article>
        )
      })}
    </div>
  )
}
