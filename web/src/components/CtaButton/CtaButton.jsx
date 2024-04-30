import React from 'react'

import goldAssentsForCta from 'public/images/goldAssentsForCta.svg' // Make sure the path is correctly configured

const CtaButton = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={goldAssentsForCta}
        alt="gold accents"
        className="absolute h-full w-full object-cover" // Adjust size to cover the button area completely
      />
      <button className="relative z-10 flex items-center justify-center rounded border border-darkBlue bg-white text-cta font-semibold leading-none text-darkBlue shadow-[0_4px_4px_rgba(0,0,0,0.80)] sm:text-[1.125rem] md:text-[1.25rem] lg:h-14 lg:w-44 lg:text-[1.5rem] xl:h-16 xl:w-48 xl:text-[1.75rem]">
        Book Now
      </button>
    </div>
  )
}

export default CtaButton
