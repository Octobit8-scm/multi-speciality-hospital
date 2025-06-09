import { render, screen } from '@testing-library/react'
import DoctorCard from '../DoctorCard'

const mockDoctor = {
  id: '1',
  name: 'Dr. Rajesh Kumar',
  specialty: 'Cardiology',
  image: '/images/doctors/doctor1.jpg',
  experience: '15 years',
  qualification: 'MBBS, MD, DM',
  phone: '+91 9876543210',
  email: 'dr.rajesh@hospital.com',
  location: 'Main Building, Floor 2',
  schedule: {
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    wednesday: '9:00 AM - 5:00 PM',
    thursday: '9:00 AM - 5:00 PM',
    friday: '9:00 AM - 5:00 PM'
  }
}

describe('DoctorCard', () => {
  it('renders doctor name', () => {
    render(<DoctorCard doctor={mockDoctor} />)
    expect(screen.getByText(mockDoctor.name)).toBeInTheDocument()
  })

  it('renders doctor specialty', () => {
    render(<DoctorCard doctor={mockDoctor} />)
    expect(screen.getByText(mockDoctor.specialty)).toBeInTheDocument()
  })

  it('renders doctor experience', () => {
    render(<DoctorCard doctor={mockDoctor} />)
    expect(screen.getByText((content, node) => node.textContent === `Experience: ${mockDoctor.experience}`)).toBeInTheDocument()
  })

  it('renders doctor qualification', () => {
    render(<DoctorCard doctor={mockDoctor} />)
    expect(screen.getByText((content, node) => node.textContent === `Qualification: ${mockDoctor.qualification}`)).toBeInTheDocument()
  })

  it('renders doctor contact information', () => {
    render(<DoctorCard doctor={mockDoctor} />)
    expect(screen.getByText(mockDoctor.phone)).toBeInTheDocument()
    expect(screen.getByText(mockDoctor.email)).toBeInTheDocument()
  })

  it('renders doctor location', () => {
    render(<DoctorCard doctor={mockDoctor} />)
    expect(screen.getByText(mockDoctor.location)).toBeInTheDocument()
  })

  it('renders the doctor image', () => {
    render(<DoctorCard doctor={mockDoctor} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', expect.stringContaining(mockDoctor.image))
    expect(image).toHaveAttribute('alt', mockDoctor.name)
  })
}) 