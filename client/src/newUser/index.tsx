import React, { useState } from 'react'
import {
  LoginButton,
  InputFieldsColumn,
  Input,
  Label,
  Password,
  ShowPasswordToggle,
  InputFieldsRow,
  Select,
} from '../homePage/index.style'
import { ClosedEyeSvg, OpenedEyeSvg } from '../icons'
import ErrorTip from '../error'

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
  showError: boolean
}

export const NewUser: React.FC<Props> = ({
  showPassword,
  handleNewLogin,
  handleChange,
  showError,
}) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [birth, setBirth] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')
  const [motherName, setMotherName] = useState('')
  const [cpf, setCpf] = useState('')

  const shouldDisableButton = () => {
    if (role === 'teacher') {
      return !(
        name !== '' &&
        username !== '' &&
        birth !== '' &&
        password !== '' &&
        cpf !== ''
      )
    } else if (role === 'student') {
      return !(
        name !== '' &&
        username !== '' &&
        birth !== '' &&
        password !== '' &&
        motherName !== ''
      )
    } else {
      return true
    }
  }

  return (
    <>
      <InputFieldsRow>
        <InputFieldsColumn>
          <Label>Tipo de usuário </Label>
          <Select onChange={e => setRole(e.target.value)}>
            <option value=''>-----------</option>
            <option value='teacher'>Professor(a)</option>
            <option value='student'>Aluno(a)</option>
          </Select>
        </InputFieldsColumn>
      </InputFieldsRow>
      {role !== '' && (
        <>
          <InputFieldsRow>
            <InputFieldsColumn>
              <Label>Nome </Label>
              <Input
                type='text'
                id='name'
                showError={false}
                onChange={e => setName(e.target.value)}
              />
            </InputFieldsColumn>
            <InputFieldsColumn>
              <Label>Nome de usuário </Label>
              <Input
                type='text'
                id='username'
                showError={showError}
                onChange={e => setUsername(e.target.value)}
              />
              {showError && (
                <ErrorTip
                  type={'new-user'}
                  messageError={'Nome de usuário já existente.'}
                />
              )}
            </InputFieldsColumn>
          </InputFieldsRow>
          <InputFieldsRow>
            <InputFieldsColumn>
              <Label>Data de nascimento </Label>
              <Input
                type='date'
                id='birthday'
                showError={false}
                onChange={e => setBirth(new Date(e.target.value).toISOString())}
              />
            </InputFieldsColumn>
            {role === 'student' && (
              <InputFieldsColumn>
                <Label>Nome da mãe </Label>
                <Input
                  type='text'
                  id='motherName'
                  showError={false}
                  onChange={e => setMotherName(e.target.value)}
                />
              </InputFieldsColumn>
            )}
            {role === 'teacher' && (
              <InputFieldsColumn>
                <Label>CPF </Label>
                <Input
                  type='text'
                  id='cpf'
                  showError={false}
                  onChange={e => setCpf(e.target.value)}
                />
              </InputFieldsColumn>
            )}
          </InputFieldsRow>
          <InputFieldsRow>
            <InputFieldsColumn>
              <Label>Senha </Label>
              <Password>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  showError={false}
                  onChange={e => setPassword(e.target.value)}
                />
                <ShowPasswordToggle onClick={() => handleChange()}>
                  {showPassword ? <ClosedEyeSvg /> : <OpenedEyeSvg />}
                </ShowPasswordToggle>
              </Password>
            </InputFieldsColumn>
          </InputFieldsRow>
        </>
      )}
      <LoginButton
        isDisabled={shouldDisableButton()}
        disabled={shouldDisableButton()}
        onClick={() =>
          handleNewLogin(username, name, password, birth, motherName, cpf, role)
        }
      >
        Cadastrar
      </LoginButton>
    </>
  )
}
