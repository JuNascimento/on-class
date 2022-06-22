import { render, screen } from '@testing-library/react'
import HomePageContainer from '.'
import { MemoryRouter } from 'react-router-dom'

describe('HomePageContainer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HomePageContainer />
      </MemoryRouter>
    )
  })

  test('should have Title in the document', () => {
    const expectedTitle = screen.getByText('Bem vinda(o) ao on-class app!')

    expect(expectedTitle).toBeTruthy()
  })

  test('should have Subtitle in the document', () => {
    const expectedSubtitle = screen.getByText('Faça seu login abaixo')

    expect(expectedSubtitle).toBeTruthy()
  })

  test('should have `Professor(a)` in the document', () => {
    const expectedTeacherLabel = screen.getByText('Professor(a)')

    expect(expectedTeacherLabel).toBeTruthy()
  })

  test('should have `Aluno(a)` in the document', () => {
    const expectedStudentLabel = screen.getByText('Aluno(a)')

    expect(expectedStudentLabel).toBeTruthy()
  })

  test('should have `Não tem cadastro ainda?` in the document', () => {
    const expectedMessage = screen.getByText('Não tem cadastro ainda?')

    expect(expectedMessage).toBeTruthy()
  })
})
