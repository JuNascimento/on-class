import React from 'react'
import { ModalContainer } from '../modal'
import NotImplemented from '../notImplemented'
import { SupportMaterialContent, Menu, Content } from './index.style'

interface SuportMaterialProps {
  type: any
  toggleSupportMaterial: any
  generateTabs: any
  defineContentTeacher: any
  defineContentStudent: any
  notImplementedError: any
  setNotImplementedError: any
}

const SuportMaterial: React.FC<SuportMaterialProps> = ({
  type,
  toggleSupportMaterial,
  generateTabs,
  defineContentTeacher,
  defineContentStudent,
  notImplementedError,
  setNotImplementedError,
}) => {
  return (
    <>
      <SupportMaterialContent
        toggleSupportMaterial={
          type === 'teacher' ? true : toggleSupportMaterial
        }
        data-testid='support-material-container'
      >
        <Menu>{generateTabs()}</Menu>
        <Content>
          {type === 'teacher' ? defineContentTeacher() : defineContentStudent()}
        </Content>
      </SupportMaterialContent>
      {notImplementedError && (
        <ModalContainer setcloseModal={setNotImplementedError}>
          <NotImplemented />
        </ModalContainer>
      )}
    </>
  )
}

export default SuportMaterial
