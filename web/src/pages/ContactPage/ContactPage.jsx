import { React, useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import ContactFormComponent from 'src/components/ContactFormComponent/ContactFormComponent'
import FooterComponent from 'src/components/Footer/Footer'
import LoadingScreen from 'src/components/LoadingSpinner/LoadingSpinner'
import NavigationComponent from 'src/components/Navigation/Navigation'

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating a loading delay for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer) // Cleanup the timer
  }, [])

  return (
    <main>
      <div className="w-full overflow-x-hidden bg-darkBlue">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Metadata title="contact" description="contact" />
            <NavigationComponent />
            <div className="mx-auto max-w-2xl text-center">
              <p className="my-4 font-sans text-white">
                Thank you for reaching out to us! We value your feedback and
                inquiries. Please fill out the contact form below with your
                name, email, and message. Our team is committed to providing
                timely responses and will get back to you as soon as possible.
                Whether you have questions, comments, or need assistance, we are
                here to help. Your input is important to us, and we strive to
                ensure a positive experience with our services.
              </p>
              <div className="shadow-xl">
                <ContactFormComponent />
              </div>
            </div>
            <FooterComponent />
          </>
        )}
      </div>
    </main>
  )
}

export default ContactPage
