import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '.'

describe('App', () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = render(<App />)
    container = wrapper.container
  })

  test('should has HeaderContainer in the document', () => {
    const expectedHeader = screen.getByTestId('header-container')

    expect(expectedHeader).toBeTruthy()
  })

  test('should has OnGoingClassContainer in the document', () => {
    const expectedOnGoingClass = screen.getByTestId('on-going-class-container')

    expect(expectedOnGoingClass).toBeTruthy()
  })
})
