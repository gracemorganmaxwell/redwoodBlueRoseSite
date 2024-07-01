import React, { useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import LoadingScreen from 'src/components/LoadingSpinner/LoadingSpinner'
import NavigationComponent from 'src/components/Navigation/Navigation'

const HomePage = () => {
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
        <div>
          <Metadata title="Home" description="Home page" />
          <NavigationComponent />
        </div>
      )}
    </div>
  )
}

export default HomePage
