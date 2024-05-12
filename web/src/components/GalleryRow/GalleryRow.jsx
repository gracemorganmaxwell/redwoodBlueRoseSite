import React, { useState } from 'react'

import headingAssent from 'web/public/images/headingAssent.svg'
import './Gallery.css'

const GalleryRow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    { src: 'path/to/image1.jpg', alt: 'Image 1 description' },
    { src: 'path/to/image2.jpg', alt: 'Image 2 description' },
    { src: 'path/to/image3.jpg', alt: 'Image 3 description' },
    // Add more image objects as needed
  ]

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
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
            My Gallery
          </h1>
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 mt-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* My Work Examples Carousel */}
          <div className="gallery">
            <div className="gallery-container">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="gallery-image shadow-polaroid"
              />
              <div className="gallery-controls">
                <button
                  className="gallery-control-button"
                  onClick={previousImage}
                >
                  &lt;
                </button>
                <div className="gallery-image-info">
                  <span className="gallery-image-index">
                    {currentImageIndex + 1} / {images.length}
                  </span>
                  <span className="gallery-image-alt">
                    {images[currentImageIndex].alt}
                  </span>
                </div>
                <button className="gallery-control-button" onClick={nextImage}>
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

export default GalleryRow
