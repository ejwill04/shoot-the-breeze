import React from 'react'

export const RenderMessages = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        console.log(message)
        return (
          <p>
            <ul>{message.id}</ul>
            <ul>{message.input}</ul>
          </p>
        )
      })}
    </div>
  )
}
