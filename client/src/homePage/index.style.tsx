import styled from 'styled-components'

export const HomePage = styled.section`
  margin-top: 40px;
  max-height: 90vh;
  text-align: center;
`

export const Title = styled.h1`
  text-align: center;
  margin: 10px 0 30px 0;
  font-size: 30px;
`

export const Subtitle = styled.h3`
  font-size: 20px;
  margin: 10px 0 20px 0;
`

export const Roles = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 40px 0;
`

interface Props {
  direction: string
}

export const Role = styled.section<Props>`
  width: 500px;
  height: 50vh;
  border: 3px solid #f8d2d2ca;
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${p => p.direction};
  background-color: rgba(248, 210, 210, 0.15);
  border-radius: 10px;
`

export const LoginButton = styled.button`
  background-color: #ff5757;
  padding: 10px 40px;
  border-radius: 50px;
  cursor: pointer;
  border: none;

  :hover {
    background-color: rgba(248, 210, 210, 0.9);
  }

  :focus-visible {
    outline: unset;
  }
`

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f8d2d2ca;
  width: 200px;

  &:focus-visible {
    outline: unset;
  }
`

export const Label = styled.label`
  margin: 10px 0;
`

export const Password = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-left: 22px;
`

export const ShowPasswordToggle = styled.span`
  width: 20px;
  position: relative;
  z-index: 999;
  right: 33px;
`
