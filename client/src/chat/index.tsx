import React, { useState, useEffect, useRef } from 'react'
import { HubConnectionBuilder } from '@microsoft/signalr'
import ChatInput from '../chatInput'
import ChatWindow from '../chatWindow'

interface Props {
  setToggleChat: (state: boolean) => void
  toggleChat: boolean
}

const Chat: React.FC<Props> = ({ setToggleChat, toggleChat }) => {
  const [connection, setConnection] = useState<any>(null)
  const [chat, setChat] = useState([])
  const latestChat: any = useRef(null)

  latestChat.current = chat

  useEffect(() => {
    const newConnection: any = new HubConnectionBuilder()
      .withUrl('http://localhost:25100/chat')
      .withAutomaticReconnect()
      .build()

    console.log('Chegou aqui 1!')

    setConnection(newConnection)

    console.log('Chegou aqui 2!')
  }, [])

  useEffect(() => {
    if (connection) {
      console.log('olhaaaaa eu')
      connection
        .start()
        .then((result: any) => {
          console.log('Connected!')

          connection.on(
            'ReceiveMessage',
            (message: string, message2: string) => {
              console.log('chegou auqi')
              const updatedChat: any = [...latestChat.current]
              updatedChat.push(message)

              setChat(updatedChat)
            }
          )
        })
        .catch((e: any) => console.log('Connection failed: ', e))
    }
  }, [connection])

  const sendMessage = async (user: any, message: any) => {
    const chatMessage = {
      user: user,
      message: message,
    }

    if (connection.connectionStarted) {
      try {
        await connection.send('SendMessage', user, message)
      } catch (e) {
        console.log(e)
      }
    } else {
      alert('No connection to server yet.')
    }
  }

  return (
    <>
      <ChatWindow chat={chat} onClick={() => setToggleChat(!toggleChat)} />
      {/* <hr /> */}
      <ChatInput sendMessage={sendMessage} />
    </>
  )
}

export default Chat
