import { Mailer } from '@redwoodjs/mailer-core'
import { NodemailerMailHandler } from '@redwoodjs/mailer-handler-nodemailer'
import { ReactEmailRenderer } from '@redwoodjs/mailer-renderer-react-email'

export const mailer = new Mailer({
  handling: {
    handlers: {
      nodemailer: new NodemailerMailHandler({
        transport: {
          service: 'gmail',
          auth: {
            user: process.env.REDWOOD_ENV_GMAIL_USER,
            pass: process.env.REDWOOD_ENV_GMAIL_PASS,
          },
        },
      }),
    },
    default: 'nodemailer',
  },
  rendering: {
    renderers: {
      reactEmail: new ReactEmailRenderer(),
    },
    default: 'reactEmail',
  },
})
