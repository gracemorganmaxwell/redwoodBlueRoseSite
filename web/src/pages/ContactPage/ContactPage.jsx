import React, { useState, useEffect } from 'react'

import Metadata from '@redwoodjs/web'

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
      <div className="overflow-x-hidden">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Metadata title="contact" description="contact" />
            <NavigationComponent />
            <h1>Contact Us</h1>
            <ContactFormComponent />
            <FooterComponent />
          </>
        )}
      </div>
    </main>
  )
}

export default ContactPage
