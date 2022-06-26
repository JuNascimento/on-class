import React, { useEffect, useState } from 'react'
import { getSessionStorage } from '../helpers'
import { LoginButton } from '../homePage/index.style'
import { ModalContainer } from '../modal'
import NewClassContainer from '../../containers/newClass'
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

const TeacherPanel: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [userSubjets, setUserSubjects] = useState([])
  const [classes, setClasses] = useState([])

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

  const editUserSubjects = async () => {
    const user = getSessionStorage('teacher')
    const roleId = user.instrutor_id

    const url = `http://localhost:25100/Disciplinas/EditarDisciplinasInstrutor/`

    const data = {
      instrutorDTO: {
        id: user.instrutor_id,
        nome: user.nome,
      },
      disciplinasDTO: [
        {
          id: 2,
          disciplina: 'Matemática',
        },
      ],
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + user.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const responseSubjects = await response.json()
    setUserSubjects(responseSubjects.disciplinasDTO)
  }

  useEffect(() => {
    getUserSubjects()
  }, [])

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

  const goToClass = () => {
    window.location.href = `http://localhost:3000/teacher/class`
  }

  const showNextClasses = () => {
    return classes.map((key: any, value) => {
      return (
        <Class
          key={`next-class-${value}`}
          shouldFocous={value === 0 ? true : false}
          nextClasses={true}
        >
          <ClassInfo>
            {new Date(key.data_inicio).toLocaleDateString()}, &thinsp;
            {new Date(key.data_inicio).toTimeString().slice(0, 5)}
          </ClassInfo>
          <ClassInfo>Disciplina: {key.disciplina.disciplina}</ClassInfo>
          <ClassInfo>Material de apoio: nenhum</ClassInfo>
          <LoginButton
            isDisabled={false}
            onClick={() => value === 0 && goToClass()}
          >
            {value === 0 ? 'Entrar na aula' : 'Editar aula'}
          </LoginButton>
        </Class>
      )
    })
  }

  const showCompletedClasses = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key, _) => {
      return (
        <Class
          key={`completed-class-${key}`}
          shouldFocous={false}
          nextClasses={false}
        >
          <StudentName>Pedro Furtado - Português</StudentName>
          <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
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
            {classes.length > 0 ? (
              showNextClasses()
            ) : (
              <p>Não tem aulas agendadas</p>
            )}
          </Classes>
          <LoginButton isDisabled={false} onClick={() => setShowModal(true)}>
            Abrir novo horário
          </LoginButton>
        </Lado>
        <Lado>
          <Subtitle>
            <SubtitleLabel>Aulas concluídas</SubtitleLabel>
          </Subtitle>
          <Classes>{showCompletedClasses()}</Classes>
          <LoginButton isDisabled={false} onClick={() => editUserSubjects()}>
            Editar disciplinas escolhidas
          </LoginButton>
        </Lado>
      </Lados>
      {showModal && (
        <ModalContainer>
          <NewClassContainer
            role={'teacher'}
            setShowModal={setShowModal}
            userSubjetcs={userSubjets}
            setClasses={setClasses}
            classes={classes}
          />
        </ModalContainer>
      )}
    </Dashboard>
  )
}

export default TeacherPanel
