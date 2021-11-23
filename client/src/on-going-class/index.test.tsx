import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import OnGoingClassContainer from './index'

describe('OnGoingClassContainer', () => {
  let wrapper: any
  let container: any

  beforeEach(async () => {
    await act(async () => {
      wrapper = render(<OnGoingClassContainer />)
      container = wrapper.container
    })
  })

  test('should have OnGoingClass in the document', () => {
    const expectedOnGoingClass = screen.getByTestId('on-going-class-container')

    expect(expectedOnGoingClass).toBeTruthy()
  })

  test('should have `Tempo restante: 57:14` text in the document', () => {
    const expectedRemainingClassTime = screen.getByText('Tempo restante: 57:14')

    expect(expectedRemainingClassTime).toBeInTheDocument()
  })
})
