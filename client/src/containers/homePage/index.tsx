import React from 'react'
import { getSessionStorage } from '../../components/helpers'
import { HomePage } from '../../components/homePage'

const HomePageContainer: React.FC = () => {
  const redirectDashboard = (role: string) => {
    if (
      (role === 'student' && getSessionStorage('student')) ||
      (role === 'teacher' && getSessionStorage('teacher'))
    ) {
      window.location.href = `http://localhost:3000/${role}/dashboard`
    }

    window.location.href = `http://localhost:3000/${role}/login`
  }

  return <HomePage redirectDashboard={redirectDashboard} />
}

export default HomePageContainer
