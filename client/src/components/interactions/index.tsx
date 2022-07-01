import React, { useState } from 'react'
import Chat from '../chat'
import {
  CameraSvg,
  MicrophoneSvg,
  ShareScreenSvg,
  FullScreenSvg,
  SupportSvg,
  ArrowSvg,
  MuteMicrophoneSvg,
  CameraOffSvg,
} from '../icons'
import { ModalContainer } from '../modal'
import NotImplemented from '../notImplemented'
import Options from '../options/Options'
import Video from '../VideoTeste/Video'
import {
  Interaction,
  InteractionControls,
  InteractionGroup,
  InteractionItem,
} from './index.style'

interface ClassInteractionsProps {
  role: any
  setToggleSupportMaterial: any
  toggleSupportMaterial: any
  handleCamera: any
  videoStatus: any
  handleMichophone: any
  microphoneStatus: any
  handleShareScreen: any
  handleFullScreen: any
}

const ClassInteractions: React.FC<ClassInteractionsProps> = ({
  role,
  setToggleSupportMaterial,
  toggleSupportMaterial,
  handleCamera,
  videoStatus,
  handleMichophone,
  microphoneStatus,
  handleShareScreen,
  handleFullScreen,
}) => {
  const [notImplementedError, setNotImplementedError] = useState(false)

  return (
    <>
      <Options />
      <Interaction data-testid='interaction-container'>
        <Video />
        {role === 'student' && (
          <InteractionControls data-testid='video-controls-top' direction='top'>
            <InteractionGroup data-testid='icons-group'>
              <InteractionItem
                data-testid='icons'
                id='arrow-icon'
                onClick={() => setToggleSupportMaterial(!toggleSupportMaterial)}
              >
                <ArrowSvg
                  rotate={toggleSupportMaterial ? 'rotate(270)' : 'rotate(90)'}
                />
              </InteractionItem>
            </InteractionGroup>
          </InteractionControls>
        )}
        <InteractionControls
          data-testid='video-controls-bottom'
          direction='bottom'
        >
          <InteractionGroup data-testid='icons-group'>
            <InteractionItem data-testid='icons' onClick={() => handleCamera()}>
              {videoStatus ? <CameraSvg /> : <CameraOffSvg />}
            </InteractionItem>
            <InteractionItem
              data-testid='icons'
              onClick={() => handleMichophone()}
            >
              {microphoneStatus ? <MicrophoneSvg /> : <MuteMicrophoneSvg />}
            </InteractionItem>
            <InteractionItem
              data-testid='icons'
              onClick={() => handleShareScreen()}
            >
              <ShareScreenSvg />
            </InteractionItem>
            <InteractionItem
              data-testid='icons'
              onClick={() => handleFullScreen()}
            >
              <FullScreenSvg />
            </InteractionItem>
          </InteractionGroup>
          <InteractionGroup data-testid='icons-group'>
            <Chat />
            <InteractionItem
              data-testid='icons'
              onClick={() => setNotImplementedError(true)}
            >
              <SupportSvg />
            </InteractionItem>
          </InteractionGroup>
        </InteractionControls>
      </Interaction>
      {notImplementedError && (
        <ModalContainer setcloseModal={setNotImplementedError}>
          <NotImplemented />
        </ModalContainer>
      )}
    </>
  )
}

export default ClassInteractions
