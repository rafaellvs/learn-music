import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from '.'

// TODO: test hover behaviour
// userEvent.mouseOver and fireEvent.hover not working as expected

test('variant "small" styles', () => {
  render(
    <Button variant='small'>
      Small variant
    </Button>
  )

  const button = screen.getByRole('button')
  expect(button).toHaveStyle({
    width: '3rem',
    height: '3rem',
    padding: '0',
  })
})
