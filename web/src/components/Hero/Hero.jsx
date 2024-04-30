import React from 'react'

import heroBackgroundImage from 'public/images/heroBackgroundImage.png'

import CtaButton from '../CtaButton/CtaButton'

const Hero = () => {
  return (
    <div
      className="relative flex min-h-screen items-start justify-start text-white"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay with lighter opacity */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
      ></div>

      {/* Content Container aligned to the left, starting 40px from the left side of the screen */}
      <div
        className="relative flex flex-col p-10"
        style={{ paddingLeft: '40px', paddingTop: '60px' }}
      >
        <h1 className="mb-10 font-gfs_didot_regular text-4xl font-bold leading-tight">
          Christchurch&apos;s haven for
          <br />
          personalised beauty.
        </h1>
        {/* Multi-line p tag content */}
        <p className="mb-10 max-w-72 font-sans text-xl">
          Trust in our safe, relaxing environment to make you feel amazing. Your
          journey to confidence and pampering starts here -
        </p>

        {/* CTA button centered in its flex container but aligned to the start of the column */}
        <div className="ml-2 flex w-full justify-start">
          <CtaButton />
        </div>
      </div>
    </div>
  )
}

export default Hero
