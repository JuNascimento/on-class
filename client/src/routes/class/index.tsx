import React from 'react'
import HeaderContainer from '../../header'
import OnGoingClassContainer from '../../onGoingClass'

interface Props {
  role: string
}

export const ClassContainer: React.FC<Props> = ({ role }) => {
  return (
    <>
      <HeaderContainer />
      <OnGoingClassContainer type={role} />
    </>
  )
}

export default ClassContainer
