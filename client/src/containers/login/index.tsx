import React, { useState } from 'react'
import User from '../../components/user'
import { setSessionStorage } from '../../components/helpers'

interface Props {
  role: string
}

const LoginContainer: React.FC<Props> = ({ role }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorWithoutRegister, setErrorWithoutRegister] = useState(false)
  const [errorWrongInfo, setErrorWrongInfo] = useState(false)

  const showError = (type: string) => {
    if (type === 'wrong information') {
      setErrorWrongInfo(true)
    } else {
      setErrorWithoutRegister(true)
    }
  }

  const handleChange = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async (username: string, password: string) => {
    const url = 'http://localhost:25100/Login'

    const data = {
      username,
      password,
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const responseJson = await response.json()

    if (response.ok) {
      setErrorWrongInfo(false)

      if (
        (responseJson.role === 'Instrutor' && role === 'teacher') ||
        (responseJson.role === 'Estudante' && role === 'student')
      ) {
        setSessionStorage(role, responseJson)
        window.location.href = `http://localhost:3000/${role}/dashboard`
      } else {
        showError('wrong information')
      }
    }

    if (responseJson.message === 'Usuário ou senha inválidos!') {
      showError('wrong information')
    }
  }

  return (
    <User
      role={role}
      showPassword={showPassword}
      handleLogin={handleLogin}
      handleChange={handleChange}
      showError={errorWrongInfo}
    />
  )
}

export default LoginContainer
