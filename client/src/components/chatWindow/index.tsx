import React from 'react'
import { useEffect } from 'react'
import Message from '../chatMessage'

interface Props {
  chat: any
  user: any
}

const ChatMessages: React.FC<Props> = ({ chat, user }) => {
  const chatItem = (user: string, message: string) => {
    return (
      <Message key={Date.now() * Math.random()} user={user} message={message} />
    )
  }

  return chat.map((key, valye) => {
    return <div>{chatItem(user, key)}</div>
  })
}

export default ChatMessages
