import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import { Button } from '../components/Button'

test('renders as a button', () => {
  const { getByRole } = render(<Button type="button">btn</Button>)
  expect(getByRole('button', { name: /btn/i })).toBeDefined()
})

test('renders as a link', () => {
  const { getByRole } = render(
    <Button as="a" href="/">
      link
    </Button>,
  )
  expect(getByRole('link', { name: /link/i })).toBeDefined()
})
