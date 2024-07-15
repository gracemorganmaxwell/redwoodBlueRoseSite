import React, { useState } from 'react'

import { gql } from '@apollo/client'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  SelectField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_GIFT_CARD_REQUEST = gql`
  mutation CreateGiftCardRequestMutation($input: CreateGiftCardRequestInput!) {
    createGiftCardRequest(input: $input) {
      id
    }
  }
`

const GiftCardRequestComponent = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [create, { loading, error }] = useMutation(CREATE_GIFT_CARD_REQUEST, {
    onCompleted: () => {
      alert('Your gift card request has been submitted!')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  const handleDeliveryMethodChange = (event) => {
    setDeliveryMethod(event.target.value)
  }

  return (
    <>
      <br />
      <main className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Gift Card Request Form</h2>
        <Form onSubmit={onSubmit} error={error} className="space-y-4">
          <FormError
            error={error}
            className="form-error rounded bg-red-100 p-4 text-red-600"
          />

          <div>
            <Label name="recipientName" className="mt-4 block text-gray-700">
              Recipient&apos;s Name
            </Label>
            <TextField
              name="recipientName"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500"
            />
            <FieldError name="recipientName" className="text-red-600" />
          </div>

          <div>
            <Label name="giftType" className="mt-4 block text-gray-700">
              Gift Card Type
            </Label>
            <SelectField
              name="giftType"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500"
            >
              <option value="">Select Gift Type</option>
              <option value="Monetary">Monetary</option>
              <option value="Service">Service</option>
            </SelectField>
            <FieldError name="giftType" className="text-red-600" />
          </div>

          <div>
            <Label name="deliveryMethod" className="mt-4 block text-gray-700">
              Delivery Method
            </Label>
            <SelectField
              name="deliveryMethod"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500"
              onChange={handleDeliveryMethodChange}
            >
              <option value="">Select Delivery Method</option>
              <option value="E_Gift">E-Gift Card to Recipient</option>
              <option value="Physical">
                Physical Gift Card Sent to Recipient
              </option>
              <option value="BuyersPhysical">
                Physical Gift Card Sent to Purchaser
              </option>
              <option value="BuyersE_Gift">E-Gift Card to Purchaser</option>
            </SelectField>
            <FieldError name="deliveryMethod" className="text-red-600" />
          </div>

          {deliveryMethod === 'E_Gift' && (
            <div>
              <Label name="email" className="mt-4 block text-gray-700">
                Recipient&apos;s Email
              </Label>
              <TextField
                name="email"
                className="mt-1 w-full rounded border border-gray-300 p-2"
                validation={{ required: true }}
                errorClassName="border-red-500"
              />
              <FieldError name="email" className="text-red-600" />
            </div>
          )}

          {deliveryMethod === 'Physical' && (
            <div>
              <Label name="address" className="mt-4 block text-gray-700">
                Recipient&rsquo;s Address
              </Label>
              <TextField
                name="address"
                className="mt-1 w-full rounded border border-gray-300 p-2"
                validation={{ required: true }}
                errorClassName="border-red-500"
              />
              <FieldError name="address" className="text-red-600" />
            </div>
          )}

          {deliveryMethod === 'BuyersPhysical' && (
            <div>
              <Label name="gifterAddress" className="mt-4 block text-gray-700">
                Purchaser&rsquo;s Address
              </Label>
              <TextField
                name="gifterAddress"
                className="mt-1 w-full rounded border border-gray-300 p-2"
                validation={{ required: true }}
                errorClassName="border-red-500"
              />
              <FieldError name="gifterAddress" className="text-red-600" />
            </div>
          )}

          <div>
            <Label name="message" className="mt-4 block text-gray-700">
              Message
            </Label>
            <TextAreaField
              name="message"
              className="mt-1 h-32 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500"
            />
            <FieldError name="message" className="text-red-600" />
          </div>

          <div>
            <Label name="gifterName" className="mt-4 block text-gray-700">
              Purchased By
            </Label>
            <TextField
              name="gifterName"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500"
            />
            <FieldError name="gifterName" className="text-red-600" />
          </div>

          <div>
            <Label name="gifterEmail" className="mt-4 block text-gray-700">
              Purchaser&apos;s Email
            </Label>
            <TextField
              name="gifterEmail"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: 'Invalid email address',
                },
              }}
              errorClassName="border-red-500"
            />
            <FieldError name="gifterEmail" className="text-red-600" />
          </div>

          <Submit
            disabled={loading}
            className="mt-4 rounded bg-blue-500 p-2 text-white"
          >
            Submit Request
          </Submit>
        </Form>
        <p className="mt-4 text-gray-500">
          We respect your privacy. Your information is safe and will never be
          shared.
        </p>
      </main>
      <br />
    </>
  )
}

export default GiftCardRequestComponent
