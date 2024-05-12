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
            alt="Flower Illustration"
            className="ml-[-10px] w-20 sm:w-24 md:w-32 lg:w-80"
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
