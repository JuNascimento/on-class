import React from 'react'
import {
  OnGoingClass,
  ClassInfo,
  Class,
  RemainingClassTime,
} from './index.style'
import StudantInformationContainer from '../studantInformation/index'
import ReactionsContainer from '../reactions/index'
import StudantVideoContainer from '../studantVideo/index'
import SupportMaterialContainer from '../supportMaterial'

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
      <Class>
        <StudantVideoContainer />
        <SupportMaterialContainer />
      </Class>
    </OnGoingClass>
  )
}

export default OnGoingClassContainer
