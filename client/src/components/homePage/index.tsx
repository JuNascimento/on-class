import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Title, Subtitle, Roles, Role, LoginButton } from './index.style'
import { ManTeacherSvg, PersonSvg, QuestionMarkSvg } from '../icons'

interface HomePageProps {
  redirectDashboard: any
}

export const HomePage: React.FC<HomePageProps> = ({ redirectDashboard }) => {
  return (
    <Home data-testid='login-screen-container'>
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
          <PersonSvg />
          <div>
            <Subtitle>Aluno(a)</Subtitle>
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
            <Link to='/signin'>
              <LoginButton isDisabled={false}>Cadastre-se aqui!</LoginButton>
            </Link>
          </div>
        </Role>
      </Roles>
    </Home>
  )
}
