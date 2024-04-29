import React, { useState } from 'react';

import activeHamburger from 'public/images/activeHamburger.svg';
import hamburger from 'public/images/hamburger.svg';

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls the state of the menu
  const toggleMenu = () => setIsOpen(!isOpen); // Toggles the state

  return (
    <>
      <div>
        <button onClick={toggleMenu} aria-label="Menu button">
          {isOpen ? (
            <img src={activeHamburger} alt="Close menu button" /> // Show active hamburger when open
          ) : (
            <img src={hamburger} alt="Menu button" /> // Show default hamburger when closed
          )}
        </button>
        {isOpen && (
          <div className="rounded bg-greyViolet p-4 font-gfs_didot_regular text-lg text-royalBlue">
            <a href="/#about">About</a>
            <a href="/#treatments">Treatments</a>
            <a href="/#reviews">Reviews</a>
            <a href="/#gallery">Gallery</a>
            <a href="/#book-now">Book Now</a>
          </div>
        )}
      </div>
    </>
  );
}

export default HamburgerBtn;
