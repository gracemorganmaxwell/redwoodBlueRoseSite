import React from 'react'

import leftFlowerAssent from 'web/public/images/leftAssentFlower.svg'

import CtaButton from '../CtaButton/CtaButton'

const CtaRow = () => {
  return (
    <div className="relative bg-white py-16 sm:py-24 md:py-32">
      <div className="relative mx-auto flex flex-row items-center justify-center">
        {/* Flower Assent SVG */}
        <img
          src={leftFlowerAssent}
          alt="Gold Flower Accent"
          className="absolute left-0 ml-0 w-[6vh] sm:w-[8vh] md:w-[10vh] lg:w-[12vh] xl:w-[14vh]"
        />

        {/* CTA Button */}
        <div className="mx-auto">
          <CtaButton />
        </div>
      </div>
    </div>
  )
}

export default CtaRow
