import React, { useState } from 'react'
import NewUser from '../../components/newUser'
import { setSessionStorage } from '../../components/helpers'

const NewUserContainer: React.FC = () => {
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
      window.location.href = `http://localhost:3000/${userRole}/subjects`
    }

    if (responseJson.message === 'Já existe usuário com esse nome') {
      showError('without register')
    }
  }

  return (
    <NewUser
      showPassword={showPassword}
      handleNewLogin={handleNewLogin}
      handleChange={handleChange}
      showError={errorWithoutRegister}
    />
  )
}

export default NewUserContainer
