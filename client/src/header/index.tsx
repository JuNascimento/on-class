import React from 'react'
import { Link } from 'react-router-dom'
import { removeItemSessionStorage } from '../helpers'
import { Header, Title, Logout } from './index.style'

const HeaderContainer: React.FC = () => {
  return (
    <Header data-testid='header-container'>
      <Link to='/'>
        <Title>on-class app</Title>
      </Link>
      <Link to='/'>
        <Logout onClick={() => removeItemSessionStorage()}>Sair</Logout>
      </Link>
    </Header>
  )
}

export default HeaderContainer
