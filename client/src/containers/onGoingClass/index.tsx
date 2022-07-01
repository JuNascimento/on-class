import React, { useEffect, useState } from 'react'
import {
  OnGoingClass,
  ClassInfo,
  ClassContent,
  RemainingClassTime,
} from './index.style'
import PersonInformation from '../../components/personInformation/index'
import Reactions from '../../components/reactions'
import InteractionContainer from '../interactions'
import SupportMaterialContainer from '../suportMaterial'
import VideoContainer from '../video'
import { getSessionStorage } from '../../components/helpers'
import ChatContainer from '../chat'

interface Props {
  role: string
}

const OnGoingClassContainer: React.FC<Props> = ({ role }) => {
  const [toggleSupportMaterial, setToggleSupportMaterial] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [classInfo, setClassInfo] = useState({})

  const getClassInformation = () => {
    const selectedClass = sessionStorage.getItem(`${role}CurrentClass`)
    const classInfoObj = selectedClass && JSON.parse(selectedClass)
    setClassInfo(classInfoObj)
  }

  useEffect(() => {
    getClassInformation()
  }, [])

  const getUserInformation = () => {
    const user = getSessionStorage(role)
    const userInfoObject = {
      id: user.instrutor_id,
      name: user.nome,
    }
    setUserInfo(userInfoObject)
  }

  useEffect(() => {
    getUserInformation()
  }, [])

  return (
    <VideoContainer>
      <ChatContainer role={role}>
        <OnGoingClass data-testid='on-going-class-container'>
          <ClassInfo>
            <PersonInformation userInfo={userInfo} classInfo={classInfo} />
            <RemainingClassTime data-testid='remaining-class-time'>
              Tempo restante: 59:45
            </RemainingClassTime>
            <Reactions />
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
      </ChatContainer>
    </VideoContainer>
  )
}

export default OnGoingClassContainer
