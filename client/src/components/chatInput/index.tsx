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
  /* margin: 0 10px; */
  width: 300px;
  max-width: 300px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ChatInput = styled.input`
  padding: 0 10px;
  height: 100%;
  width: 100%;
  border: none;

  :focus-visible {
    outline: none;
  }
`

const ChatInputContainer = (props: any) => {
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: any) => {
    e.preventDefault()

    const isUserProvided = user && user !== ''
    const isMessageProvided = message && message !== ''

    if (isUserProvided && isMessageProvided) {
      props.sendMessage(props.connection, user, message)
    } else {
      alert('Please insert an user and a message.')
    }
  }

  const onUserUpdate = (e: any) => {
    setUser(e.target.value)
  }

  const onMessageUpdate = (e: any) => {
    setMessage(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      {/* <label htmlFor='user'>User:</label>
      <br />
      <input id='user' name='user' value={user} onChange={onUserUpdate} />
      <br />
      <label htmlFor='message'>Message:</label>
      <br /> */}
      <ChatMessageArea>
        <ChatInput
          type='text'
          id='message'
          name='message'
          value={message}
          onChange={onMessageUpdate}
          placeholder='Digite aqui'
          autoComplete='off'
        />
        <Button>Submit</Button>
      </ChatMessageArea>
    </form>
  )
}

export default ChatInputContainer
