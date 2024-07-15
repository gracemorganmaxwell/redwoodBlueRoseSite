import { React, useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import AboutRow from 'src/components/AboutRow/AboutRow'
import CtaRow from 'src/components/CtaRow/CtaRow'
import GalleryRow from 'src/components/GalleryRow/GalleryRow'
import HeroComponent from 'src/components/Hero/Hero'
import LoadingScreen from 'src/components/LoadingSpinner/LoadingSpinner'
import NavigationComponent from 'src/components/Navigation/Navigation'
import TreatmentRow from 'src/components/TreatmentsRow/TreatmentsRow'

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
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Metadata title="Home" description="Home page" />
          <NavigationComponent />
          <main>
            <HeroComponent />
            <AboutRow />
            <GalleryRow />
            <TreatmentRow />
            <CtaRow />
          </main>
        </div>
      )}
    </div>
  )
}

export default HomePage
