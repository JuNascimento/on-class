import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '.'

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  test('should have HeaderContainer in the document', () => {
    const expectedHeader = screen.getByText('on-class app')

    expect(expectedHeader).toBeTruthy()
  })

  test('should have HomePageContainer in the document', () => {
    const expectedHeader = screen.getByTestId('login-screen-container')

    expect(expectedHeader).toBeTruthy()
  })
})
