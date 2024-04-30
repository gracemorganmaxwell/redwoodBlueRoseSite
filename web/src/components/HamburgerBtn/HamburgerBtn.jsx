import React, { useState, useRef } from 'react'

import activeHamburger from 'public/images/activeHamburger.svg'
import hamburger from 'public/images/hamburger.svg'
import useClickOutside from 'web/src/hooks/useClickOutside.js'

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const menuRef = useRef()

  useClickOutside(menuRef, () => setIsOpen(false))

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        aria-label="Menu button"
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-darkBlue transition duration-300 hover:bg-white md:hidden"
      >
        {isOpen ? (
          <img
            src={activeHamburger}
            alt="Close menu button"
            className="h-8 w-8"
          />
        ) : (
          <img src={hamburger} alt="Menu button" className="h-8 w-8" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded bg-greyViolet font-gfs_didot_regular text-royalBlue shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <a
              href="/#about"
              className="text-base md:text-lg lg:text-xl block rounded p-2 text-right font-bold transition duration-300 hover:bg-darkBlue hover:text-white"
            >
              About Me
            </a>
            <a
              href="/#treatments"
              className="text-base md:text-lg lg:text-xl block rounded p-2 text-right font-bold transition duration-300 hover:bg-darkBlue hover:text-white"
            >
              Treatments
            </a>
            <a
              href="/#reviews"
              className="text-base md:text-lg lg:text-xl block rounded p-2 text-right font-bold transition duration-300 hover:bg-darkBlue hover:text-white"
            >
              Testimonies
            </a>
            <a
              href="/#gallery"
              className="text-base md:text-lg lg:text-xl block rounded p-2 text-right font-bold transition duration-300 hover:bg-darkBlue hover:text-white"
            >
              My Work
            </a>
            <a
              href="/#book-now"
              className="text-base md:text-lg lg:text-xl block rounded p-2 text-right font-bold transition duration-300 hover:bg-darkBlue hover:text-white"
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
