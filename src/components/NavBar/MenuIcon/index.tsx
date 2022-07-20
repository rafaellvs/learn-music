import React, { SetStateAction } from 'react'

import {
  Container,
  Bar1,
  Bar2,
  Bar3,
} from './styled'

type MenuIconProps = {
  onClick: () => void,
  isOpen: boolean,
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const MenuIcon = (props: MenuIconProps): JSX.Element => {
  const { onClick, isOpen } = props

  return (
    <Container onClick={onClick} isOpen={isOpen}>
      <Bar1 />
      <Bar2 />
      <Bar3 />
    </Container>
  )
}

export default MenuIcon
