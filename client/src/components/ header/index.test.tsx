import { render, screen } from '@testing-library/react'
import HeaderContainer from './index'
import { MemoryRouter } from 'react-router-dom'

describe('HeaderContainer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HeaderContainer />
      </MemoryRouter>
    )
  })

  test('should have title in the document', () => {
    const expectedTitle = screen.getByText(/on-class app/i)

    expect(expectedTitle).toBeInTheDocument()
  })

  test('should have menu in the document', () => {
    const expectedMenu = screen.getByTestId('menu-icon')

    expect(expectedMenu).toBeTruthy()
  })

  test('should render svg element correctly', () => {
    const expectedSvgElement = screen.getByTestId('menu-svg')

    expect(expectedSvgElement).toBeInTheDocument()
  })
})
