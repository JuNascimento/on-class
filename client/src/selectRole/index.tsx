import React from 'react'
import { User } from '../user'
import { NewUser } from '../newUser'
import { HomePage, Title, Roles, Role } from '../homePage/index.style'

interface Props {
  showPassword: boolean
  handleNewLogin: (
    username: string,
    name: string,
    password: string,
    birth: string,
    motherName: string,
    cpf: string,
    userRole: string
  ) => void
  handleChange: () => void
  errorWithoutRegister: boolean
  role: string
  handleLogin: (username: string, password: string) => void
  errorWrongInfo: boolean
}

const SelectRoleContainer: React.FC<Props> = ({
  showPassword,
  handleNewLogin,
  handleChange,
  errorWithoutRegister,
  role,
  handleLogin,
  errorWrongInfo,
}) => {
  const title = role !== 'new-user' ? 'Entre na sua conta' : 'Faça seu cadastro'

  return (
    <HomePage data-testid='login-screen-container'>
      <Title>{title}</Title>
      <Roles>
        <Role direction='column'>
          {role === 'new-user' ? (
            <NewUser
              showPassword={showPassword}
              handleNewLogin={handleNewLogin}
              handleChange={handleChange}
              showError={errorWithoutRegister}
            />
          ) : (
            <User
              role={role}
              showPassword={showPassword}
              handleLogin={handleLogin}
              handleChange={handleChange}
              showError={errorWrongInfo}
            />
          )}
        </Role>
      </Roles>
    </HomePage>
  )
}

export default SelectRoleContainer
