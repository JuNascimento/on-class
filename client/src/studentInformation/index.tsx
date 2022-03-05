import React from 'react'
import { PersonSvg } from '../icons'
import { StudentInformation, Photo, Info, InfoItem } from './index.style'

interface Props {
  type: string
}

const StudentInformationContainer: React.FC<Props> = ({ type }) => {
  const personName = type === 'teacher' ? 'Julia Nascimento' : 'Pedro Furtado'
  return (
    <StudentInformation data-testid='student-information-container'>
      <Photo>
        <PersonSvg />
      </Photo>
      <Info>
        <InfoItem>{personName}</InfoItem>
        <InfoItem>Cálculo I</InfoItem>
      </Info>
    </StudentInformation>
  )
}

export default StudentInformationContainer
