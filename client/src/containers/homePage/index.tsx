import React from 'react'
import { getSessionStorage } from '../../components/helpers'
import { HomePage } from '../../components/homePage'

const HomePageContainer: React.FC = () => {
  const redirectDashboard = (role: string) => {
    const hasSession = getSessionStorage(role)
    let url = `http://localhost:3000/${role}/login`

    if (hasSession) {
      if (hasSession.primeiro_login) {
        url = `http://localhost:3000/${role}/subjects`
      } else {
        url = `http://localhost:3000/${role}/dashboard`
      }
    }

    window.location.href = url
  }

  const redirectToNewLogin = () => {
    const url = `http://localhost:3000/signin`
    window.location.href = url
  }

  return (
    <HomePage
      redirectDashboard={redirectDashboard}
      redirectToNewLogin={redirectToNewLogin}
    />
  )
}

export default HomePageContainer
