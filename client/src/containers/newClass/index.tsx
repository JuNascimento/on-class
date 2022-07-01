import React, { useState } from 'react'
import ErrorTip from '../../components/error'
import { getSessionStorage } from '../../components/helpers'
import {
  InputFieldsColumn,
  Label,
  Select,
  Input,
  Title,
  LoginButton,
} from '../../components/homePage/index.style'

interface NewClassProps {
  role: string
  setNewClassModal: (state: boolean) => void
  userSubjetcs: any[]
  setClasses: any
  classes: any
}

const NewClassContainer: React.FC<NewClassProps> = ({
  role,
  setNewClassModal,
  userSubjetcs,
  setClasses,
  classes,
}) => {
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [subject, setSubject] = useState({ id: null, disciplina: null })
  const [dateError, setDateError] = useState(false)

  const handleDate = (value: any) => {
    if (value !== '') {
      setDate(value)
    } else {
      setDate(null)
    }
  }

  const handleHour = (value: any) => {
    if (value !== '') {
      setTime(value)
    } else {
      setTime(null)
    }
  }

  const handleSubject = (value: any) => {
    if (value !== '') {
      setSubject({
        ...subject,
        id: userSubjetcs[parseInt(value)].id,
        disciplina: userSubjetcs[parseInt(value)].disciplina,
      })
    } else {
      setSubject({
        ...subject,
        id: null,
        disciplina: null,
      })
    }
  }

  const createClass = async () => {
    const url = 'http://localhost:25100/Aulas/CriarAula'
    const user = getSessionStorage('teacher')

    const classStartDate = `${date}T${time}:00.000`

    const data = {
      instrutor: {
        id: user.instrutor_id,
        nome: user.nome,
      },
      disciplina: {
        id: subject.id,
        disciplina: subject.disciplina,
      },
      data_inicio: classStartDate,
      data_fim: '2022-07-13T15:51:00.000',
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(data),
    })

    const responseJson = await response.json()
    if (response.ok) {
      const newClass = {
        data_fim: responseJson.aulaNova.data_fim,
        data_inicio: responseJson.aulaNova.data_inicio,
        disciplina: {
          id: responseJson.aulaNova.disciplina.id,
          disciplina: responseJson.aulaNova.disciplina.disciplina,
        },
        id: responseJson.aulaNova.id,
        instrutor: {
          id: responseJson.aulaNova.instrutor.id,
          name: responseJson.aulaNova.instrutor.name,
        },
        uuid: responseJson.aulaNova.uuid,
      }

      setNewClassModal(false)
      setClasses([...classes, newClass])
    }

    if (responseJson.errors) {
      setDateError(true)
    }
  }

  const shouldDisableButton = () => {
    return !(date && time)
  }

  const currentDay = new Date().getDate()
  const currentMonth = new Date().getMonth() + 1
  let lastMonth = currentMonth + 3
  if (lastMonth === 13) {
    lastMonth = 1
  } else if (lastMonth === 14) {
    lastMonth = 2
  } else if (lastMonth === 15) {
    lastMonth = 3
  }

  return (
    <>
      <Title>Crie nova aula</Title>
      <InputFieldsColumn>
        <Label>Disciplina</Label>
        <Select onChange={e => handleSubject(e.target.value)}>
          <option key={'subject-avaliable-none'} value=''>
            -----------
          </option>
          {userSubjetcs.map((key, value) => {
            return (
              <option key={`subject-avaliable-${value}`} value={value}>
                {key.disciplina}
              </option>
            )
          })}
        </Select>
        <Label>Data</Label>
        <Input
          type='date'
          id='birthday'
          showError={false}
          onChange={e => handleDate(e.target.value)}
        />
        <Label>Horário</Label>
        <Input
          type='time'
          id='time'
          showError={false}
          onChange={e => handleHour(e.target.value)}
        />
        <LoginButton
          isDisabled={shouldDisableButton()}
          onClick={() => createClass()}
        >
          Criar nova aula
        </LoginButton>
        {dateError && (
          <ErrorTip
            type={'new-class'}
            messageError={`Data ou hora inválidas. Permitido somente aulas com início entre 7h e 22h, até ${currentDay}/${lastMonth}.`}
          />
        )}
      </InputFieldsColumn>
    </>
  )
}

export default NewClassContainer
