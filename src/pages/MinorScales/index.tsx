import React from 'react'

import { MINOR_SCALE } from 'src/helpers/constants/diatonic-scales'

import DiatonicScales from 'src/components/DiatonicScales'
import { Container } from './styled'

const MinorScalesPage = () => {
  return (
    <Container>
      <DiatonicScales diatonicScale={MINOR_SCALE} />
    </Container>
  )
}

export default MinorScalesPage
