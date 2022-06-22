import React, { ReactNode } from 'react'
import { Modal } from './index.style'

interface ModalProps {
  children: ReactNode
}

export const ModalContainer: React.FC<ModalProps> = ({ children }) => {
  return <Modal>{children}</Modal>
}
