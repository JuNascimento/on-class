import React, { useState, useContext, useEffect, useRef } from 'react'
import VideoContext from '../../context/videoContext'
import { socket } from '../../containers/video'
import styled from 'styled-components'
import { Input, LoginButton } from '../homePage/index.style'

const OptionsContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

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
    <OptionsContent>
      <div>
        <LoginButton
          isDisabled={false}
          type='primary'
          tabIndex='0'
          onClick={() => {
            console.log('Code copied successfully!')
            alert(me)
          }}
        >
          Copiar código
        </LoginButton>
        <Input
          placeholder='Digite o código'
          size='large'
          value={idToCall}
          onChange={e => setIdToCall(e.target.value)}
        />

        {callAccepted && !callEnded ? (
          <LoginButton
            variant='contained'
            onClick={leaveCall}
            tabIndex='0'
            isDisabled={false}
          >
            &nbsp; Desligar
          </LoginButton>
        ) : (
          <LoginButton
            type='primary'
            onClick={() => {
              callUser(idToCall)
            }}
            tabIndex='0'
            isDisabled={false}
          >
            Ligar
          </LoginButton>
        )}
      </div>

      {call.isReceivingCall && !callAccepted && (
        <div>
          <LoginButton
            variant='contained'
            onClick={() => {
              answerCall()
              Audio.current.pause()
            }}
            tabIndex='0'
            isDisabled={false}
          >
            Atender
          </LoginButton>
          <LoginButton
            variant='contained'
            onClick={() => {
              setIsModalVisible(false)
              Audio.current.pause()
            }}
            tabIndex='0'
            isDisabled={false}
          >
            Recusar
          </LoginButton>
        </div>
      )}
    </OptionsContent>
  )
}

export default Options
