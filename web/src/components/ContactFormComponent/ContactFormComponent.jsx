import React from 'react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
} from '@redwoodjs/forms'
import { gql, useMutation } from '@redwoodjs/web'

import FormSubmitBtnComponent from 'src/components/FormSubmitBtnComponent/FormSubmitBtnComponent'
import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import FormBottomPrivacyCopy from 'src/components/PrivacyPolicyMessageComponent/PrivacyPolicyMessageComponent'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactFormComponent = () => {
  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Thank you for your message!')
    },
  })

  const onSubmit = (data) => {
    createContact({ variables: { input: data } })
  }

  return (
    <>
      <br />
      <main className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
        <HeadingComponent title="Contact Form" />
        <Form onSubmit={onSubmit} error={error} className="space-y-4">
          <FormError
            error={error}
            className="form-error rounded bg-red-100 p-4 text-red-600"
          />

          <div>
            <Label
              name="name"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Full Name:
            </Label>
            <TextField
              name="name"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
            />
            <FieldError name="name" className="text-right text-red-600" />
          </div>

          <div>
            <Label
              name="email"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Email Address:
            </Label>
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
              errorClassName="border-red-500 text-left w-full rounded border p-2"
            />
            <FieldError name="email" className="text-red-600" />
          </div>

          <div>
            <Label
              name="message"
              className="block text-left text-gray-700"
              errorClassName="text-red-600 text-left"
            >
              Message:
            </Label>
            <TextAreaField
              name="message"
              className="mt-1 h-32 w-full rounded border border-gray-300 p-2"
              validation={{ required: true }}
              errorClassName="border-red-500 text-left w-full rounded border p-2"
            />
            <FieldError name="message" className="text-red-600" />
          </div>

          <FormSubmitBtnComponent label="Send Message" loading={loading} />
          <FormBottomPrivacyCopy />
        </Form>
      </main>
      <br />
    </>
  )
}

export default ContactFormComponent
