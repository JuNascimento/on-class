import styled from 'styled-components'

export const SupportMaterial = styled.article`
  width: 40vw;
  max-height: 70.8vh;
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  padding: 5px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: lighter;
`

interface TabProps {
  isActive: boolean
}

export const Tab = styled.div<TabProps>`
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background-color: ${p => (p.isActive ? `#ff5757` : `#f88888`)};

  &:hover {
    opacity: 0.5;
  }
`

export const Content = styled.div`
  height: 100%;
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 72.8vh;
`
