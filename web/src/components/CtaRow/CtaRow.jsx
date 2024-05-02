import React from 'react'

import leftFlowerAssent from 'web/public/images/leftAssentFlower.svg'

import CtaButton from '../CtaButton/CtaButton'

const CtaRow = () => {
  return (
    <div className="relative bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto">
        <div className="flex flex-row items-center sm:flex-row">
          {/* Flower Assent SVG */}
          <img
            src={leftFlowerAssent}
            alt="Flower Assent"
            className="h-auto w-32 sm:mb-0 sm:w-48 md:w-64 lg:w-80"
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
