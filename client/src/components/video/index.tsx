import React, { useState, useRef, useEffect } from 'react'
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
import Chat from '../chat'
import styled from 'styled-components'
import SignalRClient from '../helpers/signalR'

const ChatTab = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  position: relative;
  border-radius: 10px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  z-index: 99999;
  flex-direction: column;
`

const ChatIcons = styled.div`
  margin: 0 10px;
`

const ChatHeader = styled.div`
  width: 100%;
  background-color: #ff5757;
  height: 40px;
  max-height: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
`

interface Navigator {
  mediaDevices: {
    getUserMedia(
      options: { video?: boolean; audio?: boolean },
      success: (stream: any) => void,
      error?: (error: string) => void
    ): void
  }
}

interface Props {
  setToggleSupportMaterial: (state: boolean) => void
  toggleSupportMaterial: boolean
  type: string
}

const VideoContainer: React.FC<Props> = ({
  setToggleSupportMaterial,
  toggleSupportMaterial,
  type,
}) => {
  const [connection, setConnection] = useState<any>(null)
  const [toggleChat, setToggleChat] = useState(false)
  const [toggleCamera, setToggleCamera] = useState(true)
  const videoRef = useRef(null)
  const signalR = new SignalRClient()

  const chatOpened = () => {
    return (
      <ChatTab>
        <Chat setToggleChat={setToggleChat} />
      </ChatTab>
    )
  }

  const chatClosed = () => {
    return (
      <ChatHeader onClick={() => setToggleChat(true)}>
        <ChatIcons>
          <ChatSvg />
          <ChatLabel>Chat</ChatLabel>
        </ChatIcons>
        <ChatIcons>
          <ArrowSvg rotate={'rotate(180)'} />
        </ChatIcons>
      </ChatHeader>
    )
  }

  const chat = () => {
    return (
      <Icon
        data-testid='icons'
        id='chat-icon'
        isChat={true}
        isOpen={toggleChat}
      >
        {toggleChat ? chatOpened() : chatClosed()}
      </Icon>
    )
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  const handleVideoData = () => {}

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then(stream => {
        const video: any = videoRef.current
        if (video) {
          console.log('o que é stream', stream)
          /* eslint-disable */
          video.srcObject = stream
          signalR.send(connection, 'professora1', stream)
          video.play()
          let mediaRecorder = new MediaRecorder(stream, {
            mimeType: '',
          })
          mediaRecorder.ondataavailable = handleVideoData
          mediaRecorder.start()
          setInterval(() => mediaRecorder.requestData(), 40)
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  const getVideoOff = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then(() => {
        const video: any = videoRef.current
        if (video) {
          video.srcObject = ''
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleCamera = () => {
    setToggleCamera(!toggleCamera)
  }

  useEffect(() => {
    const newConnection = signalR.create('http://localhost:25100/chat')
    setConnection(newConnection)
  }, [])

  useEffect(() => {
    getVideo()
  }, [videoRef])

  return (
    <Video data-testid='video-container'>
      <video width='100%' height='100%' ref={videoRef}></video>
      {type === 'student' && (
        <VideoControls data-testid='video-controls-top' direction='top'>
          <IconsGroup data-testid='icons-group'>
            <Icon
              data-testid='icons'
              id='arrow-icon'
              onClick={() => setToggleSupportMaterial(!toggleSupportMaterial)}
            >
              <ArrowSvg
                rotate={toggleSupportMaterial ? 'rotate(270)' : 'rotate(90)'}
              />
            </Icon>
          </IconsGroup>
        </VideoControls>
      )}
      <VideoControls data-testid='video-controls-bottom' direction='bottom'>
        <IconsGroup data-testid='icons-group'>
          <Icon data-testid='icons' onClick={() => handleCamera()}>
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
