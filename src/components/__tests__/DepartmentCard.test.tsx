import { render, screen } from '@testing-library/react'
import DepartmentCard from '../DepartmentCard'

const mockDepartment = {
  id: '1',
  name: 'Cardiology',
  slug: 'cardiology',
  icon: 'FaHeartbeat',
  description: 'Comprehensive heart care services',
  image: '/images/departments/cardiology.jpg',
  services: ['ECG', 'Echo', 'Stress Test'],
  features: ['24/7 Emergency Care', 'Advanced Diagnostics']
}

describe('DepartmentCard', () => {
  it('renders department name', () => {
    render(<DepartmentCard department={mockDepartment} />)
    expect(screen.getByText(mockDepartment.name)).toBeInTheDocument()
  })

  it('renders department description', () => {
    render(<DepartmentCard department={mockDepartment} />)
    expect(screen.getByText(mockDepartment.description)).toBeInTheDocument()
  })

  it('renders department services', () => {
    render(<DepartmentCard department={mockDepartment} />)
    mockDepartment.services.forEach(service => {
      expect(screen.getByText(service)).toBeInTheDocument()
    })
  })

  it('renders department features', () => {
    render(<DepartmentCard department={mockDepartment} />)
    mockDepartment.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })

  it('renders the department image', () => {
    render(<DepartmentCard department={mockDepartment} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', expect.stringContaining(mockDepartment.image))
    expect(image).toHaveAttribute('alt', mockDepartment.name)
  })
}) 