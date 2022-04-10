import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import HeaderContainer from '../../header'
import { setSessionStorage } from '../../helpers'
import SelectRoleContainer from '../../selectRole'

interface LoginProps {
  role: string
}

export const LoginContainer: React.FC<LoginProps> = ({ role }) => {
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
        // window.location.href = `http://localhost:3000/${role}/dashboard`
        return <Navigate to={`${role}/dashboard`} />
      } else {
        showError('wrong information')
      }
    }

    if (responseJson.message === 'Usuário ou senha inválidos!') {
      showError('wrong information')
    }
  }

  const handleNewLogin = async (
    username: string,
    name: string,
    password: string,
    birth: string,
    motherName: string,
    cpf: string,
    userRole: string
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
      userRole === 'teacher'
        ? 'http://localhost:25100/Users/CreateInstrutor'
        : 'http://localhost:25100/Users/CreateEstudante'
    const data = userRole === 'teacher' ? teacherData : studentData

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const responseJson = await response.json()

    if (response.ok) {
      setErrorWithoutRegister(false)
      setSessionStorage(userRole, responseJson)
      window.location.href = `http://localhost:3000/${userRole}/dashboard`
    }

    if (responseJson.message === 'Já existe usuário com esse nome') {
      showError('without register')
    }
  }

  return (
    <>
      <HeaderContainer />
      <SelectRoleContainer
        showPassword={showPassword}
        handleNewLogin={handleNewLogin}
        handleChange={handleChange}
        errorWithoutRegister={errorWithoutRegister}
        role={role}
        handleLogin={handleLogin}
        errorWrongInfo={errorWrongInfo}
      />
    </>
  )
}

export default LoginContainer
