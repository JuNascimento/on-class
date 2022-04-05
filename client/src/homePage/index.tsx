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
      <Title>Bem vinda(o) ao on-class app!</Title>
      <Subtitle>Faça seu login abaixo ou se cadastre</Subtitle>
      <Roles>
        <Role direction='row'>
          <ManTeacherSvg />
          <div>
            <Subtitle>Professor(a)</Subtitle>
            <Link data-testid='login-teacher' to='/teacher/login'>
              <LoginButton isDisabled={false}>Entrar</LoginButton>
            </Link>
          </div>
        </Role>
        <Role direction='row'>
          <PersonSvg width={'100px'} />
          <div>
            <Subtitle data-testid='login-student'>Aluno(a)</Subtitle>
            <Link to='/student/login'>
              <LoginButton isDisabled={false}>Entrar</LoginButton>
            </Link>
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
