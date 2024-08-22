import fetch from 'node-fetch'

import { mailer } from 'src/lib/mailer'

import { sendContactMessage } from './contacts'

jest.mock('node-fetch')
jest.mock('src/lib/mailer', () => ({
  mailer: {
    send: jest.fn(),
  },
}))

describe('sendContactMessage', () => {
  const recaptchaSuccessResponse = {
    success: true,
  }

  const recaptchaFailureResponse = {
    success: false,
    'error-codes': ['invalid-input-response'],
  }

  const input = {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, this is a test message.',
    recaptchaValue: 'test-recaptcha-token',
  }

  beforeEach(() => {
    fetch.mockClear()
    mailer.send.mockClear()
  })

  it('sends an email when reCAPTCHA is successful', async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(recaptchaSuccessResponse),
    })

    await sendContactMessage({ input })

    expect(fetch).toHaveBeenCalledWith(
      'https://www.google.com/recaptcha/api/siteverify',
      expect.objectContaining({
        method: 'POST',
      })
    )
    expect(mailer.send).toHaveBeenCalledWith(expect.any(Object), {
      to: 'gracemorganmaxwell@gmail.com',
      subject: 'New Contact Form Submission',
      replyTo: input.email,
      from: 'no-reply@yourdomain.com',
    })
  })

  it('throws an error when reCAPTCHA validation fails', async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(recaptchaFailureResponse),
    })

    await expect(sendContactMessage({ input })).rejects.toThrow(
      'reCAPTCHA validation failed. Please try again.'
    )

    expect(fetch).toHaveBeenCalledWith(
      'https://www.google.com/recaptcha/api/siteverify',
      expect.objectContaining({
        method: 'POST',
      })
    )
    expect(mailer.send).not.toHaveBeenCalled()
  })

  it('throws an error when email sending fails', async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(recaptchaSuccessResponse),
    })

    mailer.send.mockRejectedValueOnce(new Error('Email sending failed'))

    await expect(sendContactMessage({ input })).rejects.toThrow(
      'Failed to send email. Please try again later.'
    )

    expect(mailer.send).toHaveBeenCalled()
  })
})
