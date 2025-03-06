import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import NotFound from '../app/not-found'

const { container, getByRole } = render(<NotFound />)

test('has an h1', () => {
  expect(getByRole('heading', { level: 1, name: /404/i })).toBeDefined()
})

test('links home', () => {
  expect(getByRole('link', { name: /return home/i })).toBeDefined()
})

test('matches snapshot', () => {
  expect(container).toMatchSnapshot()
})
