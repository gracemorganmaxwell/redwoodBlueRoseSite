import React, { useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import GiftCardRequestComponent from 'src/components/GiftCardRequestComponent/GiftCardRequestComponent'
import LoadingScreen from 'src/components/LoadingSpinner/LoadingSpinner'
import NavigationComponent from 'src/components/Navigation/Navigation'

const GiftRequestPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating a loading delay for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer) // Cleanup the timer
  }, [])

  return (
    <>
      <div className="w-full overflow-x-hidden bg-darkBlue">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Metadata
              title="Gift Request"
              description="Gift card requests form"
            />
            <NavigationComponent />
            <div className="mx-auto max-w-2xl text-center">
              <p className="my-4 font-sans text-white">
                Welcome to our Gift Card Request page! Here, you can easily
                request a gift card for your loved ones or yourself. Simply fill
                out the form below with the recipient's details, your preferred
                gift type, and the delivery method. Whether you choose an e-gift
                card or a physical gift card, we ensure a seamless and prompt
                process. If you have any special messages or instructions,
                please include them in the form. Thank you for choosing our gift
                cards to make someone's day special!
              </p>
              <div className="w-full bg-darkBlue p-6 shadow-lg">
                <GiftCardRequestComponent />
              </div>
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default GiftRequestPage
