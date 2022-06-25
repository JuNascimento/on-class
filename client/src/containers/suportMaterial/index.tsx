import React, { useState } from 'react'
import SuportMaterial from '../../components/supportMaterial'
import {
  Tab,
  Iframe,
  Links,
  Link,
} from '../../components/supportMaterial/index.style'

const LINKS = [
  { link: 'https://www.instagram.com/', label: 'Atividade 1' },
  { link: 'https://www.facebook.com/', label: 'Atividade 2' },
  { link: 'https://www.google.com.br/', label: 'Atividade 3' },
  { link: 'https://ge.globo.com/', label: 'Atividade 4' },
]

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
      <Links data-testid='content'>
        <ol>
          {LINKS.map((key, value) => {
            return (
              <Link key={value}>
                <a href={key.link} target='_blank' rel='noreferrer'>
                  {key.label}
                </a>
              </Link>
            )
          })}
        </ol>
      </Links>
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
    <SuportMaterial
      type={type}
      toggleSupportMaterial={toggleSupportMaterial}
      generateTabs={generateTabs}
      defineContentTeacher={defineContentTeacher}
      defineContentStudent={defineContentStudent}
    />
  )
}

export default SupportMaterialContainer
