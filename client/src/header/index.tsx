import React from 'react'
import { Link } from 'react-router-dom'
import { MenuSvg } from '../icons'
import { Header, Title, Menu } from './index.style'

const HeaderContainer: React.FC = () => {
  return (
    <Header data-testid='header-container'>
      <Menu data-testid='menu-icon'>
        <MenuSvg />
      </Menu>

      <Link to='/'>
        <Title>on-class app</Title>
      </Link>
    </Header>
  )
}

export default HeaderContainer
