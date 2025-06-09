import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders hospital name and description', () => {
    render(<Footer />)
    expect(screen.getByText(/Multi-speciality Hospital/i)).toBeInTheDocument()
    expect(screen.getByText(/Providing world-class healthcare services with compassion and excellence/i)).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/Contact Info/i)).toBeInTheDocument()
    expect(screen.getByText(/\+91 60020 60024/i)).toBeInTheDocument()
    expect(screen.getByText(/info@multi-speciality-hospitalhospitals.com/i)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument()
    expect(screen.getByText(/About Us/i)).toBeInTheDocument()
    expect(screen.getByText(/Departments/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Doctors/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
  })

  it('renders working hours', () => {
    render(<Footer />)
    expect(screen.getByText(/Working Hours/i)).toBeInTheDocument()
    expect(screen.getByText(/Monday - Friday: 9:00 AM - 6:00 PM/i)).toBeInTheDocument()
    expect(screen.getByText(/Saturday: 9:00 AM - 4:00 PM/i)).toBeInTheDocument()
    expect(screen.getByText(/Sunday: Emergency Only/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 Emergency Services/i)).toBeInTheDocument()
  })

  it('renders copyright information', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2025 multi-speciality-hospital Hospital/i)).toBeInTheDocument()
  })
}) 