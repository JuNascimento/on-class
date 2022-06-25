import React from 'react'
import { Link } from 'react-router-dom'
import { removeItemSessionStorage } from '../helpers'
import { Head, Title, Logout } from './index.style'

const Header: React.FC = () => {
  return (
    <Head data-testid='header-container'>
      <Link to='/'>
        <Title>on-class app</Title>
      </Link>
      <Link to='/'>
        <Logout onClick={() => removeItemSessionStorage()}>Sair</Logout>
      </Link>
    </Head>
  )
}

export default Header
