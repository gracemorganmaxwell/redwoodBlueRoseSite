import React from 'react'

import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Heading,
  Hr,
  Text,
} from 'some-library' // Replace 'some-library' with the actual library you are using

import { subject } from 'src/mail/subject'

export const ContactUsEmail = ({ name, email, message, additionalFields }) => {
  const isGiftCardRequest = additionalFields !== undefined

  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="mx-auto my-6 max-w-lg rounded-lg bg-white p-6 shadow-md">
            <Heading className="text-center text-xl font-bold">
              {subject}
            </Heading>
            <Hr className="my-4" />
            <Text className="text-lg">
              <strong>Name:</strong> {name}
            </Text>
            <Text className="text-lg">
              <strong>Email:</strong> {email}
            </Text>
            <Text className="text-lg">
              <strong>Message:</strong> {message}
            </Text>
            {additionalFields && (
              <>
                <Text className="text-lg">
                  <strong>Recipient&apos;s Name:</strong>{' '}
                  {additionalFields.recipientName}
                </Text>
                <Text className="text-lg">
                  <strong>Gift Card Type:</strong> {additionalFields.giftType}
                </Text>
                <Text className="text-lg">
                  <strong>Delivery Method:</strong>{' '}
                  {additionalFields.deliveryMethod}
                </Text>
                {additionalFields.deliveryMethod === 'E_Gift' && (
                  <Text className="text-lg">
                    <strong>Recipient&apos;s Email:</strong>{' '}
                    {additionalFields.email}
                  </Text>
                )}
                {additionalFields.deliveryMethod === 'Physical' && (
                  <Text className="text-lg">
                    <strong>Recipient&apos;s Address:</strong>{' '}
                    {additionalFields.address}
                  </Text>
                )}
                {additionalFields.deliveryMethod === 'BuyersPhysical' && (
                  <Text className="text-lg">
                    <strong>Purchaser&apos;s Address:</strong>{' '}
                    {additionalFields.gifterAddress}
                  </Text>
                )}
              </>
            )}
            <Hr className="my-4" />
            <Text className="text-sm text-gray-600">
              This email was sent from your website&apos;s{' '}
              {isGiftCardRequest ? 'Gift Card Request Form' : 'Contact Form'}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
