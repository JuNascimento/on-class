import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SupportMaterialContainer from './index'

describe('SupportMaterialContainer', () => {
  let wrapper: any
  let container: any

  describe('when type === `teacher`', () => {
    beforeEach(() => {
      wrapper = render(
        <SupportMaterialContainer
          type={'teacher'}
          toggleSupportMaterial={true}
        />
      )
      container = wrapper.container
    })

    test('should have 3 Tabs in the document', () => {
      const expectedTabs = screen.getAllByTestId('tabs')

      expect(expectedTabs.length).toBe(3)
      expect(expectedTabs[0].textContent).toBe('Material da aula')
      expect(expectedTabs[1].textContent).toBe('Links úteis')
      expect(expectedTabs[2].textContent).toBe('Projeto de revisão')
    })

    describe('when click on tab 1', () => {
      beforeEach(() => {
        fireEvent.click(container.querySelector('#tab1'))
      })

      test('should show tab1Content', () => {
        expect(screen.getByTestId('content')).toBeInTheDocument()
        expect(screen.getByTestId('content')).toHaveAttribute(
          'src',
          'https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf'
        )
      })

      test('should change tab 1 style', () => {
        expect(screen.getByText('Material da aula')).toHaveStyle({
          'background-color': 'rgb(255, 87, 87)',
        })
      })

      test('should change style of tabs 2 and 3', () => {
        expect(screen.getByText('Links úteis')).toHaveStyle({
          'background-color': 'rgba(248, 210, 210, 0.9)',
        })
        expect(screen.getByText('Projeto de revisão')).toHaveStyle({
          'background-color': 'rgba(248, 210, 210, 0.9)',
        })
      })
    })

    describe('when click on tab 2', () => {
      beforeEach(() => {
        fireEvent.click(container.querySelector('#tab2'))
      })

      test('should show tab2Content', () => {
        expect(screen.getByTestId('content')).toBeInTheDocument()
      })

      test('should change tab 2 style', () => {
        expect(screen.getByText('Links úteis')).toHaveStyle({
          'background-color': 'rgb(255, 87, 87)',
        })
      })

      test('should change style of tabs 1 and 3', () => {
        expect(screen.getByText('Material da aula')).toHaveStyle({
          'background-color': 'rgba(248, 210, 210, 0.9)',
        })
        expect(screen.getByText('Projeto de revisão')).toHaveStyle({
          'background-color': 'rgba(248, 210, 210, 0.9)',
        })
      })
    })

    describe('when click on tab 3', () => {
      beforeEach(() => {
        fireEvent.click(container.querySelector('#tab3'))
      })

      test('should show tab3Content', () => {
        expect(screen.getByTestId('content')).toBeInTheDocument()
        expect(screen.getByTestId('content')).toHaveAttribute(
          'src',
          'https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf'
        )
      })

      test('should change tab 3 style', () => {
        expect(screen.getByText('Projeto de revisão')).toHaveStyle({
          'background-color': 'rgb(255, 87, 87)',
        })
      })

      test('should change style of tabs 1 and 2', () => {
        expect(screen.getByText('Material da aula')).toHaveStyle({
          'background-color': 'rgba(248, 210, 210, 0.9)',
        })
        expect(screen.getByText('Links úteis')).toHaveStyle({
          'background-color': 'rgba(248, 210, 210, 0.9)',
        })
      })
    })

    test('should show support material section', () => {
      expect(screen.getByTestId('support-material-container')).toHaveStyle({
        display: 'block',
      })
    })
  })

  describe('when type === `student`', () => {
    beforeEach(() => {
      wrapper = render(
        <SupportMaterialContainer
          type={'student'}
          toggleSupportMaterial={false}
        />
      )
      container = wrapper.container
    })

    test('should have 2 Tabs in the document', () => {
      const expectedTabs = screen.getAllByTestId('tabs')

      expect(expectedTabs.length).toBe(2)
      expect(expectedTabs[0].textContent).toBe('Links úteis')
      expect(expectedTabs[1].textContent).toBe('Projeto de revisão')
    })

    describe('when click on tab 2', () => {
      beforeEach(() => {
        fireEvent.click(container.querySelector('#tab2'))
      })

      test('should show tab2Content', () => {
        expect(screen.getByTestId('content')).toBeInTheDocument()
      })

      test('should change tab 2 style', () => {
        expect(screen.getByText('Links úteis')).toHaveStyle({
          'background-color': 'rgba(248, 210, 210, 0.9)',
        })
      })

      test('should change style of tab 3', () => {
        expect(screen.getByText('Projeto de revisão')).toHaveStyle({
          'background-color': 'rgb(255, 87, 87)',
        })
      })
    })

    describe('when click on tab 3', () => {
      beforeEach(() => {
        fireEvent.click(container.querySelector('#tab2'))
      })

      test('should show tab3Content', () => {
        expect(screen.getByTestId('content')).toBeInTheDocument()
        expect(screen.getByTestId('content')).toHaveAttribute(
          'src',
          'https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf'
        )
      })

      test('should change tab 3 style', () => {
        expect(screen.getByText('Projeto de revisão')).toHaveStyle({
          'background-color': 'rgb(255, 87, 87)',
        })
      })

      test('should change style of tab 2', () => {
        expect(screen.getByText('Links úteis')).toHaveStyle({
          'background-color': 'rgba(248, 210, 210, 0.9)',
        })
      })
    })

    test('should not show support material section', () => {
      expect(screen.getByTestId('support-material-container')).toHaveStyle({
        display: 'none',
      })
    })
  })
})
