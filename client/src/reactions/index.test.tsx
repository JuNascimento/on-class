import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import ReactionsContainer from './index'

describe('ReactionsContainer', () => {
  let wrapper: any
  let container: any

  beforeEach(async () => {
    await act(async () => {
      wrapper = render(<ReactionsContainer />)
      container = wrapper.container
    })
  })

  test('should have only 1 reaction in the document', () => {
    const expectedReaction = screen.getAllByTestId('reaction-emoji')

    expect(expectedReaction.length).toBe(1)
  })

  test('should have all 7 reactions when clicked on first reaction', async () => {
    await act(async () => {
      fireEvent.click(container.querySelector('#first-reaction'))
    })

    const expectedReaction = screen.getAllByTestId('reaction-emoji')

    expect(expectedReaction.length).toBe(7)
  })
})
