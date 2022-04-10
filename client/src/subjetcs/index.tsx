import React, { useState, useEffect } from 'react'
import { getSessionStorage, setSessionStorage } from '../helpers'
import { LoginButton } from '../homePage/index.style'
import { Title, SubjectsBoard, SubjectItem } from './index.style'

type Subject = {
  id: number
  disciplina: string
}

interface Props {
  role: string
  setShowSubjects: (state: boolean) => void
}

const Subjects: React.FC<Props> = ({ role, setShowSubjects }) => {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [chosenSubjects, setChosenSubjects] = useState<string[]>([])

  useEffect(() => {
    const getSubjects = async () => {
      const response = await fetch(
        'http://localhost:25100/Disciplinas/GetDisciplinas',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + getSessionStorage(role).token,
            'Content-Type': 'application/json',
          },
        }
      )

      const responseSubjects = await response.json()

      setSubjects(responseSubjects)
    }

    getSubjects()
  }, [])

  const chooseSubject = (subject: any) => {
    const chosenSubjectsCopy = Array.from(chosenSubjects)

    if (chosenSubjectsCopy.includes(subject)) {
      const index = chosenSubjectsCopy.indexOf(subject)
      chosenSubjectsCopy.splice(index, 1)
      setChosenSubjects(chosenSubjectsCopy)
    } else {
      chosenSubjectsCopy.push(subject)
      setChosenSubjects(chosenSubjectsCopy)
    }
  }

  const checkSelectedItem = (subject: any) => {
    const chosenSubjectsCopy = Array.from(chosenSubjects)

    if (chosenSubjectsCopy.includes(subject)) {
      return true
    } else {
      return false
    }
  }

  const saveSubjects = async () => {
    const url =
      role === 'teacher'
        ? 'http://localhost:25100/Disciplinas/EditarDisciplinasInstrutor'
        : 'http://localhost:25100/Disciplinas/EditarDisciplinasEstudante'

    const teacherData = {
      instrutorDTO: {
        id: getSessionStorage(role).instrutor_id,
        nome: getSessionStorage(role).username,
      },
      disciplinasDTO: chosenSubjects,
    }

    const studentData = {
      estudanteDTO: {
        id: getSessionStorage(role).estudante_id,
        nome: getSessionStorage(role).username,
      },
      disciplinasDTO: chosenSubjects,
    }

    const data = role === 'teacher' ? teacherData : studentData

    console.log('minha data', data)

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getSessionStorage(role).token,
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const sessionStorage = getSessionStorage(role)
      sessionStorage.primeiro_login = false
      setSessionStorage(role, sessionStorage)
      setShowSubjects(false)
    } else {
      console.log('deu erro')
    }
  }

  const title =
    role === 'teacher'
      ? 'Escolha as matérias que quer ensinar'
      : 'Escolha as matérias que quer aprender'

  return (
    <>
      <Title>{title}</Title>
      <SubjectsBoard>
        {subjects.map((_value, key) => {
          return (
            <SubjectItem
              key={`key-${key}`}
              isSelected={checkSelectedItem(subjects[key])}
              onClick={() => chooseSubject(subjects[key])}
            >
              {subjects[key].disciplina}
            </SubjectItem>
          )
        })}
      </SubjectsBoard>
      <LoginButton isDisabled={false} onClick={() => saveSubjects()}>
        Começar
      </LoginButton>
    </>
  )
}

export default Subjects
