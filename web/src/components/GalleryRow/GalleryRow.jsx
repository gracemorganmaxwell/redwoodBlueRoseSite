import React, { useState, useRef, useEffect } from 'react'

import { AdvancedImage, AdvancedVideo } from '@cloudinary/react'
import { responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

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
  const mediaRef = useRef(null)

  useEffect(() => {
    let start
    const duration = 600

    const animate = (timestamp) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const opacity = Math.min(progress / duration, 1)

      if (mediaRef.current) {
        mediaRef.current.style.opacity = opacity
      }

      if (progress < duration) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [currentMediaIndex])

  const galleryMedia = [
    {
      publicId: 'Gel_manicure_with_coloured_French_qurqfv',
      type: 'image',
      alt: 'Gel manicure with coloured french tips.',
    },
    {
      publicId: 'Lash_lift_and_hybrid_brow_stain_zf3e33',
      type: 'video',
      alt: 'Lash lift and hybrid brow stain.',
    },
    {
      publicId: 'Soft_gel_extension_with_a_stamp_feature_nail_s46ixx',
      type: 'image',
      alt: 'Soft gel extension with a stamp patterned feature nail.',
    },
    {
      publicId: 'Gel_manicure_ja0p1o',
      type: 'image',
      alt: 'Gel manicure, multiple colours of blue and purple with a feature deep silver metallic.',
    },
    {
      publicId: 'Hybrid_brow_stain_and_shape_with_Lash_lift_and_tint_advpra',
      type: 'video',
      alt: 'Hybrid brow stain and shape with Lash lift and tint.',
    },
    // Add other media objects here...
  ]

  const openLightbox = () => setIsLightboxOpen(true)
  const closeLightbox = () => setIsLightboxOpen(false)

  const previousMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? galleryMedia.length - 1 : prevIndex - 1
    )
  }

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === galleryMedia.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    let start
    const duration = 400 // Duration in milliseconds

    const animate = (timestamp) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const opacity = Math.min(progress / duration, 1)

      if (mediaRef.current) {
        mediaRef.current.style.opacity = opacity
      }

      if (progress < duration) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [currentMediaIndex])

  return (
    <div className="gallery-container">
      <div ref={mediaRef} className="media">
        <AdvancedImage
          cldImg={cld.image('image-id')}
          plugins={[responsive(), placeholder()]}
          className="image-class"
        />
      </div>
      <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
            <HeadingComponent title="My Work" />
            <div className="flex h-full items-center justify-center">
              <div className="relative w-full max-w-[1400px] rounded-lg bg-white p-5 shadow-lg">
                <div
                  ref={mediaRef}
                  className="ease-in-out-cubic transition-opacity duration-400"
                >
                  {galleryMedia[currentMediaIndex].type === 'image' ? (
                    <AdvancedImage
                      cldImg={cld.image(
                        galleryMedia[currentMediaIndex].publicId
                      )}
                      plugins={[responsive(), placeholder()]}
                      alt={galleryMedia[currentMediaIndex].alt}
                      className="mx-auto h-auto max-h-[200px] w-full max-w-[200px] cursor-pointer rounded-lg object-cover shadow-lg md:max-h-[300px] md:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px]"
                      onClick={openLightbox}
                    />
                  ) : (
                    <AdvancedVideo
                      cldVid={cld.video(
                        galleryMedia[currentMediaIndex].publicId
                      )}
                      controls
                      autoplay
                      muted
                      plugins={[responsive(), placeholder()]}
                      className="mx-auto h-auto max-h-[200px] w-full max-w-[200px] cursor-pointer rounded-lg object-cover shadow-lg md:max-h-[300px] md:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px]"
                      aria-label="Video without audio or captions"
                      onClick={openLightbox}
                    />
                  )}
                </div>
                <div className="mt-4 text-center font-gfs_didot_regular text-darkBlue sm:text-xl md:text-2xl lg:text-3xl">
                  {galleryMedia[currentMediaIndex].alt}
                </div>
                <div className="mt-2 text-center font-gfs_didot_regular text-darkBlue sm:text-lg md:text-xl lg:text-2xl">
                  {currentMediaIndex + 1}/{galleryMedia.length}
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

            {isLightboxOpen && (
              <Lightbox
                mediaItems={galleryMedia}
                currentMediaIndex={currentMediaIndex}
                previousMedia={previousMedia}
                nextMedia={nextMedia}
                closeLightbox={closeLightbox}
                cld={cld}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryRow
