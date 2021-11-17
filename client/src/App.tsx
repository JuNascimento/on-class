import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const [message, setMessage] = useState('')

  function base64DecodeUnicode(str: string) {
    // Convert Base64 encoded bytes to percent-encoding, and then get the original string.
    const percentEncodedStr = atob(str)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')

    return decodeURIComponent(percentEncodedStr)
  }

  const socketClient = new WebSocket('ws://localhost:8082')

  socketClient.addEventListener('open', () => {
    console.log('temos conexao!')

    socketClient.send('oi, tudo bem?')
  })

  socketClient.addEventListener('message', event => {
    // event.data.text().then((text: any) => {
    //   console.log(text)
    //   setMessage(text)
    // })
    setMessage(event.data)
    console.log('q isso', event.data)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={message} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
    </div>
  )
}

export default App
