import React, { useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import { ContactFormComponent } from 'src/components/ContactForm/ContactForm'
import { LoadingScreen } from 'src/components/LoadingSpinner/LoadingSpinner'

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
    <div className="overflow-x-hidden">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Metadata title="Contact Us" description="Contact page" />
          <ContactFormComponent />
        </>
      )}
    </div>
  )
}

export default ContactPage
