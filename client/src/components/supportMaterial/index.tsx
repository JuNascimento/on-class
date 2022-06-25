import React from 'react'
import { SupportMaterialContent, Menu, Content } from './index.style'

interface SuportMaterialProps {
  type: any
  toggleSupportMaterial: any
  generateTabs: any
  defineContentTeacher: any
  defineContentStudent: any
}

const SuportMaterial: React.FC<SuportMaterialProps> = ({
  type,
  toggleSupportMaterial,
  generateTabs,
  defineContentTeacher,
  defineContentStudent,
}) => {
  return (
    <SupportMaterialContent
      toggleSupportMaterial={type === 'teacher' ? true : toggleSupportMaterial}
      data-testid='support-material-container'
    >
      <Menu>{generateTabs()}</Menu>
      <Content>
        {type === 'teacher' ? defineContentTeacher() : defineContentStudent()}
      </Content>
    </SupportMaterialContent>
  )
}

export default SuportMaterial
