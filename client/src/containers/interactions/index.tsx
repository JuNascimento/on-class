import React, { useState, useRef, useEffect } from 'react'
import ClassInteractions from '../../components/interactions'
import SignalRClient from '../../components/helpers/signalR'

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
  role: string
}

const InteractionContainer: React.FC<Props> = ({
  setToggleSupportMaterial,
  toggleSupportMaterial,
  role,
}) => {
  const [connection, setConnection] = useState<any>(null)
  const [toggleCamera, setToggleCamera] = useState(true)
  const videoRef = useRef(null)
  const signalR = new SignalRClient()

  const handleVideoData = (): void => {}

  const handleCamera = (): void => {
    throw new Error('Function not implemented.')
  }

  const handleMichophone = (): void => {
    throw new Error('Function not implemented.')
  }

  const handleShareScreen = (): void => {
    throw new Error('Function not implemented.')
  }

  const handleFullScreen = (): void => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then(stream => {
        const video: any = videoRef.current
        if (video) {
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

  useEffect(() => {
    getVideo()
  }, [videoRef])

  return (
    <ClassInteractions
      videoRef={videoRef}
      role={role}
      setToggleSupportMaterial={setToggleSupportMaterial}
      toggleSupportMaterial={toggleSupportMaterial}
      handleCamera={handleCamera}
      handleMichophone={handleMichophone}
      handleShareScreen={handleShareScreen}
      handleFullScreen={handleFullScreen}
    />
  )
}

export default InteractionContainer
