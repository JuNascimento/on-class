import styled from 'styled-components'

export const Video = styled.section`
  width: 100%;
  background-color: black;
  position: relative;
`

interface VideoControlsProps {
  direction: string
}

export const VideoControls = styled.section<VideoControlsProps>`
  z-index: 99;
  bottom: ${p => (p.direction === 'bottom' ? `30px` : `unset`)};
  top: ${p => (p.direction === 'bottom' ? `unset` : `30px`)};
  position: absolute;
  width: inherit;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: ${p =>
    p.direction === 'bottom' ? `space-between` : `flex-end`};
`

export const IconsGroup = styled.article`
  display: flex;
  align-items: center;
  margin: 0 20px;
`

interface IconProps {
  isChat?: boolean
  isOpen?: boolean
}

export const Icon = styled.div<IconProps>`
  width: ${p => (p.isChat ? `300px` : `40px`)};
  height: 40px;
  background-color: #ff5757;
  border-radius: ${p => (p.isChat ? `10px` : `40px`)};
  margin: ${p => (p.isChat ? `0px 10px 0 0` : `0 10px`)};
  cursor: pointer;
  display: flex;
  align-items: ${p => (p.isChat && p.isOpen ? `end` : `center`)};
  justify-content: center;
  font-weight: lighter;

  &:hover {
    background-color: rgba(255, 87, 87, 0.7);
  }
`

export const ChatLabel = styled.span`
  margin: 0 10px;
`
