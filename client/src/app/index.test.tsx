import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '.'

describe('App', () => {
  let wrapper, container

  test('should has HeaderContainer in the document', () => {
    wrapper = render(<App />)
    container = wrapper.container

    const expectedHeader = screen.getByTestId('header-container')

    expect(expectedHeader).toBeInTheDocument()
  })
})
