import styled from 'styled-components'

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8d2d25c;
`

export const ModalContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 520px;
  padding: 10px;
  border: 1px solid #f8d2d2ca;
  background-color: white;
`

export const ModalClose = styled.div`
  width: 100%;
  height: 5%;
`

export const ModalBody = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Close = styled.div`
  text-align: end;
  cursor: pointer;
`
