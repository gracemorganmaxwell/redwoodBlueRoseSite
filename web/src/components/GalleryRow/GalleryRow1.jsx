import React, { useState } from 'react'

import { AdvancedImage } from '@cloudinary/react'
import { responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { CSSTransition } from 'react-transition-group'

import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import Lightbox from 'src/components/Lightbox/Lightbox'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dioi9wxj7',
  },
})

const GalleryRow = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const imageMedia = [
    {
      publicId: 'Gel_manicure_with_coloured_French_qurqfv',
      type: 'image',
      alt: 'Gel manicure with coloured french tips.',
    },
    // Add other image media objects here...
  ]

  const openLightbox = () => setIsLightboxOpen(true)
  const closeLightbox = () => setIsLightboxOpen(false)

  const previousMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? imageMedia.length - 1 : prevIndex - 1
    )
  }

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === imageMedia.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <HeadingComponent title="My Work" />
          <div className="mb-6 text-center">
            <button
              className="rounded bg-blue-900 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
              onClick={() => (window.location.href = '/gallery')}
            >
              View Gallery
            </button>
          </div>
          <div className="flex h-full items-center justify-center">
            <div className="relative w-full max-w-[1400px] rounded-lg bg-white p-5 shadow-lg">
              <CSSTransition
                in={true}
                timeout={400}
                classNames={{
                  enter: 'media-enter',
                  enterActive: 'media-enter-active',
                  exit: 'media-exit',
                  exitActive: 'media-exit-active',
                }}
                unmountOnExit
              >
                <AdvancedImage
                  cldImg={cld.image(imageMedia[currentMediaIndex].publicId)}
                  plugins={[responsive(), placeholder()]}
                  alt={imageMedia[currentMediaIndex].alt}
                  className="mx-auto h-auto max-h-[200px] w-full max-w-[200px] cursor-pointer rounded-lg object-cover shadow-lg md:max-h-[300px] md:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px]"
                  onClick={openLightbox}
                />
              </CSSTransition>
              <div className="mt-4 text-center font-gfs_didot_regular text-darkBlue sm:text-xl md:text-2xl lg:text-3xl">
                {imageMedia[currentMediaIndex].alt}
              </div>
              <div className="mt-2 text-center font-gfs_didot_regular text-darkBlue sm:text-lg md:text-xl lg:text-2xl">
                {currentMediaIndex + 1}/{imageMedia.length}
              </div>
              <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-5">
                <button
                  className="h-12 w-12 cursor-pointer rounded-full bg-blue-900 text-2xl font-bold text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={previousMedia}
                  aria-label="Previous Media"
                >
                  &lt;
                </button>
                <button
                  className="h-12 w-12 cursor-pointer rounded-full bg-blue-900 text-2xl font-bold text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={nextMedia}
                  aria-label="Next Media"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          <CSSTransition
            in={isLightboxOpen}
            timeout={400}
            classNames="lightbox"
            unmountOnExit
          >
            <Lightbox
              mediaItems={imageMedia}
              currentMediaIndex={currentMediaIndex}
              previousMedia={previousMedia}
              nextMedia={nextMedia}
              closeLightbox={closeLightbox}
              cld={cld}
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  )
}

export default GalleryRow
