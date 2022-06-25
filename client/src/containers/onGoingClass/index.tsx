import React, { useState } from 'react'
import {
  OnGoingClass,
  ClassInfo,
  ClassContent,
  RemainingClassTime,
} from './index.style'
import PersonInformation from '../../components/personInformation/index'
import ReactionsContainer from '../../components/reactions'
import InteractionContainer from '../interactions'
import SupportMaterialContainer from '../suportMaterial'

interface Props {
  role: string
}

const OnGoingClassContainer: React.FC<Props> = ({ role }) => {
  const [toggleSupportMaterial, setToggleSupportMaterial] = useState(false)

  return (
    <OnGoingClass data-testid='on-going-class-container'>
      <ClassInfo>
        <PersonInformation type={role} />
        <RemainingClassTime data-testid='remaining-class-time'>
          Tempo restante: 59:45
        </RemainingClassTime>
        <ReactionsContainer />
      </ClassInfo>
      <ClassContent>
        <InteractionContainer
          toggleSupportMaterial={toggleSupportMaterial}
          setToggleSupportMaterial={setToggleSupportMaterial}
          role={role}
        />
        <SupportMaterialContainer
          type={role}
          toggleSupportMaterial={toggleSupportMaterial}
        />
      </ClassContent>
    </OnGoingClass>
  )
}

export default OnGoingClassContainer
