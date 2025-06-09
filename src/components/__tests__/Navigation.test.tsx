import { render, screen } from '@testing-library/react'
import Navigation from '../Navigation'

describe('Navigation', () => {
  it('renders the hospital name', () => {
    render(<Navigation />)
    expect(screen.getByText(/Multi-speciality Hospital/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navigation />)
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/About/i)).toBeInTheDocument()
    expect(screen.getByText(/Departments/i)).toBeInTheDocument()
    expect(screen.getByText(/Doctors/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
  })
}) 