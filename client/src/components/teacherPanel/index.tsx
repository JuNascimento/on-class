import React, { useEffect, useState } from 'react'
import { getSessionStorage } from '../helpers'
import { LoginButton } from '../homePage/index.style'
import { ModalContainer } from '../modal'
import NewClassContainer from '../newClass'
import {
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

  const getClassesAvaliable = () => {}

  useEffect(() => {
    getUserSubjects()
  }, [])

  const goToClass = () => {
    window.location.href = `http://localhost:3000/teacher/class`
  }

  const showNextClasses = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((key, value) => {
      return (
        <Class
          key={`next-class-${key}`}
          shouldFocous={false}
          nextClasses={true}
        >
          <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
          <ClassInfo>Material de apoio: nenhum</ClassInfo>
          <LoginButton isDisabled={false}>Editar aula</LoginButton>
        </Class>
      )
    })
  }

  const showCompletedClasses = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((key, value) => {
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
    <>
      <Lados>
        <Lado>
          <Subtitle>
            <SubtitleLabel>Próximas aulas</SubtitleLabel>
          </Subtitle>
          <Classes>
            <Class shouldFocous={true} nextClasses={true}>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
              <LoginButton isDisabled={false} onClick={() => goToClass()}>
                Entrar para a aula
              </LoginButton>
            </Class>
            {showNextClasses()}
          </Classes>
          <StickyButton onClick={() => setShowModal(true)}>
            Abrir novo horário
          </StickyButton>
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
    </>
  )
}

export default TeacherPanel
