import React from 'react'

interface Props {
  user: string
  message: string
}

const Message: React.FC<Props> = ({ user, message }) => {
  console.log('entrou aqui socorr', user)
  return (
    <div
      style={{
        background: '#eee',
        borderRadius: '5px',
        padding: '0 10px',
        fontSize: '14px',
      }}
    >
      <p>
        <strong>{user.nome}</strong>:
      </p>
      <p>{message}</p>
    </div>
  )
}

export default Message
