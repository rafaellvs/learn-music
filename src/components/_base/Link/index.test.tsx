import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { screen, render } from '@testing-library/react'

import Link from '.'

test('check if link redirects correctly', () => {
  render(<Link to='/jansen'>Jansen</Link>, { wrapper: MemoryRouter })

  const link = screen.getByRole('link')
  expect(link).toHaveAttribute('href', '/jansen')
})
