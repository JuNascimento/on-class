import React, { useState } from 'react'
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

interface DateInterface {
  day: null | string
  month: null | string
  year: null | string
}

interface HourInterface {
  hour: null | string
  minute: null | string
}

const NewClassContainer: React.FC<NewClassProps> = ({
  role,
  setNewClassModal,
  userSubjetcs,
  setClasses,
  classes,
}) => {
  const [date, setDate] = useState<DateInterface>({
    day: null,
    month: null,
    year: null,
  })
  const [time, setTime] = useState<HourInterface>({ hour: null, minute: null })
  const [subject, setSubject] = useState({ id: null, disciplina: null })

  const handleDate = (value: any) => {
    if (value !== '') {
      const startDate = new Date(value).toISOString().slice(0, 10)
      const year = startDate.split('-')[0]
      const month = startDate.split('-')[1]
      const day = startDate.split('-')[2]

      setDate({ ...date, day: day, month: month, year: year })
    } else {
      setDate({ ...date, day: null, month: null, year: null })
    }
  }

  const handleHour = (value: any) => {
    if (value !== '') {
      const hour = value.split(':')[0]
      const minute = value.split(':')[1]

      setTime({ ...time, hour: hour, minute: minute })
    } else {
      setTime({ ...time, hour: null, minute: null })
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

    const classStartDate = `${date.year}-${date.month}-${date.day}T${time.hour}:${time.minute}:00.000Z`
    let classFinishDate = ''

    const timeHour = time.hour && parseInt(time.hour) + 1
    classFinishDate = `${date.year}-${date.month}-${date.day}T${timeHour}:${time.minute}:00.000Z`

    const data = {
      instrutor: {
        id: getSessionStorage('teacher').instrutor_id,
        name: getSessionStorage('teacher').nome,
      },
      disciplina: {
        id: subject.id,
        disciplina: subject.disciplina,
      },
      data_inicio: classStartDate,
      data_fim: classFinishDate,
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getSessionStorage(role).token,
      },
      body: JSON.stringify(data),
    })

    const responseJson = await response.json()
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

    if (response.ok) {
      setNewClassModal(false)
      setClasses([...classes, newClass])
    }
  }

  const shouldDisableButton = () => {
    return !(
      subject.id &&
      subject.id !== '' &&
      date.day &&
      date.day !== '' &&
      date.month &&
      date.month !== '' &&
      date.year &&
      date.year !== '' &&
      time.hour &&
      time.hour !== '' &&
      time.minute &&
      time.minute !== ''
    )
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
      </InputFieldsColumn>
    </>
  )
}

export default NewClassContainer
