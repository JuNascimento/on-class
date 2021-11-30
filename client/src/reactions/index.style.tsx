import styled from 'styled-components'

export const Reactions = styled.section`
  width: 40vw;
  background-color: #ff5757;
  height: 50px;
  padding: 10px 0;
  display: flex;
  align-items: center;
`
export const Reaction = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  background-color: white;
  margin: 0 5px;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:first-child {
    display: flex;
  }

  &:hover {
    opacity: 0.5;
  }
`

export const Emoji = styled.img`
  width: 50px;
  height: 50px;
`
