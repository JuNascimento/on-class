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

const HomePageContainer: React.FC = () => {
  return (
    <HomePage data-testid='login-screen-container'>
      <Title>Bem vindo(a) ao on-class app!</Title>
      <Subtitle>Faça seu login abaixo</Subtitle>
      <Roles>
        <Role direction='row'>
          <ManTeacherSvg />
          <div>
            <Subtitle>Professor(a)</Subtitle>
            <Link data-testid='login-teacher' to='/teacher/login'>
              <LoginButton>Entrar</LoginButton>
            </Link>
          </div>
        </Role>
        <Role direction='row'>
          <PersonSvg width={'100px'} />
          <div>
            <Subtitle data-testid='login-student'>Aluno(a)</Subtitle>
            <Link to='/student/login'>
              <LoginButton>Entrar</LoginButton>
            </Link>
          </div>
        </Role>
        <Role direction='row'>
          <QuestionMarkSvg />
          <div>
            <Subtitle data-testid='login-student'>
              Não tem cadastro ainda?
            </Subtitle>
            <Link to='/student/login'>
              <LoginButton>Cadastre-se aqui!</LoginButton>
            </Link>
          </div>
        </Role>
      </Roles>
    </HomePage>
  )
}

export default HomePageContainer
