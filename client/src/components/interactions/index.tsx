import React from 'react'
import ChatContainer from '../../containers/chat'
import {
  CameraSvg,
  MicrophoneSvg,
  ShareScreenSvg,
  FullScreenSvg,
  SupportSvg,
  ArrowSvg,
} from '../icons'
import {
  Interaction,
  InteractionControls,
  InteractionGroup,
  InteractionItem,
} from './index.style'

interface ClassInteractionsProps {
  videoRef: any
  role: any
  setToggleSupportMaterial: any
  toggleSupportMaterial: any
  handleCamera: any
  handleMichophone: any
  handleShareScreen: any
  handleFullScreen: any
}

const ClassInteractions: React.FC<ClassInteractionsProps> = ({
  videoRef,
  role,
  setToggleSupportMaterial,
  toggleSupportMaterial,
  handleCamera,
  handleMichophone,
  handleShareScreen,
  handleFullScreen,
}) => {
  return (
    <Interaction data-testid='interaction-container'>
      <video width='100%' height='100%' ref={videoRef}></video>
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
            <CameraSvg />
          </InteractionItem>
          <InteractionItem
            data-testid='icons'
            onClick={() => handleMichophone()}
          >
            <MicrophoneSvg />
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
          <ChatContainer role={role} />
          <InteractionItem data-testid='icons'>
            <SupportSvg />
          </InteractionItem>
        </InteractionGroup>
      </InteractionControls>
    </Interaction>
  )
}

export default ClassInteractions
