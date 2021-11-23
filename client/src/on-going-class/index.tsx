import React from 'react'
import { OnGoingClass, ClassInfo, RemainingClassTime } from './index.style'
import StudantInformationContainer from '../studantInformation/index'
import ReactionsContainer from '../reactions/index'

const OnGoingClassContainer: React.FC = () => {
  return (
    <OnGoingClass data-testid='on-going-class-container'>
      <ClassInfo>
        <StudantInformationContainer />
        <RemainingClassTime data-testid='remaining-class-time'>
          Tempo restante: 57:14
        </RemainingClassTime>
        <ReactionsContainer />
      </ClassInfo>
    </OnGoingClass>
  )
}

export default OnGoingClassContainer
