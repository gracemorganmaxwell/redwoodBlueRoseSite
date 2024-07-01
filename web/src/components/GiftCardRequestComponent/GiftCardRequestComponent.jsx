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
  const [create, { loading, error }] = useMutation(CREATE_GIFT_CARD_REQUEST, {
    onCompleted: () => {
      alert('Your gift card request has been submitted!')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <main>
      <Form onSubmit={onSubmit} error={error}>
        <FormError error={error} />

        <Label name="recipientName" errorClassName="error" />
        <TextField
          name="recipientName"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="recipientName" className="error" />

        <Label name="giftType" errorClassName="error" />
        <SelectField
          name="giftType"
          validation={{ required: true }}
          errorClassName="error"
        >
          <option value="">Select Gift Type</option>
          <option value="Monetary">Monetary</option>
          <option value="Service">Service</option>
        </SelectField>
        <FieldError name="giftType" className="error" />

        <Label name="deliveryMethod" errorClassName="error" />
        <SelectField
          name="deliveryMethod"
          validation={{ required: true }}
          errorClassName="error"
        >
          <option value="">Select Delivery Method</option>
          <option value="E_Gift">E-Gift Card</option>
          <option value="Physical">Physical Gift Card</option>
        </SelectField>
        <FieldError name="deliveryMethod" className="error" />

        <Label name="email" errorClassName="error" />
        <TextField
          name="email"
          validation={{ required: (data) => data.deliveryMethod === 'E_Gift' }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="address" errorClassName="error" />
        <TextField
          name="address"
          validation={{
            required: (data) => data.deliveryMethod === 'Physical',
          }}
          errorClassName="error"
        />
        <FieldError name="address" className="error" />

        <Label name="message" errorClassName="error" />
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Label name="gifterName" errorClassName="error" />
        <TextField
          name="gifterName"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="gifterName" className="error" />

        <Label name="gifterEmail" errorClassName="error" />
        <TextField
          name="gifterEmail"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="gifterEmail" className="error" />

        <Submit disabled={loading}>Submit Request</Submit>
      </Form>
    </main>
  )
}

export default GiftCardRequestComponent
