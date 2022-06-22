import React from 'react'
import TeacherPanel from '../../components/teacherPanel'
import { Dashboard } from './index.style'

interface Props {
  role: string
}

const DashboardContainer: React.FC<Props> = ({ role }) => {
  return (
    <Dashboard>
      {role === 'teacher' ? <TeacherPanel /> : <TeacherPanel />}
    </Dashboard>
  )
}

export default DashboardContainer
