import React from 'react'
import { render, screen } from '@testing-library/react'
import StudentInformationContainer from './index'

describe('StudentInformationContainer', () => {
  beforeEach(() => {
    render(<StudentInformationContainer type='teacher' />)
  })

  test('should render svg element correctly', () => {
    const expectedSvgElement = screen.getByTestId('photo-svg')

    expect(expectedSvgElement).toBeInTheDocument()
  })

  test('should have `Cálculo I` text in the document', () => {
    const expectedText = screen.getByText('Cálculo I')

    expect(expectedText).toBeInTheDocument()
  })

  describe('when type is `teacher`', () => {
    test.skip('should have `Julia Nascimento` text in the document', () => {
      render(<StudentInformationContainer type='teacher' />)

      const expectedText = screen.getByText('Julia Nascimento')

      expect(expectedText).toBeInTheDocument()
    })
  })

  describe('when type is `student`', () => {
    test('should have `Pedro Furtado` text in the document', () => {
      render(<StudentInformationContainer type='student' />)

      const expectedText = screen.getByText('Pedro Furtado')

      expect(expectedText).toBeInTheDocument()
    })
  })
})
