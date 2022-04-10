import React from 'react'
import { CloseSvg } from '../icons'
import { NewClass, Close } from './index.style'

interface NewClassProps {
  setShowModal: (state: boolean) => void
}

const NewClassContainer: React.FC<NewClassProps> = ({ setShowModal }) => {
  return (
    <NewClass>
      <Close onClick={() => setShowModal(false)}>
        <CloseSvg />
      </Close>
      <p>oi eu to aqui me olha</p>
    </NewClass>
  )
}

export default NewClassContainer
