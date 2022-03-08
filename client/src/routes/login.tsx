import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderContainer from '../header'
import {
  HomePage,
  Title,
  Roles,
  Role,
  LoginButton,
  InputFieldsColumn,
  Input,
  Label,
  Password,
  ShowPasswordToggle,
  InputFieldsRow,
} from '../homePage/index.style'
import {
  ClosedEyeSvg,
  ManTeacherSvg,
  OpenedEyeSvg,
  PersonSvg,
  QuestionMarkSvg,
} from '../icons'

const NewUser: React.FC = () => {
  return (
    <>
      <Label>Nome: </Label>
      <Input type='text' />
      <Label>Tipo de usuário: </Label>
      <Input type='text' />
    </>
  )
}

interface Props {
  type: string
}

export const Login: React.FC<Props> = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = () => {
    setShowPassword(!showPassword)
  }

  const title = type !== 'new-user' ? 'Entre na sua conta' : 'Faça seu cadastro'

  return (
    <>
      <HeaderContainer />
      <HomePage data-testid='login-screen-container'>
        <Title>{title}</Title>
        <Roles>
          <Role direction='column'>
            {type === 'new-user' ? (
              <>
                <QuestionMarkSvg />
                <InputFieldsColumn>
                  <InputFieldsRow>
                    <Label>Nome: </Label>
                    <Input type='text' />
                    <Label>Email: </Label>
                    <Input type='text' />
                  </InputFieldsRow>
                  <InputFieldsRow>
                    <Label>Data de nascimento: </Label>
                    <Input type='date' />
                    <Label>Telefone: </Label>
                    <Input type='text' />
                  </InputFieldsRow>
                  <InputFieldsRow>
                    <Label>Tipo de usuário: </Label>
                    <Input type='radio' name='role' value='teacher' />
                    <Input type='radio' name='role' value='student' />
                    <Label>Senha: </Label>
                    <Password>
                      <Input type={showPassword ? 'text' : 'password'} />
                      <ShowPasswordToggle onClick={() => handleChange()}>
                        {showPassword ? <ClosedEyeSvg /> : <OpenedEyeSvg />}
                      </ShowPasswordToggle>
                    </Password>
                  </InputFieldsRow>
                </InputFieldsColumn>
                <Link to={'/'}>
                  <LoginButton>Cadastrar</LoginButton>
                </Link>
              </>
            ) : (
              <>
                {type === 'teacher' ? (
                  <ManTeacherSvg />
                ) : (
                  <PersonSvg width={'100px'} />
                )}
                <InputFieldsColumn>
                  <Label>Email: </Label>
                  <Input type='text' />
                  <Label>Senha: </Label>
                  <Password>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <ShowPasswordToggle onClick={() => handleChange()}>
                      {showPassword ? <ClosedEyeSvg /> : <OpenedEyeSvg />}
                    </ShowPasswordToggle>
                  </Password>
                </InputFieldsColumn>
                <Link to={`/${type}/class`}>
                  <LoginButton>Entrar</LoginButton>
                </Link>
              </>
            )}
          </Role>
        </Roles>
      </HomePage>
    </>
  )
}

export default Login
