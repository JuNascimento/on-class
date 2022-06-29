import React, { ReactNode } from 'react'
import { CloseSvg } from '../icons'
import {
  Close,
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
} from './index.style'

interface ModalProps {
  children: ReactNode
  setcloseModal: any
}

export const ModalContainer: React.FC<ModalProps> = ({
  children,
  setcloseModal,
}) => {
  return (
    <Modal>
      <ModalContent>
        <ModalClose>
          <Close onClick={() => setcloseModal()}>
            <CloseSvg />
          </Close>
        </ModalClose>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}
