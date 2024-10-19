import { db } from 'src/lib/db'
import { sendMail } from 'src/lib/mailer'

export const createContact = async ({ input }) => {
  const { data, error } = await db
    .from('contacts')
    .insert(input)
    .single()

  if (error) {
    throw error
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

export const updateContact = async ({ id, input, context }) => {
  // Authorization is handled by @requireAuth
  return db.contact.update({
    where: { id },
    data: input,
  })
}

export const deleteContact = async ({ id, context }) => {
  // Authorization is handled by @requireAuth
  return db.contact.delete({
    where: { id },
  })
}
