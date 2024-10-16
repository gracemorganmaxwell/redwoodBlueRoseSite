import { sendMail } from 'src/lib/mailer'

import { createContact } from './contacts'

// Mock the sendMail function
jest.mock('src/lib/mailer', () => ({
  sendMail: jest.fn(),
}))

describe('createContact', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('creates a contact and sends an email', async () => {
    const input = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, this is a test message.',
      recaptchaValue: 'dummy-token',
    }

    const contact = await createContact({ input })

    expect(contact).toHaveProperty('id')
    expect(sendMail).toHaveBeenCalledWith({
      subject: 'New Contact Form Submission',
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, this is a test message.',
    })
  })

  it('throws an error if sending email fails', async () => {
    sendMail.mockImplementationOnce(() => {
      throw new Error('Failed to send email')
    })

    const input = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hi, this is another test message.',
      recaptchaValue: 'dummy-token',
    }

    await expect(createContact({ input })).rejects.toThrow(
      'Failed to send email'
    )
    expect(sendMail).toHaveBeenCalledWith({
      subject: 'New Contact Form Submission',
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hi, this is another test message.',
    })
  })
})
