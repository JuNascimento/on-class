import styled from 'styled-components'

export const Header = styled.header`
  background-color: #ff5757;
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

export const Logout = styled.button`
  padding: 10px 20px;
  border: 1px solid red;
  border-radius: 5px;
  position: fixed;
  right: 5%;
  cursor: pointer;
  margin: -20px 0 0 0;
`
// export const Menu = styled.span`
//   position: fixed;
//   left: 20px;
//   cursor: pointer;

//   &:hover {
//     background-color: rgba(255, 87, 87, 0.7);
//   }
// `

// export const Container = styled.section`
//   width: 25vw;
//   height: 80vh;
//   border: 1px solid red;
//   left: 0;
//   position: fixed;
//   background-color: #fff;
//   z-index: 99999999;
// `
