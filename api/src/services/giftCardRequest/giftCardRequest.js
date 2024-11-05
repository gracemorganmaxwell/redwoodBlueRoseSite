import { db } from 'src/lib/db'
import { sendMail } from 'src/lib/mailer'

export const createGiftCardRequest = async ({ input }) => {
  const { data, error } = await db
    .giftCardRequest
    .create({
      data: input,
    })

  if (error) {
    throw new Error(error.message)
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

// Similarly update updateGiftCardRequest and deleteGiftCardRequest as needed