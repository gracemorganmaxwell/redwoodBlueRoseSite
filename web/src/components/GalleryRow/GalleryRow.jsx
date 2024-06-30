import React, { useState } from 'react'

import gallery1 from 'web/public/images/1.png'
import gallery2 from 'web/public/images/2.png'
import gallery3 from 'web/public/images/3.png'
import headingAssent from 'web/public/images/headingAssent.svg'
import './Gallery.css'

const GalleryRow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const images = [
    { src: gallery1, alt: 'Gallery image 1' },
    { src: gallery2, alt: 'Gallery image 2' },
    { src: gallery3, alt: 'Gallery image 3' },
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

  const handleProgressDotClick = (index) => {
    setCurrentImageIndex(index)
  }

  const handleProgressDotKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleProgressDotClick(index)
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = index === 0 ? images.length - 1 : index - 1
      handleProgressDotClick(prevIndex)
    } else if (e.key === 'ArrowRight') {
      const nextIndex = index === images.length - 1 ? 0 : index + 1
      handleProgressDotClick(nextIndex)
    }
  }

  const openLightbox = () => {
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const handleImageKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      openLightbox()
    }
  }

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 h-auto w-auto sm:w-60 md:w-80"
          />
          <h1 className="text-center font-gfs_didot_regular text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            My Work
          </h1>
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 mt-6 h-auto w-auto sm:w-60 md:w-80"
          />
          <div className="gallery">
            <div className="gallery-container max-w-[1400px]">
              <div
                role="button"
                onClick={openLightbox}
                onKeyDown={handleImageKeyDown}
                tabIndex={0}
                aria-label="Open Lightbox"
              >
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="gallery-image shadow-polaroid max-h-[200px] max-w-[200px] cursor-pointer"
                />
              </div>
              <div
                className="gallery-progress flex justify-center"
                role="tablist"
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`progress-dot ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                    onClick={() => handleProgressDotClick(index)}
                    onKeyDown={(e) => handleProgressDotKeyDown(e, index)}
                    aria-label={`Image ${index + 1}`}
                    tabIndex={index === currentImageIndex ? 0 : -1}
                  />
                ))}
              </div>
              <div className="gallery-controls">
                <button
                  className="gallery-control-button"
                  onClick={previousImage}
                  aria-label="Previous Image"
                >
                  &lt;
                </button>
                <button
                  className="gallery-control-button"
                  onClick={nextImage}
                  aria-label="Next Image"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {isLightboxOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              role="dialog"
              aria-modal="true"
              aria-label="Image Lightbox"
            >
              <div className="relative mx-auto max-w-4xl">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="max-h-[90vh] max-w-full"
                />
                <button
                  className="absolute right-2 top-2 text-3xl text-white"
                  onClick={closeLightbox}
                  aria-label="Close Lightbox"
                >
                  &times;
                </button>
                <div className="mt-4 flex justify-between">
                  <button
                    className="text-2xl text-white"
                    onClick={previousImage}
                    aria-label="Previous Image"
                  >
                    &lt;
                  </button>
                  <button
                    className="text-2xl text-white"
                    onClick={nextImage}
                    aria-label="Next Image"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryRow
