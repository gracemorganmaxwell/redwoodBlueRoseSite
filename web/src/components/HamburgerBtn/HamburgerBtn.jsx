import React, { useState } from 'react'

import activeHamburger from 'public/images/activeHamburger.svg'
import hamburger from 'public/images/hamburger.svg'

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div>
      <button
        className="menu-icon focus:outline-none"
        onClick={toggleMenu}
        aria-label="Menu button"
      >
        <div>
          {isOpen ? (
            <img src={hamburger} alt="Menu Button" />
          ) : (
            <img src={activeHamburger} alt="Open Menu Button" />
          )}
        </div>
      </button>
      {isOpen && (
        <div>
          <a href="/#about">About</a>
          <a href="/#treatments">Treatments</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#book-now">Book Now</a>
        </div>
      )}
    </div>
  )
}

export default HamburgerBtn
