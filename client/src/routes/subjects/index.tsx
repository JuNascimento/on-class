import React from 'react'
import HeaderContainer from '../../components/header'
import SubjectsContainer from '../../containers/subjetcs'

interface Props {
  role: string
}

const SubjectsRoute: React.FC<Props> = ({ role }) => {
  return (
    <>
      <HeaderContainer />
      <SubjectsContainer role={role} />
    </>
  )
}

export default SubjectsRoute
