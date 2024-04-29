import React, { useState } from 'react'

import activeHamburger from 'public/images/activeHamburger.svg'
import hamburger from 'public/images/hamburger.svg'

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false) // Controls the state of the menu
  const toggleMenu = () => setIsOpen(!isOpen) // Toggles the state

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        aria-label="Menu button"
        className="flex h-20 w-20 items-center justify-center rounded-lg bg-darkBlue"
      >
        {isOpen ? (
          <img
            src={activeHamburger}
            alt="Close menu button"
            className="h-16 w-16"
          /> // Show active hamburger when open
        ) : (
          <img src={hamburger} alt="Menu button" className="h-16 w-16" /> // Show default hamburger when closed
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 rounded bg-greyViolet font-gfs_didot_regular text-lg text-royalBlue shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <a
              href="/#about"
              className="block rounded p-2 text-right text-xl font-bold transition duration-300 hover:bg-white hover:text-black"
            >
              About Me
            </a>
            <a
              href="/#treatments"
              className="block rounded p-2 text-right  text-xl font-bold transition duration-300 hover:bg-white hover:text-black"
            >
              Treatments
            </a>
            <a
              href="/#reviews"
              className="block rounded p-2 text-right text-xl font-bold transition duration-300 hover:bg-white hover:text-black"
            >
              Testimonies
            </a>
            <a
              href="/#gallery"
              className="block rounded p-2 text-right text-xl font-bold transition duration-300 hover:bg-white hover:text-black"
            >
              My Work
            </a>
            <a
              href="/#book-now"
              className="block rounded p-2 text-right  text-xl font-bold transition duration-300 hover:bg-white hover:text-black"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerBtn
