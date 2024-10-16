import nodemailer from 'nodemailer'
import { renderToStaticMarkup } from 'react-dom/server'

import { ContactUsEmail } from 'src/mail/SendMail'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
  },
})

/**
 * Sends an email using the ContactUsEmail React component as HTML content.
 *
 * @param {Object} params - The parameters for sending the email.
 * @param {string} params.subject - The subject of the email.
 * @param {string} params.name - Name of the sender.
 * @param {string} params.email - Email of the sender.
 * @param {string} params.message - The message content.
 * @param {Object} [params.additionalFields] - Optional additional fields for gift card requests.
 */
export const sendMail = async ({
  subject,
  name,
  email,
  message,
  additionalFields,
}) => {
  const htmlContent = renderToStaticMarkup(
    <ContactUsEmail
      subject={subject}
      name={name}
      email={email}
      message={message}
      additionalFields={additionalFields}
    />
  )

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'gracie.test.digitalcreations@gmail.com',
    subject: subject || 'New Form Submission',
    html: htmlContent,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}
