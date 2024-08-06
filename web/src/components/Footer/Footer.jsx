import React, { useState } from 'react'

import emailIcon from 'web/public/images/EmailIcon.svg'
import facebookIcon from 'web/public/images/facebook.svg'
import instagramIcon from 'web/public/images/InstagramIcon.png'

import LineSeparatorComponent from 'src/components/LineSeparatorComponent/LineSeparatorComponent'

const Footer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

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
        alert('Thank you for subscribing!')
        setName('')
        setEmail('')
      } else {
        alert('Oops! Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <footer className="bg-gradient-to-t from-[#202020] to-[#303c50] px-4 py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LineSeparatorComponent />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Social Media Buttons */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold text-blueGrey">Connect</h3>
            <div className="mt-2 flex justify-center space-x-4 lg:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61554185572939"
                target="_blank"
                rel="noreferrer"
                className="h-18 w-18 block rounded-lg bg-white p-2 shadow-lg transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook Icon"
                  className="h-[40px] w-[40px] object-contain"
                />
              </a>
              <a
                href="mailto:bluerosenailsandbeauty@gmail.com"
                className="h-18 w-18 block rounded-lg bg-white p-2 shadow-lg transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="h-[40px] w-[40px] object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/bluerose_nailsandbeauty/"
                target="_blank"
                rel="noreferrer"
                className="h-18 w-18 block rounded-lg bg-white p-2 shadow-lg transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram Icon"
                  className="h-[40px] w-[40px] object-contain"
                />
              </a>
            </div>
          </div>
          {/* Quick Links Section */}
          <div className="text-center lg:text-left">
            <h3 className="mb-2 text-lg font-bold text-blueGrey">
              Quick Links
            </h3>
            <ul className="space-y-2 text-lg text-blueGrey">
              <li>
                <a href="/policies" className="hover:text-white">
                  Policies
                </a>
              </li>
              <li>
                <a href="/giftrequest" className="hover:text-white">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="text-center lg:text-left">
            <h3 className="mb-2 text-lg font-bold text-blueGrey">Location</h3>
            <p className="text-lg text-blueGrey">Avro Crescent, Wigram</p>
            <p className="text-lg text-blueGrey">Christchurch, New Zealand</p>
            <p className="mt-2 text-lg text-greyViolet">By appointment only.</p>
            <div className="mb-4 mt-4 lg:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.0444828045515!2d172.56464641627924!3d-43.55956327912443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318bd35757c7df%3A0x5018b6cb01797b0!2sAvro%20Crescent%2C%20Wigram%2C%20Christchurch%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1620150118912!5m2!1sen!2sus"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                className="rounded-lg border-0"
              ></iframe>
            </div>
          </div>
          {/* Subscribe Section */}
          <div className="text-center lg:text-left">
            <h3 className="mb-2 text-lg font-bold text-blueGrey">Subscribe</h3>
            <p className="mb-4 text-lg text-blueGrey">
              Get access to subscriber exclusive deals.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                name="Name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white focus:outline-none"
                required
              />
              <input
                name="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white focus:outline-none"
                required
              />
              <button
                type="submit"
                className="mt-2 rounded-lg bg-white px-6 py-2 text-lg font-semibold text-darkBlue transition duration-200 hover:bg-greyViolet focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <LineSeparatorComponent />

        {/* Business Information */}
        <div className="mt-8 text-center">
          <h2 className="mb-4 text-xl font-bold text-white">
            Blue Rose Nails and Beauty Therapy
          </h2>
          <p className="mb-4 text-lg text-blueGrey">Copyright 2024</p>
          <p className="text-lg text-blueGrey">Made with 💛 by Gracie</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
