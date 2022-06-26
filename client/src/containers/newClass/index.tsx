import React, { useState } from 'react'
import { LoginButton } from '../../components/homePage/index.style'
import { getSessionStorage } from '../../components/helpers'
import {
  InputFieldsColumn,
  Label,
  Select,
  Input,
} from '../../components/homePage/index.style'
import { CloseSvg } from '../../components/icons'
import { NewClass, Close } from './index.style'

interface NewClassProps {
  role: string
  setShowModal: (state: boolean) => void
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
  setShowModal,
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
    const startDate = new Date(value).toISOString().slice(0, 10)
    const year = startDate.split('-')[0]
    const month = startDate.split('-')[1]
    const day = startDate.split('-')[2]

    setDate({ ...date, day: day, month: month, year: year })
  }

  const handleHour = (value: any) => {
    const hour = value.split(':')[0]
    const minute = value.split(':')[1]

    setTime({ ...time, hour: hour, minute: minute })
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
      setShowModal(false)
      setClasses([...classes, newClass])
    }
  }

  return (
    <NewClass>
      <Close onClick={() => setShowModal(false)}>
        <CloseSvg />
      </Close>
      <article>
        <InputFieldsColumn>
          <Label>Disciplina da aula </Label>
          <Select
            onChange={e =>
              setSubject({
                ...subject,
                id: userSubjetcs[parseInt(e.target.value)].id,
                disciplina: userSubjetcs[parseInt(e.target.value)].disciplina,
              })
            }
          >
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
          <Label>Data da aula </Label>
          <Input
            type='date'
            id='birthday'
            showError={false}
            onChange={e => handleDate(e.target.value)}
          />
          <Label>Hora da aula </Label>
          <Input
            type='time'
            id='time'
            showError={false}
            onChange={e => handleHour(e.target.value)}
          />
          <LoginButton isDisabled={false} onClick={() => createClass()}>
            Criar nova aula
          </LoginButton>
        </InputFieldsColumn>
      </article>
    </NewClass>
  )
}

export default NewClassContainer
