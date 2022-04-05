import React from 'react'
import { Error } from '../homePage/index.style'

interface ErrorProps {
  messageError: string
}

const ErrorTip: React.FC<ErrorProps> = ({ messageError }) => {
  return (
    <Error>
      <p>{messageError}</p>
    </Error>
  )
}

export default ErrorTip
