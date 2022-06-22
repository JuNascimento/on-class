import React from 'react'
import { Roles, LoginButton } from '../../components/homePage/index.style'
import { Title, SubjectsBoard, SubjectItem } from './index.style'

interface Props {
  role: any
  subjects: any
  checkSelectedItem: any
  chooseSubject: any
  saveSubjects: any
}

const Subjects: React.FC<Props> = ({
  role,
  subjects,
  checkSelectedItem,
  chooseSubject,
  saveSubjects,
}) => {
  const title =
    role === 'teacher'
      ? 'Escolha as matérias que quer ensinar'
      : 'Escolha as matérias que quer aprender'

  return (
    <>
      <Title>{title}</Title>
      <Roles>
        <SubjectsBoard>
          {subjects.map((_value: any, key: any) => {
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
          <LoginButton isDisabled={true} onClick={() => saveSubjects()}>
            Começar
          </LoginButton>
        </SubjectsBoard>
      </Roles>
    </>
  )
}

export default Subjects
