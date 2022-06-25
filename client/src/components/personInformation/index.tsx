import React from 'react'
import { PersonSvg } from '../icons'
import { PersonInfo, Photo, Info, InfoItem } from './index.style'

interface Props {
  type: string
}

const PersonInformation: React.FC<Props> = ({ type }) => {
  const personName = type === 'teacher' ? 'Julia Nascimento' : 'Pedro Furtado'
  return (
    <PersonInfo data-testid='person-information-container'>
      <Photo>
        <PersonSvg />
      </Photo>
      <Info>
        <InfoItem>{personName}</InfoItem>
        <InfoItem>Cálculo I</InfoItem>
      </Info>
    </PersonInfo>
  )
}

export default PersonInformation
