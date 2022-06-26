import { render, screen } from '@testing-library/react'
import OnGoingClassContainer from './index'

describe('OnGoingClassContainer', () => {
  beforeEach(() => {
    render(<OnGoingClassContainer role={''} />)
  })

  test('should have PersonInformationContainer in the document', () => {
    const expectedPersonInformationContainer = screen.getByTestId(
      'person-information-container'
    )

    expect(expectedPersonInformationContainer).toBeInTheDocument()
  })

  test('should have `Tempo restante: 57:14` text in the document', () => {
    const expectedRemainingClassTime = screen.getByText('Tempo restante: 57:14')

    expect(expectedRemainingClassTime).toBeInTheDocument()
  })

  test('should have ReactionsContainer in the document', () => {
    const expectedReactions = screen.getByTestId('reactions-container')

    expect(expectedReactions).toBeInTheDocument()
  })

  test('should have VideoContainer in the document', () => {
    const expectedVideoContainer = screen.getByTestId('video-container')

    expect(expectedVideoContainer).toBeInTheDocument()
  })

  test('should have SupportMaterialContainer in the document', () => {
    const expectedSupportMaterial = screen.getByTestId(
      'support-material-container'
    )

    expect(expectedSupportMaterial).toBeInTheDocument()
  })
})
