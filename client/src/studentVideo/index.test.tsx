import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import StudentVideoContainer from './index'

describe('StudentVideoContainer', () => {
  let wrapper: any
  let container: any

  describe('when type is `teacher`', () => {
    beforeEach(() => {
      wrapper = render(
        <StudentVideoContainer
          setToggleSupportMaterial={jest.fn()}
          toggleSupportMaterial={false}
          type='teacher'
        />
      )
      container = wrapper.container
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
        test('should have `O chat tá aberto` text in the document', () => {
          fireEvent.click(container.querySelector('#chat-icon'))

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

    describe('when video controls direction is `bottom`', () => {
      it('should have correct styles', () => {
        const expectedVideoControls = screen.getByTestId(
          'video-controls-bottom'
        )

        expect(expectedVideoControls).toHaveStyle({
          bottom: '30px',
          'justify-content': 'space-between',
        })
      })
    })
  })

  describe('when type is `student`', () => {
    beforeEach(() => {
      wrapper = render(
        <StudentVideoContainer
          setToggleSupportMaterial={jest.fn()}
          toggleSupportMaterial={false}
          type='student'
        />
      )
      container = wrapper.container
    })

    test('should have 3 IconsGroup in the document', () => {
      const expectedIconsGroup = screen.getAllByTestId('icons-group')

      expect(expectedIconsGroup.length).toBe(3)
    })

    test('should have 7 Icons in the document', () => {
      const expectedIcons = screen.getAllByTestId('icons')

      expect(expectedIcons.length).toBe(7)
    })

    it.skip('should change arrow direction when click on arrow icon', () => {
      console.log(screen.getByTestId('arrow-svg').getAttribute('transform'))
      fireEvent.click(screen.getByTestId('iconssss'))
      console.log(screen.getByTestId('arrow-svg').getAttribute('transform'))

      expect(screen.getByTestId('arrow-svg')).toHaveAttribute(
        'transform',
        'rotate(270)'
      )
    })

    it('should have correct styles on video-controls-top', () => {
      const expectedVideoControls = screen.getByTestId('video-controls-top')

      expect(expectedVideoControls).toHaveStyle({
        top: '30px',
        'justify-content': 'flex-end',
      })
    })
  })
})
