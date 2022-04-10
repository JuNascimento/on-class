import React from 'react'
import { Error } from './index.style'

interface ErrorProps {
  type: string
  messageError: string
}

const ErrorTip: React.FC<ErrorProps> = ({ type, messageError }) => {
  return (
    <Error type={type}>
      <p>{messageError}</p>
    </Error>
  )
}

export default ErrorTip
