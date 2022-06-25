import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  margin: 10px 0 30px 0;
  font-size: 30px;
  font-weight: 600;
`

export const SubjectsBoard = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubjectsItems = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
`

export const SubjectsSelector = styled.section`
  width: 500px;
  height: 50vh;
  border: 3px solid #f8d2d2ca;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(248, 210, 210, 0.15);
  border-radius: 10px;
  flex-wrap: wrap;
`

interface Props {
  isSelected: boolean
}

export const SubjectItem = styled.div<Props>`
  width: 100px;
  height: 45px;
  padding: 10px;
  margin: 10px;
  border: ${p => (p.isSelected ? '3px solid #ff5757' : '3px solid #f8d2d2ca')};
  background-color: ${p => (p.isSelected ? '#f8d2d2ca' : 'none')};
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    border: 3px solid #ff5757;
    background-color: #f8d2d2ca;
  }
`
