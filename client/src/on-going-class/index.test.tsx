import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import OnGoingClassContainer from './index'

describe('OnGoingClassContainer', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<OnGoingClassContainer />)
    })
  })

  test('should have `Tempo restante: 57:14` text in the document', () => {
    const expectedRemainingClassTime = screen.getByText('Tempo restante: 57:14')

    expect(expectedRemainingClassTime).toBeInTheDocument()
  })

  test('should have StudantInformationContainer in the document', () => {
    const expectedRemainingClassTime = screen.getByTestId(
      'studant-information-container'
    )

    expect(expectedRemainingClassTime).toBeInTheDocument()
  })

  test('should have ReactionsContainer in the document', () => {
    const expectedReactions = screen.getByTestId('reactions-container')

    expect(expectedReactions).toBeInTheDocument()
  })

  test('should have StudantVideoContainer in the document', () => {
    const expectedStudantVideo = screen.getByTestId('studant-video-container')

    expect(expectedStudantVideo).toBeInTheDocument()
  })

  test('should have SupportMaterialContainer in the document', () => {
    const expectedSupportMaterial = screen.getByTestId(
      'support-material-container'
    )

    expect(expectedSupportMaterial).toBeInTheDocument()
  })
})
