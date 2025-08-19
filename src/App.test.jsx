import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1 })
    ).toHaveTextContent("Hi, I'm Kerim Doruk Akinci")
  })

  it('shows LinkedIn social link', () => {
    render(<App />)
    const link = screen.getAllByRole('link', { name: /linkedin/i })[0]
    expect(link).toHaveAttribute(
      'href',
      'https://tr.linkedin.com/in/dorukakinci'
    )
  })
})
