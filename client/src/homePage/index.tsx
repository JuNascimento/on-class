import React from 'react'
import { Link } from 'react-router-dom'
import {
  HomePage,
  Title,
  Subtitle,
  Roles,
  Role,
  LoginButton,
} from './index.style'
import { ManTeacherSvg, PersonSvg, QuestionMarkSvg } from '../icons'
import { getSessionStorage } from '../helpers'

const HomePageContainer: React.FC = () => {
  const redirectDashboard = (role: string) => {
    if (
      (role === 'student' && getSessionStorage('student')) ||
      (role === 'teacher' && getSessionStorage('teacher'))
    ) {
      window.location.href = `http://localhost:3000/${role}/dashboard`
    } else {
      window.location.href = `http://localhost:3000/${role}/login`
    }
  }

  return (
    <HomePage data-testid='login-screen-container'>
      <Title>Bem vinda(o) ao on-class app!</Title>
      <Subtitle>Faça seu login abaixo ou se cadastre</Subtitle>
      <Roles>
        <Role direction='row'>
          <ManTeacherSvg />
          <div>
            <Subtitle>Professor(a)</Subtitle>
            <LoginButton
              isDisabled={false}
              onClick={() => redirectDashboard('teacher')}
            >
              Entrar
            </LoginButton>
          </div>
        </Role>
        <Role direction='row'>
          <PersonSvg width={'100px'} />
          <div>
            <Subtitle data-testid='login-student'>Aluno(a)</Subtitle>
            <LoginButton
              isDisabled={false}
              onClick={() => redirectDashboard('student')}
            >
              Entrar
            </LoginButton>
          </div>
        </Role>
        <Role direction='row'>
          <QuestionMarkSvg />
          <div>
            <Subtitle data-testid='new-user'>Não tem cadastro ainda?</Subtitle>
            <Link to='/new-user'>
              <LoginButton isDisabled={false}>Cadastre-se aqui!</LoginButton>
            </Link>
          </div>
        </Role>
      </Roles>
    </HomePage>
  )
}

export default HomePageContainer
