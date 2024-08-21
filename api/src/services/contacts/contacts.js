import fetch from 'node-fetch'

import { db } from 'src/lib/db'
import { mailer } from 'src/lib/mailer'
import { ContactUsEmail } from 'src/mail/ContactUsEmail'

export const sendContactMessage = async ({ input }) => {
  const { name, email, message, recaptchaValue } = input

  // Verify reCAPTCHA
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.reCAPTCHA_secret_key}&response=${recaptchaValue}`,
    }
  )
  const recaptchaData = await recaptchaResponse.json()

  if (!recaptchaData.success) {
    throw new Error('reCAPTCHA validation failed')
  }

  await mailer.send(ContactUsEmail({ name, email, message }), {
    to: 'business@example.com', // Replace with the business Gmail address
    subject: 'New Contact Form Submission',
    replyTo: email,
    from: 'no-reply@yourdomain.com',
  })

  return { success: true, message: 'Email sent successfully!' }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact = ({ input }) => {
  return db.contact.create({
    data: input,
  })
}

export const updateContact = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}
