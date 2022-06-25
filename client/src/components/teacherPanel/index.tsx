import React, { useEffect, useState } from 'react'
import { getSessionStorage } from '../helpers'
import { LoginButton } from '../homePage/index.style'
import { ModalContainer } from '../modal'
import NewClassContainer from '../newClass'
import {
  Dashboard,
  Class,
  Classes,
  ClassInfo,
  Lado,
  Lados,
  StickyButton,
  StudentName,
  Subtitle,
  SubtitleLabel,
} from './index.style'

const TeacherPanel: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [userSubjets, setUserSubjects] = useState([])
  const [classes, setClasses] = useState([])
  const [nextClasses, setNextClasses] = useState([])
  const [passedClasses, setPassedClasses] = useState([])
  const [hasCompletedClasses, setHasCompletedClasses] = useState(false)

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
  }, [])

  const getClassesAvaliable = async () => {
    const user = getSessionStorage('teacher')
    const roleId = user.instrutor_id
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

    const showClasses = () => {
      const currentTime = new Date().getTime()
      classes.map((key, value) => {
        if (currentTime - new Date(classes[value]).getTime() > 0) {
          setNextClasses([...nextClasses, key])
        } else {
          setPassedClasses([...passedClasses, key])
        }
      })
    }

    showClasses()
  }, [])

  const goToClass = () => {
    window.location.href = `http://localhost:3000/teacher/class`
  }

  const showNextClasses = () => {
    return [1, 2, 3, 4, 5].map((key, value) => {
      return (
        <Class
          key={`next-class-${value}`}
          shouldFocous={value === 0 ? true : false}
          nextClasses={true}
        >
          <ClassInfo>
            {new Date(key.data_inicio).toLocaleDateString()},
            {new Date(key.data_inicio).toTimeString().slice(0, 5)}
          </ClassInfo>
          <ClassInfo>Disciplina: {key.disciplina.name}</ClassInfo>
          <ClassInfo>Material de apoio: nenhum</ClassInfo>
          <LoginButton isDisabled={false}>Editar aula</LoginButton>
        </Class>
      )
    })
  }

  const showCompletedClasses = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key, value) => {
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
            {nextClasses.length > 0 ? (
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
        </Lado>
      </Lados>
      {showModal && (
        <ModalContainer>
          <NewClassContainer
            role={'teacher'}
            setShowModal={setShowModal}
            userSubjetcs={userSubjets}
          />
        </ModalContainer>
      )}
    </Dashboard>
  )
}

export default TeacherPanel
