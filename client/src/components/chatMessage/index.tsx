import React from 'react'

interface Props {
  user: string
  message: string
}

const Message: React.FC<Props> = ({ user, message }) => (
  <div
    style={{
      background: '#eee',
      borderRadius: '5px',
      padding: '0 10px',
      fontSize: '14px',
    }}
  >
    <p>
      <strong>{user}</strong>:
    </p>
    <p>Oi, Pepe</p>
  </div>
)

export default Message
