import fetch from 'node-fetch'

import { mailer } from 'src/lib/mailer'
import { ContactFormSubmission } from 'src/mail/ContactFormSubmission/ContactFormSubmission'

export const sendContactMessage = async ({ input }) => {
  const { name, email, message, recaptchaValue } = input

  // Verify reCAPTCHA
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.REDWOOD_ENV_RECAPTCHA_SECRET_KEY}&response=${recaptchaValue}`,
    }
  )
  const recaptchaData = await recaptchaResponse.json()

  if (!recaptchaData.success) {
    console.error('reCAPTCHA validation failed:', recaptchaData['error-codes'])
    throw new Error('reCAPTCHA validation failed. Please try again.')
  }

  try {
    await mailer.send(ContactFormSubmission({ name, email, message }), {
      to: 'gracemorganmaxwell@gmail.com', // Replace with the actual business Gmail address
      subject: 'New Contact Form Submission',
      replyTo: email,
      from: 'no-reply@yourdomain.com',
    })
    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Failed to send email. Please try again later.')
  }
}
