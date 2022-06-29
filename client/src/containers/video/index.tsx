// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react'
import VideoContext from '../../context/videoContext'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

const URL = 'http://localhost:5000/'
export const socket = io(URL)

const VideoContainer = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const [stream, setStream] = useState()
  const [name, setName] = useState('')
  const [call, setCall] = useState({})
  const [me, setMe] = useState('')
  const [userName, setUserName] = useState('')
  const [otherUser, setOtherUser] = useState('')
  const [myVdoStatus, setMyVdoStatus] = useState(true)
  const [userVdoStatus, setUserVdoStatus] = useState()
  const [myMicStatus, setMyMicStatus] = useState(true)
  const [userMicStatus, setUserMicStatus] = useState()
  const [screenShare, setScreenShare] = useState(false)

  const myVideo = useRef()
  const userVideo = useRef()
  const connectionRef = useRef()
  const screenTrackRef = useRef()

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(currentStream => {
        setStream(currentStream)
        myVideo.current.srcObject = currentStream
      })

    socket.on('me', id => setMe(id))

    socket.on('endCall', () => {
      window.location.reload()
    })

    socket.on('updateUserMedia', ({ type, currentMediaStatus }) => {
      if (currentMediaStatus !== null || currentMediaStatus !== []) {
        switch (type) {
          case 'video':
            setUserVdoStatus(currentMediaStatus)
            break
          case 'mic':
            setUserMicStatus(currentMediaStatus)
            break
          default:
            setUserMicStatus(currentMediaStatus[0])
            setUserVdoStatus(currentMediaStatus[1])
            break
        }
      }
    })

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal })
    })
  }, [])

  const callUser = id => {
    const peer = new Peer({ initiator: true, trickle: false, stream })
    setOtherUser(id)
    peer.on('signal', data => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      })
    })

    peer.on('stream', currentStream => {
      userVideo.current.srcObject = currentStream
    })

    socket.on('callAccepted', ({ signal, nameUser }) => {
      setCallAccepted(true)
      setUserName(nameUser)
      peer.signal(signal)
      socket.emit('updateMyMedia', {
        type: 'both',
        currentMediaStatus: [myMicStatus, myVdoStatus],
      })
    })

    connectionRef.current = peer
    console.log(connectionRef.current)
  }

  const answerCall = () => {
    setCallAccepted(true)
    setOtherUser(call.from)
    const peer = new Peer({ initiator: false, trickle: false, stream })

    peer.on('signal', data => {
      socket.emit('answerCall', {
        signal: data,
        to: call.from,
        userName: name,
        type: 'both',
        myMediaStatus: [myMicStatus, myVdoStatus],
      })
    })

    peer.on('stream', currentStream => {
      userVideo.current.srcObject = currentStream
    })

    peer.signal(call.signal)

    connectionRef.current = peer
    console.log(connectionRef.current)
  }

  const leaveCall = () => {
    setCallEnded(true)

    connectionRef.current.destroy()
    socket.emit('endCall', { id: otherUser })
    window.location.reload()
  }

  const handleUpdateVideo = () => {
    setMyVdoStatus(currentStatus => {
      socket.emit('updateMyMedia', {
        type: 'video',
        currentMediaStatus: !currentStatus,
      })
      stream.getVideoTracks()[0].enabled = !currentStatus
      return !currentStatus
    })
  }

  const handleUpdateMic = () => {
    setMyMicStatus(currentStatus => {
      socket.emit('updateMyMedia', {
        type: 'mic',
        currentMediaStatus: !currentStatus,
      })
      stream.getAudioTracks()[0].enabled = !currentStatus
      return !currentStatus
    })
  }

  const handleScreenSharing = () => {
    if (!myVdoStatus) {
      console.error('Turn on your video to share the content', 2)
      return
    }

    if (!screenShare) {
      navigator.mediaDevices
        .getDisplayMedia({ cursor: true })
        .then(currentStream => {
          const screenTrack = currentStream.getTracks()[0]

          // replaceTrack (oldTrack, newTrack, oldStream);
          connectionRef.current.replaceTrack(
            connectionRef.current.streams[0]
              .getTracks()
              .find(track => track.kind === 'video'),
            screenTrack,
            stream
          )

          // Listen click end
          screenTrack.onended = () => {
            connectionRef.current.replaceTrack(
              screenTrack,
              connectionRef.current.streams[0]
                .getTracks()
                .find(track => track.kind === 'video'),
              stream
            )

            myVideo.current.srcObject = stream
            setScreenShare(false)
          }

          myVideo.current.srcObject = currentStream
          screenTrackRef.current = screenTrack
          setScreenShare(true)
        })
        .catch(error => {
          console.log('No stream for sharing')
        })
    } else {
      screenTrackRef.current.onended()
    }
  }

  const handleFullScreen = e => {
    const elem = document.getElementById('player-principal')

    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen()
    }
  }

  const contextValue = {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall,
    setOtherUser,
    userName,
    myVdoStatus,
    setMyVdoStatus,
    userVdoStatus,
    setUserVdoStatus,
    handleUpdateVideo,
    myMicStatus,
    userMicStatus,
    handleUpdateMic,
    screenShare,
    handleScreenSharing,
    handleFullScreen,
  }

  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContainer
