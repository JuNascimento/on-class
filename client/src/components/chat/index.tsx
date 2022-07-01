import React, { useContext } from 'react'
import ChatContext from '../../context/chatContext'
import ChatInput from '../chatInput'
import ChatMessages from '../chatWindow'
import { ArrowSvg, ChatSvg } from '../icons'
import { ChatLabel, InteractionItem } from '../interactions/index.style'
import { ChatHeader, ChatIcons, ChatBody } from './index.style'

const Chat: React.FC = () => {
  const { setToggleChat, toggleChat, chat, setChat, sendMessage, getUser } =
    useContext(ChatContext)

  return (
    <InteractionItem
      data-testid='icons'
      id='chat-icon'
      isChat={true}
      isOpen={toggleChat}
    >
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
            <ChatMessages chat={chat} user={getUser()} />
            <ChatInput
              sendMessage={sendMessage}
              user={getUser()}
              chat={chat}
              setChat={setChat}
            />
          </ChatBody>
        )}
      </div>
    </InteractionItem>
  )
}

export default Chat
