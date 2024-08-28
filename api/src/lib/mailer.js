import React from 'react'

import nodemailer from 'nodemailer'
import { renderToStaticMarkup } from 'react-dom/server'

import { ContactUsEmail } from 'src/mail/SendMail'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

export const sendMail = async ({
  subject,
  name,
  email,
  message,
  additionalFields,
}) => {
  const htmlContent = renderToStaticMarkup(
    <ContactUsEmail
      name={name}
      email={email}
      message={message}
      additionalFields={additionalFields}
    />
  )

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: 'your-gmail-account@gmail.com',
    subject: subject || 'New Form Submission',
    html: htmlContent,
  })
}
