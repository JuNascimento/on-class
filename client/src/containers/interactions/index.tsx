import React, { useContext } from 'react'
import ClassInteractions from '../../components/interactions'
import VideoContext from '../../context/videoContext'

interface Props {
  setToggleSupportMaterial: (state: boolean) => void
  toggleSupportMaterial: boolean
  role: string
}

const InteractionContainer: React.FC<Props> = ({
  setToggleSupportMaterial,
  toggleSupportMaterial,
  role,
}) => {
  const {
    handleFullScreen,
    handleScreenSharing,
    handleUpdateVideo,
    handleUpdateMic,
    myMicStatus,
    myVdoStatus,
  } = useContext(VideoContext)

  return (
    <ClassInteractions
      role={role}
      setToggleSupportMaterial={setToggleSupportMaterial}
      toggleSupportMaterial={toggleSupportMaterial}
      handleCamera={handleUpdateVideo}
      videoStatus={myVdoStatus}
      handleMichophone={handleUpdateMic}
      microphoneStatus={myMicStatus}
      handleShareScreen={handleScreenSharing}
      handleFullScreen={handleFullScreen}
    />
  )
}

export default InteractionContainer
