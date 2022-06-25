import React from 'react'
import HeaderContainer from '../../components/header'
import OnGoingClassContainer from '../../containers/onGoingClass'

interface Props {
  role: string
}

const ClassRoutes: React.FC<Props> = ({ role }) => {
  return (
    <>
      <HeaderContainer />
      <OnGoingClassContainer role={role} />
    </>
  )
}

export default ClassRoutes
