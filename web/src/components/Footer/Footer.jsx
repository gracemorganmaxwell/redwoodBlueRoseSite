import React from 'react'

import facebookIcon from 'web/public/images/facebook.svg'

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
        <div className="mb-6">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <div className="mb-4 text-left sm:mb-0 sm:mr-8">
              <h3 className="mb-2 text-xl font-bold text-blueGrey">Contact:</h3>
              <p className="text-xl text-blueGrey">
                bluerosenailsandbeauty@gmail.com
              </p>
            </div>
            <div>
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <img
                  src={facebookIcon}
                  alt="Facebook Icon"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Line Separator */}
        <div className="mb-6 flex justify-center">
          <div className="w-4/5 border-t border-white"></div>
        </div>
        {/* Two Columns */}
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:px-20">
          {/* Pages Column */}
          <div className="mx-auto max-w-xs text-left">
            <h3 className="mb-4 text-xl font-bold text-blueGrey">Pages:</h3>
            <ul className="text-lg text-blueGrey">
              <li className="mb-2">
                <a href="/about-me" className="hover:text-white">
                  About Me
                </a>
              </li>
              <li className="mb-2">
                <a href="/my-work" className="hover:text-white">
                  See My Work
                </a>
              </li>
              <li className="mb-2">
                <a href="/treatments" className="hover:text-white">
                  Nail and Beauty Treatments I Offer
                </a>
              </li>
              <li className="mb-2">
                <a href="/testimonials" className="hover:text-white">
                  Testimonies & Reviews from Clients
                </a>
              </li>
              <li className="mb-2">
                <a href="/book-now" className="hover:text-white">
                  Book Now
                </a>
              </li>
              <li>
                <a href="/policies" className="hover:text-white">
                  Policies, Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Note Column */}
          <div className="mx-auto max-w-xs text-center">
            <h3 className="mb-4 text-xl font-bold text-blueGrey">Note:</h3>
            <p className="mb-4 text-lg text-blueGrey">
              Exact address given upon appointment.
            </p>
            {/* Location */}
            <h3 className="mb-4 text-xl font-bold text-blueGrey">Location:</h3>
            <p className="text-lg text-blueGrey">Suburban, Wigram</p>
            <p className="text-lg text-blueGrey">Christchurch</p>
            <p className="text-lg text-blueGrey">New Zealand</p>
          </div>
        </div>
        {/* Line Separator */}
        <div className="mb-6 flex justify-center">
          <div className="w-4/5 border-t border-white"></div>
        </div>
        {/* Subscribe Section */}
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-blueGrey">Subscribe:</h3>
          <p className="mb-4 text-lg text-blueGrey">
            Get access to subscriber exclusive deals
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              className="mr-2 rounded-lg border border-white bg-transparent px-4 py-2 text-white focus:outline-none"
            />
            <button className="rounded-lg bg-white px-4 py-2 text-lg font-bold text-darkBlue hover:bg-greyViolet">
              Subscribe
            </button>
          </div>
        </div>
        {/* Line Separator */}
        <div className="mb-6 flex justify-center">
          <div className="w-4/5 border-t border-white"></div>
        </div>
        {/* Made with Love */}
        <p className="text-center text-lg text-blueGrey">
          Made with 💛 by Gracie
        </p>
      </div>
    </footer>
  )
}

export default Footer
