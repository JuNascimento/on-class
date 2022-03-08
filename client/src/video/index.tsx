import React, { useState } from 'react'
import {
  CameraSvg,
  MicrophoneSvg,
  ShareScreenSvg,
  FullScreenSvg,
  ChatSvg,
  SupportSvg,
  ArrowSvg,
} from '../icons'
import {
  Video,
  VideoControls,
  IconsGroup,
  Icon,
  ChatLabel,
} from './index.style'

interface Props {
  // eslint-disable-next-line
  setToggleSupportMaterial: any
  toggleSupportMaterial: boolean
  type: string
}

const VideoContainer: React.FC<Props> = ({
  setToggleSupportMaterial,
  toggleSupportMaterial,
  type,
}) => {
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

  // const la = async () => {
  //   const stream = await window.navigator.mediaDevices.getUserMedia({
  //     video: true,
  //     audio: true,
  //   })

  //   const video = document.getElementById('video-source')
  //   console.log('aaa', video)
  //   if (video) {
  //     video.src = stream
  //     // video.play()
  //   } else {
  //     console.log('deu erro')
  //   }
  // }

  // la()

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  return (
    <Video data-testid='video-container'>
      <video width='100%' height='100%' controls={false} autoPlay={true} loop>
        <source
          src='http://techslides.com/demos/sample-videos/small.mp4'
          type='video/mp4'
        />
      </video>
      {type === 'student' && (
        <VideoControls data-testid='video-controls-top' direction='top'>
          <IconsGroup data-testid='icons-group'>
            <Icon
              data-testid='icons'
              id='arrow-icon'
              onClick={() => setToggleSupportMaterial(!toggleSupportMaterial)}
            >
              <ArrowSvg isOpen={toggleSupportMaterial} />
            </Icon>
          </IconsGroup>
        </VideoControls>
      )}
      <VideoControls data-testid='video-controls-bottom' direction='bottom'>
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
          <Icon data-testid='icons' onClick={() => toggleFullScreen()}>
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
    </Video>
  )
}

export default VideoContainer
