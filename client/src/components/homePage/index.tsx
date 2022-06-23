import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Title, Subtitle, Roles, Role, LoginButton } from './index.style'
import { ManTeacherSvg, PersonSvg, QuestionMarkSvg } from '../icons'

interface HomePageProps {
  redirectDashboard: any
  redirectToNewLogin: any
}

export const HomePage: React.FC<HomePageProps> = ({
  redirectDashboard,
  redirectToNewLogin,
}) => {
  return (
    <Home data-testid='login-screen-container'>
      <Title>Bem vinda(o) ao on-class app!</Title>
      <Subtitle>Faça seu login abaixo ou se cadastre</Subtitle>
      <Roles>
        <Role direction='row'>
          <ManTeacherSvg />
          <>
            <Subtitle>Professor(a)</Subtitle>
            <LoginButton
              isDisabled={false}
              onClick={() => redirectDashboard('teacher')}
            >
              Entrar
            </LoginButton>
          </>
        </Role>
        <Role direction='row'>
          <PersonSvg />
          <>
            <Subtitle>Aluno(a)</Subtitle>
            <LoginButton
              isDisabled={false}
              onClick={() => redirectDashboard('student')}
            >
              Entrar
            </LoginButton>
          </>
        </Role>
        <Role direction='row'>
          <QuestionMarkSvg />
          <>
            <Subtitle data-testid='new-user'>Não tem cadastro ainda?</Subtitle>
            <LoginButton
              isDisabled={false}
              onClick={() => redirectToNewLogin()}
            >
              Cadastre-se aqui!
            </LoginButton>
          </>
        </Role>
      </Roles>
    </Home>
  )
}
