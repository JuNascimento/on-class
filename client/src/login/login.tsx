import React, { useState } from 'react'
import HeaderContainer from '../header'
import { User } from '../user/user'
import { NewUser } from '../newUser/new-user'
import { HomePage, Title, Roles, Role } from '../homePage/index.style'

interface Props {
  role: string
}

export const Login: React.FC<Props> = ({ role }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  const showError = () => {
    setError(true)
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

    if (response.ok) {
      setError(false)
      window.location.href = `http://localhost:3000/${role}/dashboard`
    }

    const responseJson = await response.json()

    if (responseJson.message === 'Usuário não encontrado!') {
      showError()
    }
    console.log('socorro', responseJson)
  }

  const handleNewLogin = async (
    username: string,
    name: string,
    password: string,
    birth: string,
    motherName: string,
    cpf: string
  ) => {
    const teacherData = {
      username,
      nome: name,
      senha: password,
      data_nascimento: '2022-04-03T22:26:49.906Z',
      cpf: cpf,
    }

    const studentData = {
      username,
      nome: name,
      senha: password,
      data_nascimento: birth,
      nome_mae: motherName,
    }

    const url =
      role === 'teacher'
        ? 'http://localhost:25100/Users/CreateInstrutor'
        : 'http://localhost:25100/Users/CreateEstudante'
    const data = role === 'teacher' ? teacherData : studentData

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setError(false)
      window.location.href = `http://localhost:3000/${role}/dashboard`
    }

    const responseJson = await response.json()

    if (responseJson.message === 'Já existe um registro com o mesmo valor.') {
      showError()
    }
  }

  const title = role !== 'new-user' ? 'Entre na sua conta' : 'Faça seu cadastro'

  return (
    <>
      <HeaderContainer />
      <HomePage data-testid='login-screen-container'>
        <Title>{title}</Title>
        <Roles>
          <Role direction='column'>
            {role === 'new-user' ? (
              <NewUser
                showPassword={showPassword}
                handleNewLogin={handleNewLogin}
                handleChange={handleChange}
                showError={error}
              />
            ) : (
              <User
                role={role}
                showPassword={showPassword}
                handleLogin={handleLogin}
                handleChange={handleChange}
                showError={error}
              />
            )}
          </Role>
        </Roles>
      </HomePage>
    </>
  )
}

export default Login
