import React from 'react'

import goldAssentBtnCorner from 'web/public/images/goldAssentBtnCorner.svg'

const CtaButton = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={goldAssentBtnCorner}
        alt="gold accents top"
        className="absolute right-0 top-0 mr-[55px] mt-[0px] h-auto w-auto -translate-y-full translate-x-1/2 object-cover"
      />
      <img
        src={goldAssentBtnCorner}
        alt="gold accents bottom"
        className="absolute bottom-0 left-0 ml-[55px] h-auto w-auto -translate-x-1/2 translate-y-full rotate-180 object-cover"
      />
      <button className="text-cta relative z-10 flex items-center justify-center rounded-[12px] border border-darkBlue bg-white px-4 py-2 font-semibold leading-none text-darkBlue shadow-[0_4px_4px_rgba(0,0,0,0.80)] sm:px-6 sm:py-4 sm:text-xl md:min-w-[200px] md:px-8 md:py-5 md:text-2xl lg:min-w-[250px] lg:px-10 lg:py-6 lg:text-3xl xl:min-w-[300px] xl:px-12 xl:py-7 xl:text-4xl">
        Book Now
      </button>
    </div>
  )
}

export default CtaButton
