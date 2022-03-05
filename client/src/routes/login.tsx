import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderContainer from '../header'
import {
  HomePage,
  Title,
  Roles,
  Role,
  LoginButton,
  InputFields,
  Input,
  Label,
  Password,
  ShowPasswordToggle,
} from '../homePage/index.style'
import { ClosedEyeSvg, ManTeacherSvg, OpenedEyeSvg, PersonSvg } from '../icons'

interface Props {
  type: string
}

export const Login: React.FC<Props> = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <HeaderContainer />
      <HomePage data-testid='login-screen-container'>
        <Title>Entre na sua conta</Title>
        <Roles>
          <Role direction='column'>
            {type === 'teacher' ? (
              <ManTeacherSvg />
            ) : (
              <PersonSvg width={'100px'} />
            )}
            <InputFields>
              <Label>Email: </Label>
              <Input type='text' />
              <Label>Senha: </Label>
              <Password>
                <Input type={showPassword ? 'text' : 'password'} />
                <ShowPasswordToggle onClick={() => handleChange()}>
                  {showPassword ? <ClosedEyeSvg /> : <OpenedEyeSvg />}
                </ShowPasswordToggle>
              </Password>
            </InputFields>
            <Link to={`/${type}/class`}>
              <LoginButton>Entrar</LoginButton>
            </Link>
          </Role>
        </Roles>
      </HomePage>
    </>
  )
}

export default Login
