import React from 'react'
import Message from '../chatMessage'

interface Props {
  chat: any
  setToggleChat: any
}

const ChatMessages: React.FC<Props> = ({ chat, setToggleChat }) => {
  const chatItem = () => {
    return (
      <Message
        key={Date.now() * Math.random()}
        user={'Julia'}
        message={'lalala'}
      />
    )
  }

  return (
    <div>
      {chatItem()}
      {chatItem()}
      {chatItem()}
      {chatItem()}
      {chatItem()}
      {chatItem()}
    </div>
  )
}

export default ChatMessages
