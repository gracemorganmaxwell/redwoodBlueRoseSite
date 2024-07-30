import React, { useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import FooterComponent from 'src/components/Footer/Footer'
import GiftCardRequestComponent from 'src/components/GiftCardRequestComponent/GiftCardRequestComponent'
import LoadingScreen from 'src/components/LoadingSpinner/LoadingSpinner'
import NavigationComponent from 'src/components/Navigation/Navigation'

const GiftRequestPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      <div className="w-full bg-darkBlue">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Metadata
              title="Gift Request"
              description="Gift card requests form"
            />
            <NavigationComponent className="shadow-xl" />
            <br />
            <div className="mx-auto max-w-2xl p-6 shadow-xl sm:px-6 lg:px-8">
              <div className="px-4 sm:px-6 lg:px-8">
                <p className="my-4 font-sans text-xl font-bold leading-5 text-white">
                  Welcome to our Gift Card Request page!
                </p>
                <p className="my-4 font-sans italic text-white">
                  Here, you can easily request a gift card for your loved ones
                  or yourself.
                </p>
                <p className="my-4 font-sans text-white">
                  Simply fill out the form below with the recipient&apos;s
                  details, your preferred gift type, and the delivery method.
                </p>
                <div className="w-full bg-darkBlue p-2">
                  <GiftCardRequestComponent />
                  <br />
                </div>
              </div>
            </div>
            <FooterComponent />
          </>
        )}
      </div>
    </main>
  )
}

export default GiftRequestPage
