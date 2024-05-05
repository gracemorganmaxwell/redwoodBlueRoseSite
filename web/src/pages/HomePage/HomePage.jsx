import React, { useState, useEffect } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import AboutRow from 'src/components/AboutRow/AboutRow'
import CtaRow from 'src/components/CtaRow/CtaRow'
import GalleryRow from 'src/components/GalleryRow/GalleryRow'
import LoadingScreen from 'src/components/LoadingSpinner/LoadingSpinner'
import TestimoniesRow from 'src/components/TestimoniesRow/TestimoniesRow.stories'
import TreatmentRow from 'src/components/TreatmentsRow/TreatmentsRow'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Simulating a loading delay for demonstration
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="overflow-x-hidden">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Metadata title="Home" description="Home page" />

          <AboutRow />
          <CtaRow />
          <TreatmentRow />
          <GalleryRow />
          <TestimoniesRow />

          <h1>HomePage</h1>
          <p>
            Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
          </p>
          <p>
            My default route is named <code>home</code>, link to me with `
            <Link to={routes.home()}>Home</Link>`
          </p>
        </>
      )}
    </div>
  )
}

export default HomePage
