import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import StudantInformationContainer from './index'

describe('StudantInformationContainer', () => {
  let wrapper: any
  let container: any

  beforeEach(async () => {
    await act(async () => {
      wrapper = render(<StudantInformationContainer />)
      container = wrapper.container
    })
  })

  test('should render svg element correctly', async () => {
    const expectedSvgElement = screen.getByTestId('photo-svg')

    expect(expectedSvgElement).toBeInTheDocument()
  })

  test('should have `Pedro Furtado` text in the document', () => {
    const expectedText = screen.getByText('Pedro Furtado')

    expect(expectedText).toBeInTheDocument()
  })

  test('should have `Cálculo I` text in the document', () => {
    const expectedText = screen.getByText('Cálculo I')

    expect(expectedText).toBeInTheDocument()
  })
})