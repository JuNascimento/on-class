import React, { useState, useEffect } from 'react'
import { getSessionStorage, setSessionStorage } from '../../components/helpers'
import Subjects from '../../components/subjects'

type Subject = {
  id: number
  disciplina: string
}

interface Props {
  role: string
}

const SubjectsContainer: React.FC<Props> = ({ role }) => {
  const [showSubjects, setShowSubjects] = useState(false)
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
      console.error('deu erro')
    }
  }

  return (
    <Subjects
      role={role}
      subjects={subjects}
      checkSelectedItem={checkSelectedItem}
      chooseSubject={chooseSubject}
      saveSubjects={saveSubjects}
    />
  )
}

export default SubjectsContainer
