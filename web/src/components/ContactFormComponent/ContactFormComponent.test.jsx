import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing/web'

import { sendMail } from 'src/lib/mailer'

import ContactFormComponent from './ContactFormComponent'

// Mock the sendMail function
jest.mock('src/lib/mailer', () => ({
  sendMail: jest.fn(),
}))

// Mock the useMutation hook
jest.mock('@redwoodjs/web', () => ({
  ...jest.requireActual('@redwoodjs/web'),
  useMutation: () => [
    jest.fn().mockResolvedValue({ data: { createContact: { id: 1 } } }),
    { loading: false, error: null },
  ],
}))

describe('ContactFormComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactFormComponent />)
    }).not.toThrow()
  })

  it('renders the form fields', () => {
    render(<ContactFormComponent />)

    expect(screen.getByLabelText('Full Name:')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address:')).toBeInTheDocument()
    expect(screen.getByLabelText('Message:')).toBeInTheDocument()
  })

  it('submits the form and calls sendMail', async () => {
    render(<ContactFormComponent />)

    fireEvent.change(screen.getByLabelText('Full Name:'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText('Email Address:'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Message:'), {
      target: { value: 'Hello, this is a test message.' },
    })

    fireEvent.click(screen.getByText('Send Message'))

    await waitFor(() => {
      expect(sendMail).toHaveBeenCalledWith({
        subject: 'New Contact Form Submission',
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, this is a test message.',
      })
    })

    expect(screen.getByText('Thank you for your message!')).toBeInTheDocument()
  })
})
