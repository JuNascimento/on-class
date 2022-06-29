import React, { useContext, useEffect, useState, useRef } from 'react'
import VideoContext from '../../context/videoContext'

import { socket } from '../../containers/video'
import styled from 'styled-components'

const VideoMin = styled.div`
  position: fixed;
  width: 300px;
  bottom: 30px;
  right: 30px;
  z-index: 99999;
`

const VideoMax = styled.div``

const Video = () => {
  const {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    callEnded,
    userName,
    myVdoStatus,
    fullScreen,
    userVdoStatus,
  } = useContext(VideoContext)

  return (
    <div className='grid'>
      {stream && (
        <div
          style={{ textAlign: 'center' }}
          className='card'
          id={callAccepted && !callEnded ? 'video1' : 'video3'}
        >
          <div style={{ height: '2rem' }}>
            <h3>{myVdoStatus && name}</h3>
          </div>
          <VideoMax>
            <video
              id='player-principal'
              playsInline
              muted
              onClick={fullScreen}
              ref={myVideo}
              autoPlay
              className='video-active'
              style={{
                opacity: `${myVdoStatus ? '1' : '0'}`,
              }}
            />
          </VideoMax>
        </div>
      )}

      {callAccepted && !callEnded && userVideo && (
        <div className='card2' style={{ textAlign: 'center' }} id='video2'>
          <div style={{ height: '2rem' }}>
            <h3>{userVdoStatus && (call.name || userName)}</h3>
          </div>

          <VideoMin className='video-avatar-container'>
            <video
              playsInline
              ref={userVideo}
              onClick={fullScreen}
              autoPlay
              className='video-active'
              style={{
                opacity: `${userVdoStatus ? '1' : '0'}`,
              }}
            />
          </VideoMin>
        </div>
      )}
    </div>
  )
}

export default Video
