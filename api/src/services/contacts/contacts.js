import { db } from 'src/lib/db'
import { sendMail } from 'src/lib/mailer'

export const createContact = async ({ input }) => {
  const { data, error } = await db
    .contact
    .create({
      data: input,
    })

  if (error) {
    throw new Error(error.message)
  }

  // Send email notification
  await sendMail({
    subject: 'New Contact Form Submission',
    name: input.name,
    email: input.email,
    message: input.message,
  })

  return data
}

// Similarly update updateContact and deleteContact as needed