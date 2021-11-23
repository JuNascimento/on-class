import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '.'
import HeaderContainer from '../header'
import OnGoingClassContainer from '../on-going-class'

describe('App', () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = render(<App />)
    container = wrapper.container
  })

  test('should has HeaderContainer in the document', () => {
    expect(HeaderContainer).toBeTruthy()
  })

  test('should has OnGoingClassContainer in the document', () => {
    expect(OnGoingClassContainer).toBeTruthy()
  })
})
