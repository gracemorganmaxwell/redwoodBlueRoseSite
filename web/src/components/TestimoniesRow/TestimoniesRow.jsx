import React, { useState } from 'react'

import headingAssent from 'web/public/images/headingAssent.svg'
import './TestimoniesRow.css'

const TestimoniesRow = () => {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0)

  const testimonies = [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
      clientName: 'John Doe',
      clientPhoto: 'path/to/john-doe-photo.jpg',
    },
    {
      quote:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      clientName: 'Jane Smith',
      clientPhoto: 'path/to/jane-smith-photo.jpg',
    },
    // Add more testimony objects as needed
  ]

  const previousTestimony = () => {
    setCurrentTestimonyIndex((prevIndex) =>
      prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
    )
  }

  const nextTestimony = () => {
    setCurrentTestimonyIndex((prevIndex) =>
      prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      previousTestimony()
    } else if (event.key === 'ArrowRight') {
      nextTestimony()
    }
  }

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16">
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* Title */}
          <h1 className="text-center font-gfs_didot_regular text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Testimonies
          </h1>
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 mt-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* Testimony Carousel */}
          <div className="testimonies">
            <div className="testimonies-container">
              <div className="testimony-card">
                <div className="testimony-quote">
                  <p className="testimony-text">
                    {testimonies[currentTestimonyIndex].quote}
                  </p>
                </div>
                <div className="testimony-client">
                  <img
                    src={testimonies[currentTestimonyIndex].clientPhoto}
                    alt={testimonies[currentTestimonyIndex].clientName}
                    className="client-photo"
                  />
                  <p className="client-name">
                    {testimonies[currentTestimonyIndex].clientName}
                  </p>
                </div>
              </div>
              <div className="testimonies-controls">
                <button
                  className="testimony-control-button"
                  onClick={previousTestimony}
                  onKeyDown={handleKeyPress}
                  tabIndex="0"
                >
                  &lt;
                </button>
                <div className="testimony-progress">
                  {testimonies.map((_, index) => (
                    <button
                      key={index}
                      className={`progress-dot ${
                        index === currentTestimonyIndex ? 'active' : ''
                      }`}
                      onClick={() => setCurrentTestimonyIndex(index)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          setCurrentTestimonyIndex(index)
                        }
                      }}
                      tabIndex="0"
                      aria-label={`Go to testimony ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <button
                  className="testimony-control-button"
                  onClick={nextTestimony}
                  onKeyDown={handleKeyPress}
                  tabIndex="0"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimoniesRow
