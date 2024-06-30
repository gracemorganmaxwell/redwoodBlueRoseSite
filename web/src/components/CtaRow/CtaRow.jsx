import React from 'react'

import leftFlowerAssent from 'web/public/images/leftAssentFlower.svg'

import CtaButton from '../CtaButton/CtaButton'

const CtaRow = () => {
  return (
    <div className="relative bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto">
        <div className="flex flex-row items-center">
          {/* Flower Assent SVG */}
          <img
            src={leftFlowerAssent}
            alt="Gold Flower Accent"
            className="absolute bottom-0 right-0 m-0 ml-10 w-[6vh] p-0 sm:w-[8vh] md:w-[10vh] lg:w-[12vh] xl:w-[14vh]"
          />

          {/* CTA Button */}
          <div className="m-auto block p-0">
            <CtaButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaRow
