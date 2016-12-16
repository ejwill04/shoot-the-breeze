import React from 'react'
import moment from 'moment'

export const RenderMessages = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        console.log(message)
        return (
          <p>
            <ul>{moment(message.id).format('MMMM Do, h:mma')}</ul>
            <ul>{message.input}</ul>
          </p>
        )
      })}
    </div>
  )
}
