import React, { useState, useRef, useEffect } from 'react'
import { getSessionStorage } from '../../components/helpers'
import SignalRClient from '../../components/helpers/signalR'
import ChatContext from '../../context/chatContext'

interface Props {
  children: any
  role: string
}

const ChatContainer: React.FC<Props> = ({ children, role }) => {
  // const ChatContainer: React.FC<Props> = ({ role }) => {
  //   const [toggleChat, setToggleChat] = useState(false)
  //   const [connection, setConnection] = useState<any>(null)
  //   const [chat, setChat] = useState([])
  //   const latestChat: any = useRef(null)
  //   const signalR = new SignalRClient()

  //   latestChat.current = chat

  //   const connectChat = async () => {
  //     //console.log('foi chamado socorro')
  //     const newConnection = signalR.create('http://localhost:25100/chat')
  //     //console.log(`newConnection : ${newConnection}`)
  //     await newConnection.start()
  //     await signalR.send(newConnection, 'Rafffaa', 'aasdasd')
  //   }

  //   useEffect(() => {
  //     connectChat()
  //   }, [])

  //   const getUser = () => {
  //     const user = getSessionStorage(role)

  //     return user
  //   }

  //   const sendMessage = () => {
  //     const sessionStorageItem = sessionStorage.getItem('connectionChat')
  //     if (sessionStorageItem) {
  //       return JSON.parse(sessionStorageItem)
  //     }
  //   }

  //   return (
  // <InteractionItem
  //   data-testid='icons'
  //   id='chat-icon'
  //   isChat={true}
  //   isOpen={toggleChat}
  // >
  //   <Chat
  //     setToggleChat={setToggleChat}
  //     user={getUser()}
  //     toggleChat={toggleChat}
  //     chat={chat}
  //     sendMessage={sendMessage}
  //   />
  // </InteractionItem>
  //   )

  const [toggleChat, setToggleChat] = useState(false)
  const [connection, setConnection] = useState<any>(null)
  const [chat, setChat] = useState([])

  const latestChat: any = useRef(null)
  latestChat.current = chat

  const signalR = new SignalRClient()

  const connectChat = async () => {
    const newConnection = signalR.create('http://localhost:25100/chat')
    setConnection(newConnection)
    newConnection.on("ReceiveMessage", (user: any, message: any) => {
      console.log(`${user} - ${message}`)
      
  });
    await newConnection.start()
  }

  useEffect(() => {
    connectChat()
  }, [])

  const sendMessage = async (user: any, message: any) => {
    await signalR.send(connection, user, message)
  }

  const receiveMessage = async (user: any, message: any) => {
    await signalR.receive(connection, user, message)
  }

  useEffect(() => {
    const user = getUser()
    receiveMessage(user, chat)
  }, [chat])

  const getUser = () => {
    const user = getSessionStorage(role)

    return user
  }

  const contextValue = {
    connection,
    setToggleChat,
    toggleChat,
    chat,
    setChat,
    sendMessage,
    getUser,
    receiveMessage,
  }

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  )
}

export default ChatContainer
