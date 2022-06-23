import React from 'react'
import { Subtitle, Role, LoginButton } from '../homePage/index.style'

interface RoleLoginProps {
  redirectDashboard: any
  role: string
  svgIcon: React.ReactNode
  subtitle: string
  labelButton: string
}

export const RoleLogin: React.FC<RoleLoginProps> = ({
  redirectDashboard,
  role,
  svgIcon,
  subtitle,
  labelButton,
}) => {
  return (
    <Role direction='row'>
      {svgIcon}
      <div>
        <Subtitle>{subtitle}</Subtitle>
        <LoginButton isDisabled={false} onClick={() => redirectDashboard(role)}>
          {labelButton}
        </LoginButton>
      </div>
    </Role>
  )
}

export default RoleLogin
