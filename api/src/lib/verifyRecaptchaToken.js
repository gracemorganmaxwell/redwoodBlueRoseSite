// api/src/lib/recaptcha.js
import fetch from 'node-fetch'

export const verifyRecaptchaToken = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: 'POST',
    }
  )
  const data = await response.json()
  return data.success
}
