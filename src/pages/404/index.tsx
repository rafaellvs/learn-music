import React from 'react'

import Link from 'src/components/_base/Link'

import { Container } from './styled'

const Page404 = (): JSX.Element => {
  return (
    <Container>
      <h1>Sorry! <br />This page does not exist.</h1>

      <p>Try a different page through the navigation menu or <Link to='/'>go back to the home page</Link>.</p>
    </Container>
  )
}

export default Page404
