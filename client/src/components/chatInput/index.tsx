import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-weight: 300;
  background-color: #ff5757;
  cursor: pointer;
  border: 1px solid rgba(248, 210, 210, 0.9);
  margin: 0 10px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;

  :hover {
    background-color: rgba(248, 210, 210, 0.9);
    border: 1px solid #ff5757;
  }

  :focus-visible {
    outline: unset;
  }
`

const ChatMessageArea = styled.article`
  border-top: 1px solid black;
  width: 300px;
  max-width: 300px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input`
  padding: 0 10px;
  height: 100%;
  width: 100%;
  border: none;

  :focus-visible {
    outline: none;
  }
`

interface Props {
  sendMessage: any
  user: any
}

const ChatInput: React.FC<Props> = ({ sendMessage, user }) => {
  const [message, setMessage] = useState('')

  const onSubmit = (e: any) => {
    e.preventDefault()

    const isUserProvided = user && user !== ''
    const isMessageProvided = message && message !== ''

    if (isUserProvided && isMessageProvided) {
      sendMessage()
    }
  }

  const onMessageUpdate = (e: any) => {
    setMessage(e.target.value)
  }

  return (
    <ChatMessageArea>
      <Input
        type='text'
        id='message'
        name='message'
        value={message}
        onChange={onMessageUpdate}
        placeholder='Digite aqui'
        autoComplete='off'
      />
      <Button onClick={onSubmit}>Submit</Button>
    </ChatMessageArea>
  )
}

export default ChatInput
