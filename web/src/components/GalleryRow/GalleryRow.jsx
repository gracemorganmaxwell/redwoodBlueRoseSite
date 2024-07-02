import React, { useState } from 'react'

import gallery1 from 'web/public/images/1.png'
import gallery10 from 'web/public/images/10.png'
import gallery11 from 'web/public/images/11.png'
import gallery12 from 'web/public/images/12.png'
import gallery13 from 'web/public/images/13.png'
import gallery14 from 'web/public/images/14.png'
import gallery15 from 'web/public/images/15.png'
import gallery16 from 'web/public/images/16.png'
import gallery17 from 'web/public/images/17.png'
import gallery18 from 'web/public/images/18.png'
import gallery19 from 'web/public/images/19.png'
import gallery2 from 'web/public/images/2.png'
import gallery20 from 'web/public/images/20.png'
import gallery21 from 'web/public/images/21.png'
import gallery22 from 'web/public/images/22.png'
import gallery23 from 'web/public/images/23.png'
import gallery24 from 'web/public/images/24.png'
import gallery25 from 'web/public/images/25.png'
import gallery26 from 'web/public/images/26.png'
import gallery27 from 'web/public/images/27.png'
import gallery28 from 'web/public/images/28.png'
import gallery29 from 'web/public/images/29.png'
import gallery3 from 'web/public/images/3.png'
import gallery30 from 'web/public/images/30.png'
import gallery31 from 'web/public/images/31.png'
import gallery32 from 'web/public/images/32.png'
import gallery4 from 'web/public/images/4.png'
import gallery5 from 'web/public/images/5.png'
import gallery6 from 'web/public/images/6.png'
import gallery7 from 'web/public/images/7.png'
import gallery8 from 'web/public/images/8.png'
import gallery9 from 'web/public/images/9.png'
import headingAssent from 'web/public/images/headingAssent.svg'

import Lightbox from 'src/components/Lightbox/Lightbox'

const GalleryRow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const images = [
    { src: gallery1, alt: 'Gallery image 1' },
    { src: gallery2, alt: 'Gallery image 2' },
    { src: gallery3, alt: 'Gallery image 3' },
    { src: gallery4, alt: 'Gallery image 4' },
    { src: gallery5, alt: 'Gallery image 5' },
    { src: gallery6, alt: 'Gallery image 6' },
    { src: gallery7, alt: 'Gallery image 7' },
    { src: gallery8, alt: 'Gallery image 8' },
    { src: gallery9, alt: 'Gallery image 9' },
    { src: gallery10, alt: 'Gallery image 10' },
    { src: gallery11, alt: 'Gallery image 11' },
    { src: gallery12, alt: 'Gallery image 12' },
    { src: gallery13, alt: 'Gallery image 13' },
    { src: gallery14, alt: 'Gallery image 14' },
    { src: gallery15, alt: 'Gallery image 15' },
    { src: gallery16, alt: 'Gallery image 16' },
    { src: gallery17, alt: 'Gallery image 17' },
    { src: gallery18, alt: 'Gallery image 18' },
    { src: gallery19, alt: 'Gallery image 19' },
    { src: gallery20, alt: 'Gallery image 20' },
    { src: gallery21, alt: 'Gallery image 21' },
    { src: gallery22, alt: 'Gallery image 22' },
    { src: gallery23, alt: 'Gallery image 23' },
    { src: gallery24, alt: 'Gallery image 24' },
    { src: gallery25, alt: 'Gallery image 25' },
    { src: gallery26, alt: 'Gallery image 26' },
    { src: gallery27, alt: 'Gallery image 27' },
    { src: gallery28, alt: 'Gallery image 28' },
    { src: gallery29, alt: 'Gallery image 29' },
    { src: gallery30, alt: 'Gallery image 30' },
    { src: gallery31, alt: 'Gallery image 31' },
    { src: gallery32, alt: 'Gallery image 32' },
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
          <div className="flex h-full items-center justify-center">
            <div className="relative w-full max-w-[1400px] rounded-lg bg-white p-5 shadow-lg">
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
                  className="mx-auto h-auto max-h-[200px] w-full max-w-[200px] cursor-pointer rounded-lg object-cover shadow-lg md:max-h-[300px] md:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px]"
                />
              </div>
              <div className="mt-4 text-center font-gfs_didot_regular text-darkBlue sm:text-xl md:text-2xl lg:text-3xl">
                {images[currentImageIndex].alt}
              </div>
              <div className="mt-2 text-center font-gfs_didot_regular text-darkBlue sm:text-lg md:text-xl lg:text-2xl">
                {currentImageIndex + 1}/{images.length}
              </div>
              <div className="mt-4 text-center md:hidden">
                <button
                  className="rounded bg-blue-900 px-4 py-2 font-gfs_didot_regular text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={openLightbox}
                >
                  View Image Larger
                </button>
              </div>
              <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-5">
                <button
                  className="h-12 w-12 cursor-pointer rounded-full bg-blue-900 text-2xl font-bold text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={previousImage}
                  aria-label="Previous Image"
                >
                  &lt;
                </button>
                <button
                  className="h-12 w-12 cursor-pointer rounded-full bg-blue-900 text-2xl font-bold text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={nextImage}
                  aria-label="Next Image"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {isLightboxOpen && (
            <Lightbox
              images={images}
              currentImageIndex={currentImageIndex}
              previousImage={previousImage}
              nextImage={nextImage}
              closeLightbox={closeLightbox}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryRow
