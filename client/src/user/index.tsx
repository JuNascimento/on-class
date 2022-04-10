import React, { useState } from 'react'
import {
  LoginButton,
  InputFieldsColumn,
  Input,
  Label,
  Password,
  ShowPasswordToggle,
} from '../homePage/index.style'
import { ClosedEyeSvg, ManTeacherSvg, OpenedEyeSvg, PersonSvg } from '../icons'
import ErrorTip from '../error'

interface Props {
  role: string
  showPassword: boolean
  handleChange: () => void
  handleLogin: (username: string, password: string) => void
  showError: boolean
}

export const User: React.FC<Props> = ({
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
    <>
      {role === 'teacher' ? <ManTeacherSvg /> : <PersonSvg width={'100px'} />}
      <InputFieldsColumn>
        {showError && (
          <ErrorTip type='login' messageError={'Usuário ou senha inválidos!'} />
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
    </>
  )
}
