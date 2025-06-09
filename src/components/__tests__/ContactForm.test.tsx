import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ContactForm from '../ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      expect(screen.getByText('Phone number is required')).toBeInTheDocument()
      expect(screen.getByText('Subject is required')).toBeInTheDocument()
      expect(screen.getByText('Message is required')).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    render(<ContactForm />)
    
    // Fill in all required fields
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe')
    const emailInput = screen.getByLabelText(/email/i)
    await userEvent.type(emailInput, 'invalidemail')
    await userEvent.tab() // Trigger blur event
    await userEvent.type(screen.getByLabelText(/phone/i), '+91 9876543210')
    await userEvent.type(screen.getByLabelText(/subject/i), 'Test Subject')
    await userEvent.type(screen.getByLabelText(/message/i), 'Test Message')

    await userEvent.click(screen.getByRole('button', { name: /send message/i }))

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText('Invalid email format')).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('validates phone number format', async () => {
    render(<ContactForm />)
    
    // Fill in all required fields
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe')
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/phone/i), '123')
    await userEvent.type(screen.getByLabelText(/subject/i), 'Test Subject')
    await userEvent.type(screen.getByLabelText(/message/i), 'Test Message')

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await userEvent.click(submitButton)

    // Wait for the error message to appear
    const errorMessage = await screen.findByText('Invalid phone number')
    expect(errorMessage).toBeInTheDocument()
  })

  it('submits form with valid data', async () => {
    const mockOnSubmit = jest.fn()
    render(<ContactForm onSubmit={mockOnSubmit} />)
    
    // Fill in all fields with valid data
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe')
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/phone/i), '+91 9876543210')
    await userEvent.type(screen.getByLabelText(/subject/i), 'Test Subject')
    await userEvent.type(screen.getByLabelText(/message/i), 'Test Message')

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await userEvent.click(submitButton)

    // Verify onSubmit was called with correct data
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'test@example.com',
      phone: '+91 9876543210',
      subject: 'Test Subject',
      message: 'Test Message'
    })
  })
}) 