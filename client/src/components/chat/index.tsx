import React from 'react'
import ChatInput from '../chatInput'
import ChatMessages from '../chatWindow'
import { ArrowSvg, ChatSvg } from '../icons'
import { ChatLabel } from '../interactions/index.style'
import { ChatHeader, ChatIcons, ChatBody } from './index.style'

interface Props {
  setToggleChat: (state: boolean) => void
  user: any
  toggleChat: boolean
  chat: any
  sendMessage: any
}

const Chat: React.FC<Props> = ({
  setToggleChat,
  toggleChat,
  chat,
  sendMessage,
  user,
}) => {
  return (
    <div>
      <ChatHeader onClick={() => setToggleChat(!toggleChat)}>
        <ChatIcons>
          <ChatSvg />
          <ChatLabel>Chat</ChatLabel>
        </ChatIcons>
        <ChatIcons>
          <ArrowSvg rotate={toggleChat ? 'rotate(0)' : 'rotate(180)'} />
        </ChatIcons>
      </ChatHeader>
      {toggleChat && (
        <ChatBody>
          <ChatMessages chat={chat} setToggleChat={setToggleChat} />
          <ChatInput sendMessage={sendMessage} user={user} />
        </ChatBody>
      )}
    </div>
  )
}

export default Chat
