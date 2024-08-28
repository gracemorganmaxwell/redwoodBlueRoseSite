import React from 'react'

import {
  Html,
  Text,
  Hr,
  Body,
  Head,
  Tailwind,
  Preview,
  Container,
  Heading,
} from '@react-email/components'

import { subject } from 'src/mail/subject'

export const ContactUsEmail = ({ name, email, message, additionalFields }) => {
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
              <strong>Message:</strong>
            </Text>
            <Text className="mt-2">{message}</Text>
            {/* Add any additional fields for Gift Card Request Form */}
            {additionalFields && <>{/* Render additional fields here */}</>}
            <Hr className="my-4" />
            <Text className="text-sm text-gray-600">
              This email was sent from your website&apos;s contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
