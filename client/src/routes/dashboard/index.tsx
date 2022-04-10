import React, { useEffect, useState } from 'react'
import ControlPanelContainer from '../../controlPanel'
import HeaderContainer from '../../header'
import { getSessionStorage } from '../../helpers'
import Subjects from '../../subjetcs'
import { Dashboard } from './index.style'

interface Props {
  role: string
}

export const DashboardContainer: React.FC<Props> = ({ role }) => {
  const [showSubjects, setShowSubjects] = useState(true)

  useEffect(() => {
    const hasSubjectsDefined = !getSessionStorage(role).primeiro_login

    setShowSubjects(!hasSubjectsDefined)
  }, [])

  return (
    <>
      <HeaderContainer />
      <Dashboard>
        {showSubjects && (
          <Subjects role={role} setShowSubjects={setShowSubjects} />
        )}
        {!showSubjects && <ControlPanelContainer />}
      </Dashboard>
    </>
  )
}

export default DashboardContainer
