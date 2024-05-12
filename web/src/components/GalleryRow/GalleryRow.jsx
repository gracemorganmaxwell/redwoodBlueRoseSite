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
            alt=""
            className="lg:w-100 mx-auto mb-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* Title */}
          <h1 className="text-center font-gfs_didot_regular text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            My Gallery
          </h1>
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 mt-6 h-auto w-auto sm:w-60 md:w-80"
          />
        </div>
      </div>
    </div>
  )
}

export default GalleryRow
