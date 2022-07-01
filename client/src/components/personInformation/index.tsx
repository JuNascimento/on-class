import React from 'react'
import { PersonSvg } from '../icons'
import { PersonInfo, Photo, Info, InfoItem } from './index.style'

interface Props {
  userInfo: any
  classInfo: any
}

const PersonInformation: React.FC<Props> = ({ userInfo, classInfo }) => {
  const personName = userInfo.name
  const subjectName = classInfo.disciplina && classInfo.disciplina.disciplina

  return (
    <PersonInfo data-testid='person-information-container'>
      <Photo>
        <PersonSvg />
      </Photo>
      <Info>
        <InfoItem>{personName}</InfoItem>
        <InfoItem>{subjectName}</InfoItem>
      </Info>
    </PersonInfo>
  )
}

export default PersonInformation
