import React from 'react'

import headingAssent from 'web/public/images/headingAssent.svg'

const GalleryRow = () => {
  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16">
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt="Heading Assent"
            className="mx-auto mb-4 h-auto w-32 sm:mb-6 sm:w-40 md:mb-8 md:w-48"
          />

          {/* Title */}
          <h1 className="mb-4 text-center font-gfs_didot_regular text-4xl font-bold leading-tight sm:mb-6 sm:text-5xl md:mb-8 md:text-6xl">
            My Work
          </h1>

          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt="Heading Assent"
            className="mx-auto mt-4 h-auto w-32 sm:mt-6 sm:w-40 md:mt-8 md:w-48"
          />
        </div>
      </div>
    </div>
  )
}

export default GalleryRow
