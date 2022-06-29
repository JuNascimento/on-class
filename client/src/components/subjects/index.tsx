import React from 'react'
import { LoginButton } from '../../components/homePage/index.style'
import {
  Title,
  SubjectsSelector,
  SubjectsItems,
  SubjectsBoard,
  SubjectItem,
} from './index.style'

interface Props {
  role: any
  subjects: any
  checkSelectedItem: any
  chooseSubject: any
  saveSubjects: any
  shouldDisableButton: any
}

const Subjects: React.FC<Props> = ({
  subjects,
  checkSelectedItem,
  chooseSubject,
  saveSubjects,
  shouldDisableButton,
}) => {
  const title = 'Escolha suas matérias de interesse'

  return (
    <>
      <Title>{title}</Title>
      <SubjectsBoard>
        <SubjectsSelector>
          <SubjectsItems>
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
          </SubjectsItems>
          <LoginButton
            onClick={() => saveSubjects()}
            isDisabled={shouldDisableButton()}
            disabled={shouldDisableButton()}
          >
            Começar
          </LoginButton>
        </SubjectsSelector>
      </SubjectsBoard>
    </>
  )
}

export default Subjects
