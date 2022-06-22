import React from 'react'
import HeaderContainer from '../../components/header'
import LoginContainer from '../../containers/login'

interface LoginRouteProps {
  role: string
}

const LoginRoute: React.FC<LoginRouteProps> = ({ role }) => {
  return (
    <>
      <HeaderContainer />
      <LoginContainer role={role} />
    </>
  )
}

export default LoginRoute
