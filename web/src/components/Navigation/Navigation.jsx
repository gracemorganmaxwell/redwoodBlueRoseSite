import React, { useState } from 'react'

import active from 'public/images/activeHamburger.png'
import logo from 'public/images/logo.png'
import notActive from 'public/images/notActiveHamburger.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <img src={logo} alt="Blue Rose Nails and Beauty Business Logo" />
      </div>
      <button
        className="menu-icon focus:outline-none"
        onClick={toggleMenu}
        aria-label="Menu button"
      >
        <div className="w-110 h-110 bg-darkBlue rounded-lg flex items-center justify-center">
          {isOpen ? (
            <img src={notActive} alt="Close" />
          ) : (
            <img src={active} alt="Menu" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-12 py-2 w-screen bg-white shadow-lg z-50">
          <ul className="flex flex-col">
            <li className="px-6 py-2 hover:bg-gray-100">About</li>
            <li className="px-6 py-2 hover:bg-gray-100">Treatments</li>
            <li className="px-6 py-2 hover:bg-gray-100">Reviews</li>
            <li className="px-6 py-2 hover:bg-gray-100">Gallery</li>
            <li className="px-6 py-2 hover:bg-gray-100">Book Now</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navigation
