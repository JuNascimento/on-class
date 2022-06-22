import styled from 'styled-components'

export const Home = styled.section`
  max-height: 90vh;
  text-align: center;
`

export const Title = styled.h1`
  text-align: center;
  margin: 10px 0 30px 0;
  font-size: 30px;
  font-weight: 600;
`

export const Subtitle = styled.h3`
  font-size: 20px;
  margin: 10px 0 20px 0;
  font-weight: 400;
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
  padding: 10px;
`

interface ButtonProps {
  isDisabled: boolean
}

export const LoginButton = styled.button<ButtonProps>`
  font-weight: 300;
  background-color: ${p =>
    p.isDisabled ? 'rgba(248, 210, 210, 0.9)' : '#ff5757'};
  padding: 10px 40px;
  border-radius: 50px;
  cursor: ${p => (p.isDisabled ? 'not-allowed' : 'pointer')};
  border: 1px solid rgba(248, 210, 210, 0.9);
  margin: 10px 0;
  color: ${p => (p.isDisabled ? 'white' : 'black')};

  :hover {
    background-color: rgba(248, 210, 210, 0.9);
    border: 1px solid #ff5757;
  }

  :focus-visible {
    outline: unset;
  }
`

export const InputFieldsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const InputFieldsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`

interface InputProps {
  showError: boolean
}
export const Input = styled.input<InputProps>`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f8d2d2ca;
  width: 200px;
  outline: ${p => (p.showError ? '1px solid red;' : 'unset')};
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
`

export const ShowPasswordToggle = styled.span`
  width: 20px;
  position: relative;
  z-index: 999;
  right: 33px;
`

export const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f8d2d2ca;
  width: 200px;

  &:focus-visible {
    outline: unset;
  }
`
