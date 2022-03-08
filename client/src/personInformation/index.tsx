import React from 'react'
import { PersonSvg } from '../icons'
import { PersonInformation, Photo, Info, InfoItem } from './index.style'

interface Props {
  type: string
}

const PersonInformationContainer: React.FC<Props> = ({ type }) => {
  const personName = type === 'teacher' ? 'Julia Nascimento' : 'Pedro Furtado'
  return (
    <PersonInformation data-testid='person-information-container'>
      <Photo>
        <PersonSvg />
      </Photo>
      <Info>
        <InfoItem>{personName}</InfoItem>
        <InfoItem>Cálculo I</InfoItem>
      </Info>
    </PersonInformation>
  )
}

export default PersonInformationContainer
