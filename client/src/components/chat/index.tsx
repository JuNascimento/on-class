import React, { useState, useEffect, useRef } from 'react'
import ChatInput from '../chatInput'
import ChatMessages from '../chatWindow'
import { ArrowSvg, ChatSvg } from '../icons'
import { ChatLabel } from '../video/index.style'
import SignalRClient from '../helpers/signalR'
import { ChatHeader, ChatIcons, ChatBody } from './index.style'

interface Props {
  setToggleChat: (state: boolean) => void
}

const Chat: React.FC<Props> = ({ setToggleChat }) => {
  const [connection, setConnection] = useState<any>(null)
  const [chat, setChat] = useState([])
  const latestChat: any = useRef(null)
  const signalR = new SignalRClient()

  latestChat.current = chat

  useEffect(() => {
    const newConnection = signalR.create('http://localhost:25100/chat')
    setConnection(newConnection)
  }, [])

  useEffect(() => {
    if (connection) {
      signalR.receive(connection, latestChat, setChat)
    }
  }, [connection])

  return (
    <>
      <ChatHeader onClick={() => setToggleChat(false)}>
        <ChatIcons>
          <ChatSvg />
          <ChatLabel>Chat</ChatLabel>
        </ChatIcons>
        <ChatIcons>
          <ArrowSvg rotate={'rotate(0)'} />
        </ChatIcons>
      </ChatHeader>
      <ChatBody>
        <ChatMessages chat={chat} setToggleChat={setToggleChat} />
        <ChatInput
          sendMessage={signalR.send(connection, 'rafa', 'eu')}
          connection={connection}
        />
      </ChatBody>
    </>
  )
}

export default Chat
