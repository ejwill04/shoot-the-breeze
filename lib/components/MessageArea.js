import React from 'react';

export const MessageArea = (props) => {
  const {message} = props

  return (
    <ul>
      <li>{message}</li>
    </ul>
  )
}
