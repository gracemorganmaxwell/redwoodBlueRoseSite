import React from 'react'

import goldAssentBtnCorner from 'web/public/images/goldAssentBtnCorner.svg'

const CtaButton = () => {
  const handleClick = () => {
    window.open('/#', '_blank')
  }

  return (
    <div className="relative flex items-center justify-center">
      <img
        src={goldAssentBtnCorner}
        alt="Gold accent top"
        className="absolute right-0 top-0 mr-[-20px] mt-[-10px] h-auto w-auto object-cover"
      />
      <button
        className="relative z-10 flex items-center justify-center rounded-[12px] border border-darkBlue bg-white px-6 py-3 font-semibold text-darkBlue shadow-md transition-colors duration-300 hover:bg-darkBlue hover:text-white"
        onClick={handleClick}
      >
        Book Now
      </button>
      <img
        src={goldAssentBtnCorner}
        alt="Gold accent bottom"
        className="absolute bottom-0 left-0 mb-[-10px] ml-[-20px] h-auto w-auto rotate-180 object-cover"
      />
    </div>
  )
}

export default CtaButton
