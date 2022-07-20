import React, { useState } from 'react'

import links from 'src/helpers/nav-links'

import Link from 'src/components/Link'
import MenuIcon from './MenuIcon'
import { Container, DesktopContainer, MobileContainer } from './styled'

const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleIsOpen = (): void =>
    setIsOpen(isOpen => !isOpen)

  return (
    <Container>
      <MenuIcon
        onClick={toggleIsOpen}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <DesktopContainer>
        {links.map(link =>
          <Link key={link.id} to={link.href}>
            {link.title}
          </Link>
        )}
      </DesktopContainer>

      <MobileContainer isOpen={isOpen}>
        {links.map(link =>
          <Link
            key={link.id}
            to={link.href}
            onClick={toggleIsOpen}
          >
            {link.title}
          </Link>
        )}
      </MobileContainer>
    </Container>
  )
}

export default NavBar
