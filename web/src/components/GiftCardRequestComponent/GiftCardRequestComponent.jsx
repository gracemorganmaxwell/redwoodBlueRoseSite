import React, { useState } from 'react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  SelectField,
  TextAreaField,
} from '@redwoodjs/forms'
import { gql, useMutation } from '@redwoodjs/web'

import SubmitButton from 'src/components/FormSubmitBtnComponent/FormSubmitBtnComponent'
import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import LineSeparatorComponent from 'src/components/LineSeparatorComponent/LineSeparatorComponent.jsx'
import FormBottomPrivacyCopy from 'src/components/PrivacyPolicyMessageComponent/PrivacyPolicyMessageComponent'

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
        <HeadingComponent title="Gift Card Request Form" />
        <Form onSubmit={onSubmit} error={error} className="space-y-4">
          <FormError
            error={error}
            className="form-error rounded bg-red-100 p-4 text-red-600"
          />

          <div>
            <Label
              name="recipientName"
              className="block text-left text-gray-700"
            >
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
            <Label name="giftType" className="block text-left text-gray-700">
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
            <Label
              name="deliveryMethod"
              className="block text-left text-gray-700"
            >
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
              <Label name="email" className="block text-left text-gray-700">
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
              <Label name="address" className="block text-left text-gray-700">
                Recipient&apos;s Address
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
              <Label
                name="gifterAddress"
                className="block text-left text-gray-700"
              >
                Purchaser&apos;s Address
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
            <Label name="message" className="block text-left text-gray-700">
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
            <Label name="gifterName" className="block text-left text-gray-700">
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
            <Label name="gifterEmail" className="block text-left text-gray-700">
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

          <SubmitButton label="Request Gift Card" loading={loading} />
        </Form>
        <br />
        <LineSeparatorComponent />
        <FormBottomPrivacyCopy />
      </main>
    </>
  )
}

export default GiftCardRequestComponent
