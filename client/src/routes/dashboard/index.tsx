import React from 'react'
import DashboardContainer from '../../containers/dashboard'
import HeaderContainer from '../../components/header'

interface Props {
  role: string
}

const DashboardRoute: React.FC<Props> = ({ role }) => {
  return (
    <>
      <HeaderContainer />
      <DashboardContainer role={role} />
    </>
  )
}

export default DashboardRoute
