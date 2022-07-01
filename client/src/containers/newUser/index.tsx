import React, { useState } from 'react'
import NewUser from '../../components/newUser'
import { setSessionStorage } from '../../components/helpers'

const NewUserContainer: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorWithoutRegister, setErrorWithoutRegister] = useState(false)
  const [errorInvalidDate, setErrorInvalidDate] = useState(false)
  const [errorInvalidCPF, setErrorInvalidCPF] = useState(false)

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
      data_nascimento: birth,
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
    console.log(responseJson)

    if (responseJson.errors === 'Já existe usuário com esse nome') {
      setErrorWithoutRegister(true)
    }

    if (
      responseJson.errors &&
      responseJson.errors['DataNascimento'][0] === 'Idade não permitida!'
    ) {
      setErrorInvalidDate(true)
    }

    if (
      responseJson.errors &&
      responseJson.errors['Cpf'][0] === 'CPF inválido!'
    ) {
      setErrorInvalidCPF(true)
    }

    if (response.ok) {
      setErrorWithoutRegister(false)
      setSessionStorage(userRole, responseJson)
      window.location.href = `http://localhost:3000/${userRole}/subjects`
    }
  }

  return (
    <NewUser
      showPassword={showPassword}
      handleNewLogin={handleNewLogin}
      handleChange={handleChange}
      showError={errorWithoutRegister}
      showErrorInvalidDate={errorInvalidDate}
      showErrorInvalidCPF={errorInvalidCPF}
    />
  )
}

export default NewUserContainer
