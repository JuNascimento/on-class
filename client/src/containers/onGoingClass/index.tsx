import React, { useEffect, useState } from 'react'
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
import { getSessionStorage } from '../../components/helpers'

interface Props {
  role: string
}

const OnGoingClassContainer: React.FC<Props> = ({ role }) => {
  const [toggleSupportMaterial, setToggleSupportMaterial] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [classInfo, setClassInfo] = useState({})

  useEffect(() => {
    const getClassInformation = () => {
      const user = getSessionStorage(role)
      const userInfo = {
        id: user.instrutor_id,
        name: user.nome,
      }

      setUserInfo(userInfo)
    }

    getClassInformation()
  }, [])

  return (
    <OnGoingClass data-testid='on-going-class-container'>
      <ClassInfo>
        <PersonInformation userInfo={userInfo} />
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
