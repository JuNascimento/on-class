import styled from 'styled-components'

export const StickyButton = styled.button`
  margin: 15px 0;
  width: 30%;
  height: 70px;
  border-radius: 50px;
  background-color: #ff5757;
  border: none;
  font-size: 16px;
  font-weight: 200;

  :hover {
    background-color: rgba(248, 210, 210, 0.9);
    border: 1px solid #ff5757;
  }

  :focus-visible {
    outline: unset;
  }
`

export const Subtitle = styled.div`
  padding: 0 30%;
`

export const SubtitleLabel = styled.h3`
  border-bottom: 1px solid #ff5757;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 400;
`

export const Lado = styled.article`
  height: 100%;
  width: 49%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Lados = styled.section`
  max-height: 90vh;
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Classes = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
`

interface Props {
  shouldFocous: boolean
  nextClasses: boolean
}

export const Class = styled.div<Props>`
  width: 100%;
  background-color: ${p => (p.nextClasses ? '#f8d2d2ca' : '#f8d2d25c')};
  align-items: center;
  width: 46%;
  flex-direction: column;
  margin: 2%;
  border: ${p => (p.shouldFocous ? '3px solid #ff5757' : 'none')};
  text-align: center;
`

export const StudentName = styled.p`
  font-weight: 400;
`

export const ClassInfo = styled.p`
  font-weight: 300;
`
