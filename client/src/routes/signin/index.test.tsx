import { fireEvent, render, screen } from '@testing-library/react'
import Login from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Login', () => {
  describe('when role is teacher', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      )
    })

    test('should have HeaderContainer in the document', () => {
      const expectedMessage = screen.getByTestId('header-container')

      expect(expectedMessage).toBeTruthy()
    })

    test('should have `Entre na sua conta` in the document', () => {
      const expectedMessage = screen.getByText('Entre na sua conta')

      expect(expectedMessage).toBeTruthy()
    })

    test('should have ManTeacherSvg in the document', () => {
      const expectedMessage = screen.getByTestId('man-teacher-svg')

      expect(expectedMessage).toBeTruthy()
    })
  })

  describe('when role is student', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      )
    })

    test('should have HeaderContainer in the document', () => {
      const expectedMessage = screen.getByTestId('header-container')

      expect(expectedMessage).toBeTruthy()
    })

    test('should have PersonSvg in the document', () => {
      const expectedMessage = screen.getByTestId('photo-svg')

      expect(expectedMessage).toBeTruthy()
    })

    test('should have OpenedEyeSvg in the document', () => {
      const expectedMessage = screen.getByTestId('opened-eye-svg')

      expect(expectedMessage).toBeTruthy()
    })

    test('should have ClosedEyeSvg in the document when click on `opened-eye-svg`', () => {
      fireEvent.click(screen.getByTestId('opened-eye-svg'))

      const expectedMessage = screen.getByTestId('closed-eye-svg')

      expect(expectedMessage).toBeTruthy()
    })
  })
})
