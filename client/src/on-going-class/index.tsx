import React from 'react'
import { OnGoingClass, ClassInfo, RemainingClassTime } from './index.style'

const OnGoingClassContainer: React.FC = () => {
  return (
    <OnGoingClass data-testid='on-going-class-container'>
      <ClassInfo>
        <RemainingClassTime data-testid='remaining-class-time'>
          Tempo restante: 57:14
        </RemainingClassTime>
      </ClassInfo>
    </OnGoingClass>
  )
}

export default OnGoingClassContainer
