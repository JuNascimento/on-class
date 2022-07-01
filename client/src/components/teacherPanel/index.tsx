import React, { useEffect, useState } from 'react'
import NewClassContainer from '../../containers/newClass'
import SubjectsContainer from '../../containers/subjetcs'
import NotImplemented from '../notImplemented'
import { getSessionStorage } from '../helpers'
import { LoginButton } from '../homePage/index.style'
import { ModalContainer } from '../modal'
import {
  Dashboard,
  Class,
  Classes,
  ClassInfo,
  Lado,
  Lados,
  StudentName,
  Subtitle,
  SubtitleLabel,
} from './index.style'

interface ClassType {
  instrutor: {
    id: number
    name: string
  }
  disciplina: {
    id: number
    disciplina: string
  }
  data_inicio: string
  data_fim: string
}

const TeacherPanel: React.FC = () => {
  const [newClassModal, setNewClassModal] = useState(false)
  const [editSubjectsModal, setEditSubjectsModal] = useState(false)
  const [userSubjets, setUserSubjects] = useState([])
  const [classes, setClasses] = useState([])
  const [notImplementedError, setNotImplementedError] = useState(false)

  const getUserSubjects = async () => {
    const user = getSessionStorage('teacher')
    const roleId = user.instrutor_id
    const url = `http://localhost:25100/Disciplinas/GetDisciplinasPorInstrutor/${roleId}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + user.token,
        'Content-Type': 'application/json',
      },
    })

    const responseSubjects = await response.json()
    setUserSubjects(responseSubjects)
  }

  useEffect(() => {
    getUserSubjects()
  }, [newClassModal])

  const getClassesAvaliable = async () => {
    const user = getSessionStorage('teacher')
    const url = `http://localhost:25100/Aulas/GetAulas`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + user.token,
        'Content-Type': 'application/json',
      },
    })

    const responseClasses = await response.json()
    setClasses(responseClasses)
  }

  useEffect(() => {
    getClassesAvaliable()
  }, [])

  const goToClass = (classObject: any) => {
    sessionStorage.setItem('teacherCurrentClass', JSON.stringify(classObject))
    window.location.href = `http://localhost:3000/teacher/class`
  }

  const handleNotImplementedError = () => {
    setNotImplementedError(true)
  }

  const showNextClasses = () => {
    const user = getSessionStorage('teacher')
    const roleId = user.instrutor_id

    const teacherNextClasses = classes.filter((value: any) => {
      return value.instrutor.id === roleId
    })

    return teacherNextClasses.map((key: any, value) => {
      return (
        <Class
          key={`next-class-${value}`}
          shouldFocous={value === 0}
          nextClasses={true}
        >
          <ClassInfo>
            {new Date(key.data_inicio).toLocaleDateString()}, &thinsp;
            {new Date(key.data_inicio).toTimeString().slice(0, 5)}
          </ClassInfo>
          <ClassInfo>Disciplina: {key.disciplina.disciplina}</ClassInfo>
          <ClassInfo>Professor(a): {key.instrutor.nome}</ClassInfo>
          <ClassInfo>Material de apoio: nenhum</ClassInfo>
          <LoginButton
            isDisabled={false}
            onClick={() =>
              value === 0 ? goToClass(key) : handleNotImplementedError()
            }
          >
            {value === 0 ? 'Entrar na aula' : 'Editar aula'}
          </LoginButton>
        </Class>
      )
    })
  }

  const showCompletedClasses = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key: number) => {
      return (
        <Class
          key={`completed-class-${key}`}
          shouldFocous={false}
          nextClasses={false}
        >
          <StudentName>Pedro Furtado - Português</StudentName>
          <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
          <ClassInfo>Professor(a): Julia Nascimento</ClassInfo>
          <ClassInfo>Material de apoio: nenhum</ClassInfo>
        </Class>
      )
    })
  }

  return (
    <Dashboard>
      <Lados>
        <Lado>
          <Subtitle>
            <SubtitleLabel>Próximas aulas</SubtitleLabel>
          </Subtitle>
          <Classes>
            {showNextClasses().length > 0 ? (
              showNextClasses()
            ) : (
              <p>Não tem aulas agendadas</p>
            )}
          </Classes>
          <LoginButton
            isDisabled={false}
            onClick={() => setNewClassModal(true)}
          >
            Abrir novo horário
          </LoginButton>
        </Lado>
        <Lado>
          <Subtitle>
            <SubtitleLabel>Aulas concluídas</SubtitleLabel>
          </Subtitle>
          <Classes>{showCompletedClasses()}</Classes>
          <LoginButton
            isDisabled={false}
            onClick={() => setEditSubjectsModal(true)}
          >
            Editar disciplinas escolhidas
          </LoginButton>
        </Lado>
      </Lados>
      {newClassModal && (
        <ModalContainer setcloseModal={setNewClassModal}>
          <NewClassContainer
            role={'teacher'}
            setNewClassModal={setNewClassModal}
            userSubjetcs={userSubjets}
            setClasses={setClasses}
            classes={classes}
          />
        </ModalContainer>
      )}
      {editSubjectsModal && (
        <ModalContainer setcloseModal={setEditSubjectsModal}>
          <SubjectsContainer role={'teacher'} />
        </ModalContainer>
      )}
      {notImplementedError && (
        <ModalContainer setcloseModal={setNotImplementedError}>
          <NotImplemented />
        </ModalContainer>
      )}
    </Dashboard>
  )
}

export default TeacherPanel
