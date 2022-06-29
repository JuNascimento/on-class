import React from 'react'
import { NotImplementedContent, Title, Subtitle } from './index.style'
import Image from './not-implemented.png'

const NotImplemented: React.FC = () => {
  return (
    <NotImplementedContent>
      <Title> Oops!</Title>
      <Subtitle>
        Parece que esse recurso ainda não foi liberado para você!
      </Subtitle>
      <div>
        <img src={Image} width='200' />
      </div>
    </NotImplementedContent>
  )
}

export default NotImplemented
