import React, { useState, useEffect } from 'react'

import Metadata from '@redwoodjs/web'

import FooterComponent from 'src/components/Footer/Footer'
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
    <div className="overflow-x-hidden">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Metadata title="Gift Request" description="Gift Requests" />
          <NavigationComponent />
          <h1>Gift Card Requests Page</h1>
          <GiftCardRequestComponent />
          <FooterComponent />
        </>
      )}
    </div>
  )
}

export default GiftRequestPage
