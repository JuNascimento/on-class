import React, { useState } from 'react'
import {
  CameraSvg,
  MicrophoneSvg,
  ShareScreenSvg,
  FullScreenSvg,
  ChatSvg,
  SupportSvg,
} from '../icons/svg-icons'
import {
  StudantVideo,
  VideoControls,
  IconsGroup,
  Icon,
  ChatLabel,
} from './index.style'

const StudantVideoContainer: React.FC = () => {
  const [toggleChat, setToggleChat] = useState(false)

  const chatOpened = () => {
    return <p>O chat tá aberto</p>
  }

  const chatClosed = () => {
    return (
      <>
        <ChatSvg />
        <ChatLabel>Chat</ChatLabel>
      </>
    )
  }

  const chat = () => {
    return (
      <Icon
        data-testid='icons'
        id='chat-icon'
        isChat={true}
        onClick={() => setToggleChat(!toggleChat)}
      >
        {toggleChat ? chatOpened() : chatClosed()}
      </Icon>
    )
  }

  return (
    <StudantVideo data-testid='studant-video-container'>
      <video width='100%' height='100%' controls={true} autoPlay={true} loop>
        <source
          src='http://techslides.com/demos/sample-videos/small.mp4'
          type='video/mp4'
        />
      </video>
      <VideoControls>
        <IconsGroup data-testid='icons-group'>
          <Icon data-testid='icons'>
            <CameraSvg />
          </Icon>
          <Icon data-testid='icons'>
            <MicrophoneSvg />
          </Icon>
          <Icon data-testid='icons'>
            <ShareScreenSvg />
          </Icon>
          <Icon data-testid='icons'>
            <FullScreenSvg />
          </Icon>
        </IconsGroup>
        <IconsGroup data-testid='icons-group'>
          {chat()}
          <Icon data-testid='icons'>
            <SupportSvg />
          </Icon>
        </IconsGroup>
      </VideoControls>
    </StudantVideo>
  )
}

export default StudantVideoContainer
