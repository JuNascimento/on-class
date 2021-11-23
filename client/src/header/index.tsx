import React from 'react'
import { Header, Title, Menu } from './index.style'

const HeaderContainer: React.FC = () => (
  <Header data-testid='header-container'>
    <Menu id='menu-icon' onClick={() => alert('abrir menu')}>
      <svg data-testid='menu-svg' width='30' height='19'>
        <rect y='0' width='30' height='5' fill='black' />
        <rect y='7' width='30' height='5' fill='black' />
        <rect y='14' width='30' height='5' fill='black' />
      </svg>
    </Menu>
    <Title>on-class app</Title>
  </Header>
)

export default HeaderContainer
