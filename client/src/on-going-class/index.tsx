import React, { useState } from 'react'
import {
  OnGoingClass,
  ClassInfo,
  Class,
  RemainingClassTime,
} from './index.style'
import StudentInformationContainer from '../studentInformation/index'
import ReactionsContainer from '../reactions/index'
import StudentVideoContainer from '../studentVideo/index'
import SupportMaterialContainer from '../supportMaterial'

interface Props {
  type: string
}

const OnGoingClassContainer: React.FC<Props> = ({ type }) => {
  const [toggleSupportMaterial, setToggleSupportMaterial] = useState(false)

  return (
    <OnGoingClass data-testid='on-going-class-container'>
      <ClassInfo>
        <StudentInformationContainer type={type} />
        <RemainingClassTime data-testid='remaining-class-time'>
          Tempo restante: 57:14
        </RemainingClassTime>
        <ReactionsContainer />
      </ClassInfo>
      <Class>
        <StudentVideoContainer
          setToggleSupportMaterial={setToggleSupportMaterial}
          toggleSupportMaterial={toggleSupportMaterial}
          type={type}
        />
        <SupportMaterialContainer
          type={type}
          toggleSupportMaterial={toggleSupportMaterial}
        />
      </Class>
    </OnGoingClass>
  )
}

export default OnGoingClassContainer
