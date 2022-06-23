import React from 'react'
import TeacherPanel from '../../components/teacherPanel'

interface Props {
  role: string
}

const DashboardContainer: React.FC<Props> = ({ role }) => {
  if (role === 'teacher') {
    return <TeacherPanel />
  }

  return <TeacherPanel />
}

export default DashboardContainer
