import React, { useState } from 'react'
import ErrorTip from '../error'
import { ClosedEyeSvg, ManTeacherSvg, OpenedEyeSvg, PersonSvg } from '../icons'
import {
  LoginButton,
  InputFieldsColumn,
  Input,
  Label,
  Password,
  ShowPasswordToggle,
  Home,
  Role,
  Roles,
  Title,
} from '../homePage/index.style'

interface Props {
  role: string
  showPassword: boolean
  handleChange: () => void
  handleLogin: (username: string, password: string) => void
  showError: boolean
}

const User: React.FC<Props> = ({
  role,
  showPassword,
  handleChange,
  handleLogin,
  showError,
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const shouldDisableButton = () => {
    return !(username !== '' && password !== '')
  }

  return (
    <Home data-testid='login-screen-container'>
      <Title>Entre na sua conta</Title>
      <Roles>
        <Role direction='column'>
          {role === 'teacher' ? (
            <ManTeacherSvg />
          ) : (
            <PersonSvg width={'100px'} />
          )}
          <InputFieldsColumn>
            {showError && (
              <ErrorTip
                type='login'
                messageError={'Usuário ou senha inválidos!'}
              />
            )}
            <Label>Nome de usuário </Label>
            <Input
              showError={false}
              type='username'
              onChange={e => setUsername(e.target.value)}
            />
            <Label>Senha </Label>
            <Password>
              <Input
                showError={false}
                type={showPassword ? 'text' : 'password'}
                onChange={e => setPassword(e.target.value)}
              />
              <ShowPasswordToggle onClick={() => handleChange()}>
                {showPassword ? <ClosedEyeSvg /> : <OpenedEyeSvg />}
              </ShowPasswordToggle>
            </Password>
          </InputFieldsColumn>
          <LoginButton
            onClick={() => handleLogin(username, password)}
            isDisabled={shouldDisableButton()}
            disabled={shouldDisableButton()}
          >
            Entrar
          </LoginButton>
        </Role>
      </Roles>
    </Home>
  )
}

export default User
