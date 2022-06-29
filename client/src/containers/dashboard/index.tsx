import React from 'react'
import StudentPanel from '../../components/studentPanel'
import TeacherPanel from '../../components/teacherPanel'

interface Props {
  role: string
}

const DashboardContainer: React.FC<Props> = ({ role }) => {
  if (role === 'teacher') {
    return <TeacherPanel />
  }

  return <StudentPanel />
}

export default DashboardContainer
