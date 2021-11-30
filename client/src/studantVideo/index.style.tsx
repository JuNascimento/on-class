import styled from 'styled-components'

export const StudantVideo = styled.article`
  width: 60vw;
  background-color: black;
`

export const VideoControls = styled.div`
  z-index: 99;
  bottom: 10px;
  position: fixed;
  width: inherit;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IconsGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px 20px 30px;
`

interface IconProps {
  isChat?: boolean
}

export const Icon = styled.div<IconProps>`
  width: ${p => (p.isChat ? `160px` : `40px`)};
  height: 40px;
  background-color: #ff5757;
  border-radius: ${p => (p.isChat ? `10px` : `40px`)};
  margin: ${p => (p.isChat ? `0px 10px 0 0` : `0 10px`)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: lighter;

  &:hover {
    opacity: 0.6;
  }
`

export const ChatLabel = styled.span`
  margin: 0 10px;
`
