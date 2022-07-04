import styled from 'styled-components'

interface SupportMaterialContentProps {
  toggleSupportMaterial: boolean
}

export const SupportMaterialContent = styled.article<SupportMaterialContentProps>`
  display: ${p => (p.toggleSupportMaterial ? `block` : `none`)};
  width: 40vw;
  height: 72.8vh;
  min-width: 40vw;
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  padding: 5px 0;
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
  background-color: ${p =>
    p.isActive ? `rgb(255, 87, 87)` : `rgba(248, 210, 210, 0.9);`};

  &:hover {
    background-color: rgba(255, 87, 87, 0.7);
  }
`

export const Content = styled.div`
  height: 100%;
`

export const Subtitle = styled.h3`
  padding: 0 20px;
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 72.8vh;
`

export const Links = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: 'flex-start';
  text-decoration: underline;
  cursor: pointer;
`

export const Link = styled.li`
  margin: 10px 0;
`
