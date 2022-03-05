import { render, screen } from '@testing-library/react'
import OnGoingClassContainer from './index'

describe('OnGoingClassContainer', () => {
  beforeEach(() => {
    render(<OnGoingClassContainer type='teacher' />)
  })

  test('should have StudentInformationContainer in the document', () => {
    const expectedstudentVideo = screen.getByTestId(
      'student-information-container'
    )

    expect(expectedstudentVideo).toBeInTheDocument()
  })

  test('should have `Tempo restante: 57:14` text in the document', () => {
    const expectedRemainingClassTime = screen.getByText('Tempo restante: 57:14')

    expect(expectedRemainingClassTime).toBeInTheDocument()
  })

  test('should have ReactionsContainer in the document', () => {
    const expectedReactions = screen.getByTestId('reactions-container')

    expect(expectedReactions).toBeInTheDocument()
  })

  test('should have StudentVideoContainer in the document', () => {
    const expectedstudentVideo = screen.getByTestId('student-video-container')

    expect(expectedstudentVideo).toBeInTheDocument()
  })

  test('should have SupportMaterialContainer in the document', () => {
    const expectedSupportMaterial = screen.getByTestId(
      'support-material-container'
    )

    expect(expectedSupportMaterial).toBeInTheDocument()
  })
})
