import React from 'react'

import desktopHeroImage from 'public/images/desktopHeroImage.png'
import heroBackgroundImage from 'public/images/heroBkgroundImage.jpeg'

import CtaButton from '../CtaButton/CtaButton'

const HeroComponent = () => {
  const backgroundImage =
    window.innerWidth >= 1024 ? desktopHeroImage : heroBackgroundImage

  return (
    <div className="relative bg-darkBlue">
      <div
        className={`relative h-screen w-full bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-start px-4 py-16 text-left text-white sm:px-6 sm:py-24 md:px-8 lg:px-12 xl:px-16">
          <div className="ml-10 w-full max-w-3xl xl:ml-40">
            <h1 className="mb-6 font-gfs_didot_regular text-4xl font-bold leading-tight sm:mb-8 sm:text-5xl md:text-6xl lg:mb-10 xl:text-7xl">
              Christchurch&apos;s haven{' '}
              <br className="hidden max-xl:block sm:block md:block lg:block" />{' '}
              for personalised beauty.
            </h1>
            <p className="mb-8 max-w-xl font-sans text-lg sm:mb-10 sm:text-xl md:text-2xl xl:text-3xl">
              Trust in our safe, relaxing environment to make you feel amazing.
              Your journey to confidence and pampering starts here.
            </p>
            <div className="flex text-center">
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
