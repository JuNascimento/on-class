import React from 'react'
import { PersonSvg } from '../icons'
import { PersonInfo, Photo, Info, InfoItem } from './index.style'

interface Props {
  userInfo: any
}

const PersonInformation: React.FC<Props> = ({ userInfo }) => {
  const personName = userInfo.name
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
