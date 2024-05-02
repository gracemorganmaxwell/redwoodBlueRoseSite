import React from 'react'

import facebookIcon from '/Users/graceelizabethmorgan-maxwell/redwoodBlueRoseSite/scripts/svg-icons/facebook.svg'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#202020] to-[#303c50] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Business Name */}
        <h2 className="mb-4 text-center text-xl font-bold text-greyViolet">
          Blue Rose Nails and Beauty Therapy
        </h2>

        {/* Copyright */}
        <p className="mb-6 text-center text-lg font-bold text-darkerGreyViolet">
          Copyright 2024
        </p>

        {/* Line Separator */}
        <div className="mb-6 flex justify-center">
          <div className="w-4/5 border-t border-white"></div>
        </div>

        {/* Contact Section */}
        <div className="mb-6 text-center">
          <h3 className="mb-2 text-xl font-bold text-blueGrey">Contact:</h3>
          <p className="mb-4 text-xl text-blueGrey">
            bluerosenailsandbeauty@gmail.com
          </p>
          <a href="/#" target="_blank" rel="noopener noreferrer">
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className="mx-auto h-8 w-8"
            />
          </a>
        </div>

        {/* Line Separator */}
        <div className="flex justify-center">
          <div className="w-4/5 border-t border-white"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
