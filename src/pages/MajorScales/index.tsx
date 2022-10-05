import React from 'react'

import { MAJOR_SCALE } from 'src/helpers/constants/diatonic-scales'

import DiatonicScales from 'src/components/DiatonicScales'
import { Container } from './styled'

const MajorScalesPage = () => {
  return (
    <Container>
      <DiatonicScales diatonicScale={MAJOR_SCALE} />
    </Container>
  )
}

export default MajorScalesPage
