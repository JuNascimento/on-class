import React from 'react'
import HeaderContainer from '../header'
import OnGoingClassContainer from '../on-going-class'

interface Props {
  type: string
}
export const Class: React.FC<Props> = ({ type }) => {
  return (
    <>
      <HeaderContainer />
      <OnGoingClassContainer type={type} />
    </>
  )
}

export default Class
