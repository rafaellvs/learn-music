import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import navLinks from 'src/helpers/nav-links'

import NavBar from '.'

test('check if links rendered match nav-links data', () => {
  render(<NavBar />, { wrapper: MemoryRouter })

  const renderedLinks = screen.getAllByRole('link')
  expect(renderedLinks).toHaveLength(navLinks.length)

  navLinks.forEach(link => {
    expect(
      renderedLinks.find(renderedLink =>
        renderedLink.getAttribute('href') === link.href
      )
    ).toBeTruthy()
  })
})
