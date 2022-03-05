import React, { useState } from 'react'
import { SupportMaterial, Menu, Tab, Content, Iframe } from './index.style'

interface Props {
  type: string
  toggleSupportMaterial: boolean
}

const SupportMaterialContainer: React.FC<Props> = ({
  type,
  toggleSupportMaterial,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  const tab1Content = () => {
    return (
      <Iframe
        data-testid='content'
        src='https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf'
      />
    )
  }

  const tab2Content = () => {
    return (
      <div data-testid='content'>
        <h1> links uteis</h1>
        <ol>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
          <li>link 4</li>
          <li>link 5</li>
        </ol>
      </div>
    )
  }

  const tab3Content = () => {
    return (
      <Iframe
        data-testid='content'
        src='https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf'
      />
    )
  }

  const defineContentStudent = () => {
    let content

    switch (activeTabIndex) {
      case 1:
        content = tab2Content()
        break

      case 2:
        content = tab3Content()
        break
    }

    return content
  }

  const defineContentTeacher = () => {
    let content

    switch (activeTabIndex) {
      case 1:
        content = tab1Content()
        break

      case 2:
        content = tab2Content()
        break

      case 3:
        content = tab3Content()
        break
    }

    return content
  }

  const generateTabs = () => {
    const numberOfTabs = type === 'teacher' ? 3 : 2
    const tabsLabel = ['Material da aula', 'Links úteis', 'Projeto de revisão']
    const tabs = []

    for (let i = 0; i < numberOfTabs; i++) {
      tabs.push(
        <Tab
          key={`tab-${i + 1}`}
          data-testid='tabs'
          id={`tab${i + 1}`}
          isActive={i + 1 === activeTabIndex}
          onClick={() => setActiveTabIndex(i + 1)}
        >
          {type === 'teacher' ? tabsLabel[i] : tabsLabel[i + 1]}
        </Tab>
      )
    }

    return tabs
  }

  return (
    <>
      <SupportMaterial
        toggleSupportMaterial={
          type === 'teacher' ? true : toggleSupportMaterial
        }
        data-testid='support-material-container'
      >
        <Menu>{generateTabs()}</Menu>
        <Content>
          {type === 'teacher' ? defineContentTeacher() : defineContentStudent()}
        </Content>
      </SupportMaterial>
    </>
  )
}

export default SupportMaterialContainer
