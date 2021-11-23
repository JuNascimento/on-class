import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import OnGoingClassContainer from './index'
import { OnGoingClass, ClassInfo, RemainingClassTime } from './index.style'
import StudantInformationContainer from '../studantInformation'
import ReactionsContainer from '../reactions'

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
    expect(OnGoingClass).toBeTruthy()
  })

  test('should have ClassInfo in the document', () => {
    expect(ClassInfo).toBeTruthy()
  })

  test('should have RemainingClassTime in the document', () => {
    expect(RemainingClassTime).toBeTruthy()
  })

  test('should have StudantInformationContainer in the document', () => {
    expect(StudantInformationContainer).toBeTruthy()
  })

  test('should have ReactionsContainer in the document', () => {
    expect(ReactionsContainer).toBeTruthy()
  })

  test('should have `Tempo restante: 57:14` text in the document', () => {
    const expectedRemainingClassTime = screen.getByText('Tempo restante: 57:14')

    expect(expectedRemainingClassTime).toBeInTheDocument()
  })
})
