import styled from 'styled-components'

export const ChatHeader = styled.div`
  width: 300px;
  background-color: #ff5757;
  height: 40px;
  max-height: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
`

export const ChatIcons = styled.div`
  margin: 0 10px;
`

export const ChatBody = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  position: relative;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  z-index: 99999;
  flex-direction: column;
  overflow-y: scroll;
`
