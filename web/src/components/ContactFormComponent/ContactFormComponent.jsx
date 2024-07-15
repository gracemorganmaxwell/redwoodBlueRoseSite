import { gql } from '@apollo/client'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactFormComponent = () => {
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Thank you for your message!')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <br />
      <main className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Contact Form</h2>
        <Form onSubmit={onSubmit} error={error} className="space-y-4">
          <FormError
            error={error}
            className="form-error rounded bg-red-100 p-4 text-red-600"
          />

          <div>
            <Label
              name="Full Name:"
              className="mt-4 block text-gray-700"
              errorClassName="error"
            />
            <TextField
              name="name"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500"
            />
            <FieldError name="name" className="text-red-600" />
          </div>

          <div>
            <Label
              name="Email Address:"
              className="mt-4 block text-gray-700"
              errorClassName="error"
            />
            <TextField
              name="email"
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
            <FieldError name="email" className="text-red-600" />
          </div>

          <div>
            <Label
              name="Message:"
              className="mt-4 block text-gray-700"
              errorClassName="error"
            />
            <TextAreaField
              name="message"
              className="mt-1 h-32 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500"
            />
            <FieldError name="message" className="text-red-600" />
          </div>

          <Submit
            disabled={loading}
            className="mt-4 rounded bg-blue-500 p-2 text-white"
          >
            Submit Message
          </Submit>
        </Form>
      </main>
      <br />
    </>
  )
}

export default ContactFormComponent
