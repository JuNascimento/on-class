import React, { useState } from 'react'
import { SupportMaterial, Menu, Tab, Content, Iframe } from './index.style'

const SupportMaterialContainer: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  const handleChange = (index: number) => {
    setActiveTabIndex(index)
  }

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

  const defineContent = () => {
    let content
    if (activeTabIndex === 1) {
      content = tab1Content()
    } else if (activeTabIndex === 2) {
      content = tab2Content()
    } else {
      content = tab3Content()
    }

    return content
  }

  return (
    <SupportMaterial data-testid='support-material-container'>
      <Menu>
        <Tab
          data-testid='tabs'
          id='tab1'
          isActive={1 === activeTabIndex}
          onClick={() => handleChange(1)}
        >
          Material da aula
        </Tab>
        <Tab
          data-testid='tabs'
          id='tab2'
          isActive={2 === activeTabIndex}
          onClick={() => handleChange(2)}
        >
          Links úteis
        </Tab>
        <Tab
          data-testid='tabs'
          id='tab3'
          isActive={3 === activeTabIndex}
          onClick={() => handleChange(3)}
        >
          Projeto de revisão
        </Tab>
      </Menu>
      <Content>{defineContent()}</Content>
    </SupportMaterial>
  )
}

export default SupportMaterialContainer
