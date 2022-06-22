import React from 'react'
import HeaderContainer from '../../components/header'
import OnGoingClassContainer from '../../containers/onGoingClass'

interface Props {
  role: string
}

const ClassContainer: React.FC<Props> = ({ role }) => {
  return (
    <>
      <HeaderContainer />
      <OnGoingClassContainer type={role} />
    </>
  )
}

export default ClassContainer
