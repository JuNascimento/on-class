import { render, screen } from '@testing-library/react'
import Class from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Class', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Class role='teacher' />
      </MemoryRouter>
    )
  })

  test('should have HeaderContainer in the document', () => {
    const expectedMessage = screen.getByTestId('header-container')

    expect(expectedMessage).toBeTruthy()
  })

  test('should have OnGoingClassContainer in the document', () => {
    const expectedMessage = screen.getByTestId('on-going-class-container')

    expect(expectedMessage).toBeTruthy()
  })
})
