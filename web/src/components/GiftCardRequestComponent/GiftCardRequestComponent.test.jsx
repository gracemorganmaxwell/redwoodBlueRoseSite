import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing/web'

import { sendMail } from 'src/lib/mailer'

import GiftCardRequestComponent from './GiftCardRequestComponent'

// Mock the sendMail function
jest.mock('src/lib/mailer', () => ({
  sendMail: jest.fn(),
}))

// Mock the useMutation hook
jest.mock('@redwoodjs/web', () => ({
  ...jest.requireActual('@redwoodjs/web'),
  useMutation: () => [
    jest.fn().mockResolvedValue({ data: { createGiftCardRequest: { id: 1 } } }),
    { loading: false, error: null },
  ],
}))

describe('GiftCardRequestComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GiftCardRequestComponent />)
    }).not.toThrow()
  })

  it('renders the form fields', () => {
    render(<GiftCardRequestComponent />)

    expect(screen.getByLabelText("Recipient's Name")).toBeInTheDocument()
    expect(screen.getByLabelText('Gift Card Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Delivery Method')).toBeInTheDocument()
  })

  it('submits the form and calls sendMail', async () => {
    render(<GiftCardRequestComponent />)

    fireEvent.change(screen.getByLabelText("Recipient's Name"), {
      target: { value: 'Jane Doe' },
    })
    fireEvent.change(screen.getByLabelText('Gift Card Type'), {
      target: { value: 'Monetary' },
    })
    fireEvent.change(screen.getByLabelText('Delivery Method'), {
      target: { value: 'E_Gift' },
    })
    fireEvent.change(screen.getByLabelText("Recipient's Email"), {
      target: { value: 'jane@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Happy Birthday!' },
    })
    fireEvent.change(screen.getByLabelText('Purchased By'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText("Purchaser's Email"), {
      target: { value: 'john@example.com' },
    })

    fireEvent.click(screen.getByText('Request Gift Card'))

    await waitFor(() => {
      expect(sendMail).toHaveBeenCalledWith({
        subject: 'New Gift Card Request',
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Happy Birthday!',
        additionalFields: {
          recipientName: 'Jane Doe',
          giftType: 'Monetary',
          deliveryMethod: 'E_Gift',
          email: 'jane@example.com',
        },
      })
    })

    expect(
      screen.getByText('Your gift card request has been submitted!')
    ).toBeInTheDocument()
  })
})
