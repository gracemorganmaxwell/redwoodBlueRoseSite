import { gql } from '@apollo/client'
import goldAssentBtnCorner from 'web/public/images/goldAssentBtnCorner.svg'

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
        <h2 className="mb-4 text-left text-xl font-semibold">Contact Form</h2>
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
          <br />
          <div className="relative">
            <img
              src={goldAssentBtnCorner}
              alt="Gold accent top"
              className="absolute bottom-0 left-0 mb-[48px] ml-[-48px] w-[70%]"
            />
            <Submit
              disabled={loading}
              className="relative z-10 mt-4 flex rounded-[16px] border border-darkBlue bg-white px-6 py-3 text-lg font-semibold text-darkBlue shadow-xl transition-colors duration-300 hover:bg-darkBlue hover:text-white"
            >
              Submit Message
            </Submit>
            <img
              src={goldAssentBtnCorner}
              alt="Gold accent bottom"
              className="absolute bottom-0 left-0 mb-[-16px] ml-[-36px] w-[70%] rotate-180"
            />
          </div>
        </Form>
      </main>
      <br />
    </>
  )
}

export default ContactFormComponent
