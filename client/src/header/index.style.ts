import styled from 'styled-components'

export const Header = styled.header`
  background-color: #ff5757;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`

export const Title = styled.h1`
  color: #000;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: -10px 0 0 0;
  padding: 10px 0;
`

export const Menu = styled.span`
  position: fixed;
  left: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`
