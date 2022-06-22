import React from 'react'
import TeacherPanel from '../teacherPanel'

interface Props {
  role: string
}

const ControlPanelContainer: React.FC<Props> = ({ role }) => {
  return <>{role === 'teacher' ? <TeacherPanel /> : <TeacherPanel />}</>
}

export default ControlPanelContainer
