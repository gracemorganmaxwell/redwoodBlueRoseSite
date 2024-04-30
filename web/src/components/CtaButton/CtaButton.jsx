import React from 'react'

import goldAssentsForCta from 'public/images/goldAssentsForCta.svg'; // Adjust the path based on actual location

const CtaButton = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={goldAssentsForCta}
        alt="gold assents"
        className="w-38 absolute h-14"
      />
      <button
        className="relative z-10 flex h-12 w-36 items-center justify-center rounded border border-darkBlue bg-white text-lg font-semibold leading-none text-darkBlue shadow-[0_4px_4px_rgba(0,0,0,0.80)]"
        style={{ fontFamily: 'Inter', fontSize: '18px' }} // Inline style for specific font and size
      >
        Book Now
      </button>
    </div>
  )
}

export default CtaButton
