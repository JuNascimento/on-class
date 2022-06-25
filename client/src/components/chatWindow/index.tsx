import React from 'react'
import Message from '../chatMessage'

interface Props {
  chat: any
  setToggleChat: any
}

const ChatMessages: React.FC<Props> = ({ chat, setToggleChat }) => {
  const chatItem = (user: string, message: string) => {
    return (
      <Message key={Date.now() * Math.random()} user={user} message={message} />
    )
  }

  return <div>{chatItem('Julia', 'mensagem da julia')}</div>
}

export default ChatMessages
