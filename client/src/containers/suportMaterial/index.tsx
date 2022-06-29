import React, { useState } from 'react'
import SuportMaterial from '../../components/supportMaterial'
import {
  Tab,
  Iframe,
  Links,
  Link,
  Subtitle,
} from '../../components/supportMaterial/index.style'
import File from './documento-teste-tcc.pdf'

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
  const [notImplementedError, setNotImplementedError] = useState(false)

  const tab1Content = () => {
    return <Iframe data-testid='content' src={File} />
  }

  const tab2Content = () => {
    return (
      <>
        <Subtitle>Links úteis para você</Subtitle>
        <Links data-testid='content'>
          <ol>
            {LINKS.map((key, value) => {
              return (
                <Link key={value}>
                  <div onClick={() => setNotImplementedError(true)}>
                    {key.label}
                  </div>
                </Link>
              )
            })}
          </ol>
        </Links>
      </>
    )
  }

  const tab3Content = () => {
    return <Iframe data-testid='content' src={File} />
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
      notImplementedError={notImplementedError}
      setNotImplementedError={setNotImplementedError}
    />
  )
}

export default SupportMaterialContainer
