import { MockedProvider } from '@apollo/client/testing'

import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing/web'

import ContactFormComponent from './ContactFormComponent'

// Mock the GraphQL mutation
const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const mocks = [
  {
    request: {
      query: CREATE_CONTACT_MUTATION,
      variables: {
        input: {
          name: 'John Doe',
          email: 'john@example.com',
          message: 'Hello, this is a test message.',
          recaptchaValue: 'dummy-token',
        },
      },
    },
    result: {
      data: {
        createContact: {
          id: 1,
        },
      },
    },
  },
]

describe('ContactFormComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
          <ContactFormComponent />
        </MockedProvider>
      )
    }).not.toThrow()
  })

  it('renders the form fields', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ContactFormComponent />
      </MockedProvider>
    )

    expect(screen.getByLabelText('Full Name:')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address:')).toBeInTheDocument()
    expect(screen.getByLabelText('Message:')).toBeInTheDocument()
  })

  it('submits the form successfully', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ContactFormComponent />
      </MockedProvider>
    )

    fireEvent.change(screen.getByLabelText('Full Name:'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText('Email Address:'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Message:'), {
      target: { value: 'Hello, this is a test message.' },
    })

    fireEvent.click(screen.getByText('Send Message'))

    await waitFor(() => {
      expect(
        screen.getByText('Thank you for your message!')
      ).toBeInTheDocument()
    })
  })

  it('handles submission errors', async () => {
    const errorMocks = [
      {
        request: {
          query: CREATE_CONTACT_MUTATION,
          variables: {
            input: {
              name: 'John Doe',
              email: 'john@example.com',
              message: 'Hello, this is a test message.',
              recaptchaValue: 'dummy-token',
            },
          },
        },
        error: new Error('Submission failed'),
      },
    ]

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ContactFormComponent />
      </MockedProvider>
    )

    fireEvent.change(screen.getByLabelText('Full Name:'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText('Email Address:'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Message:'), {
      target: { value: 'Hello, this is a test message.' },
    })

    fireEvent.click(screen.getByText('Send Message'))

    await waitFor(() => {
      expect(
        screen.getByText('There was an error submitting your message.')
      ).toBeInTheDocument()
    })
  })
})
