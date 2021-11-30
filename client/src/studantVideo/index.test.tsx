import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import StudantVideoContainer from './index'
import { Icon } from './index.style'

describe('StudantVideoContainer', () => {
  let wrapper: any
  let container: any

  beforeEach(async () => {
    await act(async () => {
      wrapper = render(<StudantVideoContainer />)
      container = wrapper.container
    })
  })

  test('should have 2 IconsGroup in the document', () => {
    const expectedIconsGroup = screen.getAllByTestId('icons-group')

    expect(expectedIconsGroup.length).toBe(2)
  })

  test('should have 6 Icons in the document', () => {
    const expectedIcons = screen.getAllByTestId('icons')

    expect(expectedIcons.length).toBe(6)
  })

  describe('when icon is chat', () => {
    test('should have correct styles', () => {
      expect(container.querySelector('#chat-icon')).toHaveStyle({
        width: '160px',
        'border-radius': '10px',
        margin: '0px 10px 0 0',
      })
    })

    describe('and it`s closed', () => {
      test('should have `Chat` text in the document', () => {
        const expectedText = screen.getByText('Chat')

        expect(expectedText).toBeInTheDocument()
      })
    })

    describe('and it`s opened', () => {
      test('should have `O chat tá aberto` text in the document', async () => {
        await act(async () => {
          fireEvent.click(container.querySelector('#chat-icon'))
        })

        const expectedText = screen.getByText('O chat tá aberto')

        expect(expectedText).toBeInTheDocument()
      })
    })
  })

  describe('when icon is not chat', () => {
    test('when icon is not chat should have correct styles', () => {
      const firstIcon = screen.getAllByTestId('icons')[0]

      expect(firstIcon).toHaveStyle({
        width: '40px',
        'border-radius': '40px',
        margin: '0px 10px',
      })
    })
  })
})
