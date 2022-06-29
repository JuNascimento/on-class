import React, { useState, useContext, useEffect, useRef } from 'react'
import VideoContext from '../../context/videoContext'
import { socket } from '../../containers/video'

const Options = () => {
  const [idToCall, setIdToCall] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false)
  const Audio = useRef()
  const {
    call,
    callAccepted,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall,
    setOtherUser,
  } = useContext(VideoContext)

  useEffect(() => {
    if (isModalVisible) {
      Audio?.current?.play()
    } else Audio?.current?.pause()
  }, [isModalVisible])

  useEffect(() => {
    if (call.isReceivingCall && !callAccepted) {
      setIsModalVisible(true)
      setOtherUser(call.from)
    } else setIsModalVisible(false)
  }, [call.isReceivingCall])

  return (
    <div>
      <button
        type='primary'
        tabIndex='0'
        onClick={() => {
          console.log('Code copied successfully!')
          alert(me)
        }}
      >
        Copy code
      </button>
      <div style={{ marginBottom: '0.5rem' }}>
        <input
          placeholder='Enter code to call'
          size='large'
          value={idToCall}
          onChange={e => setIdToCall(e.target.value)}
          style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
        />

        {callAccepted && !callEnded ? (
          <button variant='contained' onClick={leaveCall} tabIndex='0'>
            &nbsp; Hang up
          </button>
        ) : (
          <button
            type='primary'
            onClick={() => {
              callUser(idToCall)
            }}
            tabIndex='0'
          >
            Call
          </button>
        )}
      </div>

      {call.isReceivingCall && !callAccepted && (
        <div>
          <button
            variant='contained'
            color='#29bb89'
            onClick={() => {
              answerCall()
              Audio.current.pause()
            }}
            tabIndex='0'
          >
            Answer
          </button>
          <button
            variant='contained'
            onClick={() => {
              setIsModalVisible(false)
              Audio.current.pause()
            }}
            tabIndex='0'
          >
            Decline
          </button>
        </div>
      )}
    </div>
  )
}

export default Options
