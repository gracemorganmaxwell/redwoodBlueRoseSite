import { db } from 'src/lib/db'
import { sendMail } from 'src/lib/mailer'

export const createGiftCardRequest = async ({ input }) => {
  const giftCardRequest = await db.giftCardRequest.create({
    data: input,
  })

  // Send the email after saving the gift card request
  await sendMail({
    subject: 'New Gift Card Request',
    name: input.name,
    email: input.email,
    message: input.message,
    additionalFields: {
      recipientName: input.recipientName,
      giftType: input.giftType,
      deliveryMethod: input.deliveryMethod,
      address: input.address,
      gifterAddress: input.gifterAddress,
    },
  })

  return giftCardRequest
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
