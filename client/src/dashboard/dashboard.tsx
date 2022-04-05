import React from 'react'
import { Link } from 'react-router-dom'
import HeaderContainer from '../header'

interface Props {
  role: string
}

export const Dashboard: React.FC<Props> = ({ role }) => {
  return (
    <>
      <HeaderContainer />
      <Link to={`/${role}/class`}>Clique aqui</Link>
    </>
  )
}

export default Dashboard
