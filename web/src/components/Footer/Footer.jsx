import React, { useState } from 'react'

import facebookIcon from 'web/public/images/facebook.svg'
import instagramIcon from 'web/public/images/instagram.svg'
import PopupMessage from 'web/src/components/PopMessage/PopMessage.jsx'

const Footer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxDuo51ZgF08cXFe_m58fEBU-NeUlxnGpRUzo4KMdAYiKWJBKplm5Bi5i8qIE7s1MsWMQ/exec',
        {
          method: 'POST',
          body: new FormData(e.target),
        }
      )

      if (response.ok) {
        setMessage('Thank you for subscribing!')
        setName('')
        setEmail('')
        setShowPopup(true)
      } else {
        setMessage('Oops! Something went wrong. Please try again.')
        setShowPopup(true)
      }
    } catch (error) {
      setMessage('Oops! Something went wrong. Please try again.')
      setShowPopup(true)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <footer
      className="flex flex-col bg-gradient-to-t from-[#202020] to-[#303c50] px-4 py-4"
      style={{ justifyContent: 'center' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-4 md:px-4 lg:px-8">
        {/* Business Name */}
        <h2 className="mb-4 text-center text-xl font-bold text-greyViolet">
          Blue Rose Nails and Beauty Therapy
        </h2>
        {/* Copyright */}
        <p className="font-regular mb-4 text-center text-lg text-blueGrey">
          Copyright 2024
        </p>
        {/* Line Separator */}
        <div className="mb-6 flex justify-center">
          <div className="w-4/5 border-t border-white"></div>
        </div>
        {/* Contact Section */}
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-left text-lg font-bold text-blueGrey">
                Contact:
              </h3>
              <p className="text-lg text-blueGrey">
                bluerosenailsandbeauty@gmail.com
              </p>
            </div>
          </div>
          {/* Social Media Buttons */}
          <div className="mt-4 flex justify-center">
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=61554185572939"
                target="_blank"
                rel="noreferrer"
                className="h-18 w-18 m-2 block rounded-lg bg-royalBlue p-2 shadow-md transition duration-200 hover:border-2 hover:border-darkBlue hover:bg-white"
                style={{ boxSizing: 'border-box' }}
              >
                <img
                  src={facebookIcon}
                  alt="Facebook Icon"
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/bluerose_nailsandbeauty/"
                target="_blank"
                rel="noreferrer"
                className="h-18 w-18 m-2 block rounded-lg bg-royalBlue p-2 shadow-md transition duration-200 hover:border-2 hover:border-darkBlue hover:bg-white"
                style={{ boxSizing: 'border-box' }}
              >
                <img
                  src={instagramIcon}
                  alt="Instagram Icon"
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
          </div>
          {/* Line Separator */}
          <div className="mb-6 flex justify-center">
            <div className="w-[90vw] border-t border-white"></div>
          </div>
          {/* Pages Section */}
          <div className="mb-8 flex justify-center">
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold text-blueGrey">Pages:</h3>
              <ul className="text-lg text-blueGrey">
                <li className="mb-2">
                  <a href="/policies" className="hover:text-white">
                    Policies
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/giftrequest" className="hover:text-white">
                    Gift Cards
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/book-now" className="hover:text-white">
                    Book Now
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Line Separator */}
          <div className="mb-6 flex justify-center">
            <div className="w-[90vw] border-t border-white"></div>
          </div>
          {/* Location Section */}
          <div className="mb-8">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="mb-4 sm:mb-0 sm:mr-8">
                <h3 className="mb-2 text-left text-xl font-bold text-blueGrey">
                  Location:
                </h3>
                <div className="text-left">
                  <p className="text-lg text-blueGrey">Avro Crescent, Wigram</p>
                  <p className="text-lg text-blueGrey">Christchurch</p>
                  <p className="text-lg text-blueGrey">New Zealand</p>
                  <br />
                  <p className="text-lg text-greyViolet">
                    By appointment only.
                  </p>
                </div>
              </div>
              <div className="w-full sm:ml-8 sm:w-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.0444828045515!2d172.56464641627924!3d-43.55956327912443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318bd35757c7df%3A0x5018b6cb01797b0!2sAvro%20Crescent%2C%20Wigram%2C%20Christchurch%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1620150118912!5m2!1sen!2sus"
                  width="300"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                  className="rounded-lg border-0"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Line Separator */}
          <div className="my-6 mt-2 flex justify-center">
            <div className="w-[90vw] border-t border-white"></div>
          </div>
          {/* Subscribe Section */}
          <div className="mb-8 mt-2">
            <div className="flex justify-center">
              <div className="text-left">
                <h3 className="mb-2 text-xl font-bold text-blueGrey">
                  Subscribe:
                </h3>
                <p className="mb-4 text-lg text-blueGrey">
                  Get access to subscriber exclusive deals.
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="mb-4 flex w-full flex-col items-center sm:flex-row sm:justify-center">
                <input
                  name="Name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white focus:outline-none sm:mb-0 sm:mr-2 sm:w-auto"
                  required
                />
                <div className="flex w-full items-center sm:w-auto">
                  <input
                    name="Email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white focus:outline-none sm:mb-0 sm:mr-2 sm:w-auto"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-white px-6 py-2 text-lg font-semibold text-darkBlue transition duration-200 hover:bg-greyViolet focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          {showPopup && <PopupMessage message={message} onClose={closePopup} />}
          {/* Line Separator */}
          <div className="my-6 mt-2 flex justify-center">
            <div className="w-[90vw] border-t border-white"></div>
          </div>
          {/* Made with Love */}
          <p className="text-center text-lg text-blueGrey">
            Made with 💛 by Gracie
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
