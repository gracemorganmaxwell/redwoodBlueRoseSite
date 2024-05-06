import React from 'react'

import aboutImg1 from 'web/public/images/About-Img1.png'
import aboutImg2 from 'web/public/images/About-Img2.png'
import aboutImg3 from 'web/public/images/About-Img3.png'
import headingAssent from 'web/public/images/headingAssent.svg'
const AboutRow = () => {
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
            My Story
          </h1>

          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt="Heading Assent"
            className="mx-auto mt-4 h-auto w-32 sm:mt-6 sm:w-40 md:mt-8 md:w-48"
          />
        </div>
        <div className="container mx-auto px-4 py-8">
          {/* Row 1 */}
          <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
            {/* Box 1 */}
            <p className="mb-4 text-base sm:text-xl md:mb-0 md:mr-8 md:text-2xl lg:text-3xl">
              Welcome, to Blue Rose Nails and Beauty, where your journey to
              serenity and elegance begins.
            </p>
            {/* Box 2 */}
            <img
              src={aboutImg1}
              alt="Anna, sitting at a workstation, doing a client's nails in her home based beauty salon."
              className="lg:w-120 lg:h-88 h-36 w-52 sm:h-56 sm:w-80 md:h-64 md:w-96"
            />
          </div>

          {/* Row 2 */}
          <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
            {/* Box 3 */}
            <img
              src={aboutImg2}
              alt="Anna, a close up of her face, smiling at the camera."
              className="md:h-108 lg:h-120 mb-4 h-72 w-48 sm:h-96 sm:w-64 md:mb-0 md:mr-8 md:w-72 lg:w-80"
            />
            {/* Box 4 */}
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl">
              I&apos;m Anna, with over five years of passion for transforming
              everyday stress into moments of beauty and relaxation.
            </p>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Box 5 */}
            <p className="mb-4 text-base sm:text-xl md:mb-0 md:mr-8 md:text-2xl lg:text-3xl">
              Dive into a personalised pampering experience in our tranquil
              haven, designed to rejuvenate your spirit and enhance your natural
              beauty.
            </p>
            {/* Box 6 */}
            <img
              src={aboutImg3}
              alt="A reflection in a mirror of a client getting their eyebrows done on a massage table."
              className="lg:h-88 h-52 w-48 sm:h-64 sm:w-60 md:h-80 md:w-72 lg:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutRow
