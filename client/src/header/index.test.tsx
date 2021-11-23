import { render, screen, fireEvent } from '@testing-library/react'
import HeaderContainer from './index'
import { act } from 'react-dom/test-utils'

describe('HeaderContainer component', () => {
  let wrapper: any
  let container: any

  beforeEach(async () => {
    await act(async () => {
      wrapper = render(<HeaderContainer />)
      container = wrapper.container
    })
  })

  test('should has title in the document', () => {
    const expectedTitle = screen.getByText(/on-class app/i)

    expect(expectedTitle).toBeInTheDocument()
  })

  test('should has menu in the document', () => {
    const expectedMenu = container.querySelector('#menu-icon')

    expect(expectedMenu).toBeTruthy()
  })

  test('should alert `abrir menu` when click on menu icon', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})

    await act(async () => {
      fireEvent.click(container.querySelector('#menu-icon'))
    })

    expect(window.alert).toHaveBeenCalledWith('abrir menu')
  })

  test('should render svg element correctly', async () => {
    const expectedSvgElement = screen.getByTestId('menu-svg')

    expect(expectedSvgElement).toBeInTheDocument()
  })
})
