import { useContext } from 'react'
import VideoContext from '../../context/videoContext'
import { VideoElement, VideoMax, VideoMin } from './index.style'
import { socket } from '../../containers/video'

const Video: React.FC = () => {
  const {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    callEnded,
    myVdoStatus,
    fullScreen,
    userVdoStatus,
  } = useContext(VideoContext)
  console.log('userVideo', userVideo)
  return (
    <div>
      {/* {userVideo ? (
        <VideoMax>
          <VideoElement
            // controls={false}
            id='player-principal'
            playsInline
            ref={myVideo}
            autoPlay
          />
        </VideoMax>
      ) : ( */}
      <>
        <VideoMax>
          <VideoElement
            controls={false}
            id='player-principal'
            playsInline
            ref={userVideo}
            autoPlay
          />
        </VideoMax>
        <VideoMin>
          <video playsInline ref={myVideo} autoPlay width={'300'} />
        </VideoMin>
      </>
      {/* )} */}
    </div>
  )
}

export default Video
