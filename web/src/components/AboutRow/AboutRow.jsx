import React from 'react'

import aboutImg1 from 'web/public/images/about-us-image1.png'
import aboutImg2 from 'web/public/images/about-us-image2.png'
import aboutImg3 from 'web/public/images/about-us-image3.png'
import headingAssent from 'web/public/images/headingAssent.svg'

const About = () => {
  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[12px] bg-white p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt="Heading Assent"
            className="lg:w-100 mx-auto mb-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* Title */}
          <h1 className="mb-4 text-center font-gfs_didot_regular text-4xl font-bold leading-tight sm:mb-6 sm:text-5xl md:mb-8 md:text-6xl">
            About Us
          </h1>
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt="Heading Assent"
            className="lg:w-100 mx-auto mb-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* About content */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap">
              {/* Box 1 */}
              <p className="text-center text-base sm:text-left sm:text-lg md:text-xl lg:text-2xl">
                Welcome to Blue Rose Nails and Beauty, where your journey to
                serenity and elegance begins.
              </p>
              {/* Box 2 */}
              <img
                src={aboutImg1}
                alt="Anna, sitting at a workstation, doing a client's nails in her home based beauty salon."
                className="h-[117.6px] w-[162.4px] sm:h-[283.36px] sm:w-[391.31px] lg:h-[391.46px] lg:w-[540.58px]"
              />
            </div>
            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap">
              {/* Box 3 */}
              <img
                src={aboutImg2}
                alt="Anna, a close up of her face, smiling at the camera."
                className="h-[157.24px] w-[272.32px] sm:h-[208.34px] sm:w-[360.81px] lg:h-[597.74px] lg:w-[345.14px]"
              />
              {/* Box 4 */}
              <p className="text-center text-base sm:text-right sm:text-lg md:text-xl lg:text-2xl">
                I&apos;m Anna, with over five years of passion for transforming
                everyday stress into moments of beauty and relaxation.
              </p>
            </div>
            {/* Row 3 */}
            <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap">
              {/* Box 5 */}
              <p className="text-center text-base sm:text-left sm:text-lg md:text-xl lg:text-2xl">
                Dive into a personalized pampering experience in our tranquil
                haven, designed to rejuvenate your spirit and enhance your
                natural beauty.
              </p>
              {/* Box 6 */}
              <img
                src={aboutImg3}
                alt="A reflection in a mirror of a client getting their eyebrows done on a massage table."
                className="h-[161.33px] w-[188.48px] sm:h-[191.11px] sm:w-[229.11px] lg:h-[451.96px] lg:w-[386.86px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
