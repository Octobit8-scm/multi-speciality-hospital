import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Welcome to Multi Speciality Hospital/i)).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText(/Your Health, Our Priority/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Book Appointment/i })).toBeInTheDocument()
  })

  it('renders the emergency contact', () => {
    render(<Hero />)
    expect(screen.getByText(/Emergency Contact/i)).toBeInTheDocument()
    expect(screen.getByText(/\+91 1234567890/i)).toBeInTheDocument()
  })
}) 