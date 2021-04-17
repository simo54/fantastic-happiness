import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/route menu/i)
  expect(linkElement).toBeInTheDocument()
})

it('Exists', () => {
  expect(2 + 4).toBe(6)
})
