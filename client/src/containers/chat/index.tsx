import React, { useState, useRef, useEffect } from 'react'
import Chat from '../../components/chat'
import { getSessionStorage } from '../../components/helpers'
import SignalRClient from '../../components/helpers/signalR'
import { InteractionItem } from '../../components/interactions/index.style'

interface Props {
  role: string
}

const ChatContainer: React.FC<Props> = ({ role }) => {
  const [toggleChat, setToggleChat] = useState(false)
  const [connection, setConnection] = useState<any>(null)
  const [chat, setChat] = useState([])
  const latestChat: any = useRef(null)
  const signalR = new SignalRClient()

  latestChat.current = chat

  useEffect(async () => {
    //console.log('foi chamado socorro')
    const newConnection = signalR.create('http://localhost:25100/chat')
    
    await newConnection.start()
    signalR.send(newConnection, 'Rafffaa', 'aasdasd')

  }, [])

  const getUser = () => {
    const user = getSessionStorage(role)

    return user
  }

  const sendMessage = () => {
    const sessionStorageItem = sessionStorage.getItem('connectionChat')
    if (sessionStorageItem) {
      return JSON.parse(sessionStorageItem)
    }
  }

  return (
    <InteractionItem
      data-testid='icons'
      id='chat-icon'
      isChat={true}
      isOpen={toggleChat}
    >
      <Chat
        setToggleChat={setToggleChat}
        user={getUser()}
        toggleChat={toggleChat}
        chat={chat}
        sendMessage={sendMessage}
      />
    </InteractionItem>
  )
}

export default ChatContainer
