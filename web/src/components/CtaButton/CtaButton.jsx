import React, { useState } from 'react'

import goldAssentBtnCorner from 'web/public/images/goldAssentBtnCorner.svg'

const CtaButton = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      window.open('/#', '_blank')
      setIsClicked(false)
    }, 200)
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        <img
          src={goldAssentBtnCorner}
          alt="gold accents top"
          className="absolute right-0 top-0 mr-[-40px] mt-[-15px] h-auto w-auto object-cover sm:mr-[-18px] lg:mr-[-34px] xl:mb-[-16px] xl:mr-[-40px]"
        />
        <button
          className={`text-cta relative z-10 flex items-center justify-center rounded-[12px] border border-darkBlue px-4 py-2 font-semibold leading-none shadow-[0_4px_4px_rgba(0,0,0,0.80)] transition-colors duration-300 sm:px-6 sm:py-4 sm:text-xl md:min-w-[200px] md:px-8 md:py-5 md:text-2xl lg:min-w-[250px] lg:px-10 lg:py-6 lg:text-3xl xl:min-w-[300px] xl:px-12 xl:py-7 xl:text-4xl ${
            isClicked
              ? 'bg-darkBlue text-white'
              : 'bg-white text-darkBlue hover:bg-darkBlue hover:text-white'
          }`}
          onClick={handleClick}
        >
          Book Now
        </button>
        <img
          src={goldAssentBtnCorner}
          alt="gold accents bottom"
          className="absolute bottom-0 left-0 mb-[-15px] ml-[-40px] h-auto w-auto rotate-180 object-cover sm:ml-[-20px] lg:ml-[-39px] xl:mb-[-18px] xl:ml-[-45px]"
        />
      </div>
    </div>
  )
}

export default CtaButton
