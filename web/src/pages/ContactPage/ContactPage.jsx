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
      <div className="w-full bg-darkBlue">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Metadata title="contact" description="contact" />
            <NavigationComponent className="shadow-xl" />
            <br />
            <div className="mx-auto max-w-2xl text-center shadow-xl">
              <p className="my-4 text-center font-sans text-xl font-bold leading-5 text-white">
                Welcome to our contact page!
              </p>
              <p className="my-4 text-center font-sans italic text-white">
                We value your feedback and inquiries.
              </p>
              <p className="my-4 font-sans text-white">
                Fill out the contact form below with your name, email, and
                message.
              </p>
              <p className="my-4 font-sans text-white">
                We will respond in a timely fashion and get back to you as soon
                as possible.
              </p>
              <div>
                <ContactFormComponent />
                <br />
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
