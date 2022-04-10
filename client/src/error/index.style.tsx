import styled from 'styled-components'

interface ErrorProps {
  type: string
}

export const Error = styled.div<ErrorProps>`
  font-size: 8px;
  color: red;
  z-index: 9999;
  position: absolute;
  margin-top: ${p => (p.type === 'login' ? '170px' : '90px')};
`
