import React from 'react'

import goldAssentsForCta from 'public/images/goldAssentsForCta.svg'

const CtaButton = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={goldAssentsForCta}
        alt="gold accents"
        className="absolute h-[calc(100%+40px)] w-[calc(100%+40px)] object-cover sm:h-[calc(100%+50px)] sm:w-[calc(100%+60px)] md:h-[calc(100%+30px)] md:w-[calc(100%+60px)] lg:h-[calc(100%+40px)] lg:w-[calc(100%+80px)] xl:h-[calc(100%+40px)] xl:w-[calc(100%+100px)]"
      />
      <button className="text-cta relative z-10 flex items-center justify-center rounded-lg border border-darkBlue bg-white px-4 py-2 font-semibold leading-none text-darkBlue shadow-[0_4px_4px_rgba(0,0,0,0.80)] sm:px-6 sm:py-4 sm:text-xl md:min-w-[200px] md:px-8 md:py-5 md:text-2xl lg:min-w-[250px] lg:px-10 lg:py-6 lg:text-3xl xl:min-w-[300px] xl:px-12 xl:py-7 xl:text-4xl">
        Book Now
      </button>
    </div>
  )
}

export default CtaButton
