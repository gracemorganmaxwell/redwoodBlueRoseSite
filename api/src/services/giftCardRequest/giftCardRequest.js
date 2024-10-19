import { db } from 'src/lib/db'
import { sendMail } from 'src/lib/mailer'

export const createGiftCardRequest = async ({ input }) => {
  const { data, error } = await db
    .from('gift_card_requests')
    .insert(input)
    .single()

  if (error) {
    throw error
  }

  // Send email notification
  await sendMail({
    subject: 'New Gift Card Request',
    name: input.gifterName,
    email: input.gifterEmail,
    message: `Gift Type: ${input.giftType}, Recipient: ${input.recipientName}`,
    additionalFields: input,
  })

  return data
}

export const updateGiftCardRequest = async ({ id, input, context }) => {
  // Authorization is handled by @requireAuth
  return db.giftCardRequest.update({
    where: { id },
    data: input,
  })
}

export const deleteGiftCardRequest = async ({ id, context }) => {
  // Authorization is handled by @requireAuth
  return db.giftCardRequest.delete({
    where: { id },
  })
}
