import React from 'react'

import { AdvancedImage, AdvancedVideo } from '@cloudinary/react'
import { CSSTransition } from 'react-transition-group'

const Lightbox = ({
  mediaItems,
  currentMediaIndex,
  previousMedia,
  nextMedia,
  closeLightbox,
  cld,
}) => {
  const currentMedia = mediaItems[currentMediaIndex]

  return (
    <CSSTransition
      in={true}
      timeout={400}
      classNames={{
        enter: 'lightbox-enter',
        enterActive: 'lightbox-enter-active',
        exit: 'lightbox-exit',
        exitActive: 'lightbox-exit-active',
      }}
      appear
      unmountOnExit
    >
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
        role="dialog"
        aria-modal="true"
        aria-label="Media Lightbox"
      >
        <div className="relative mx-auto max-w-4xl p-4">
          <div className="bg-darkBlue relative mx-auto flex items-center justify-between rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
            <button
              className="flex flex-col items-center text-white transition duration-300 hover:bg-blue-700"
              onClick={previousMedia}
              aria-label="Previous Media"
            >
              <span className="mb-2 text-4xl">&lt;</span>
              <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg">
                Previous
              </span>
            </button>
            <div className="relative mx-auto">
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
                {currentMedia.type === 'image' ? (
                  <AdvancedImage
                    cldImg={cld.image(currentMedia.publicId)}
                    plugins={[]}
                    alt={currentMedia.alt}
                    className="h-auto w-full max-w-lg rounded-lg object-cover"
                  />
                ) : (
                  <AdvancedVideo
                    cldVid={cld.video(currentMedia.publicId)}
                    controls
                    autoplay
                    muted
                    plugins={[]}
                    className="h-auto w-full max-w-lg rounded-lg object-cover"
                    aria-label="Video without audio or captions"
                  >
                    <track
                      kind="captions"
                      src=""
                      srcLang="en"
                      label="No captions"
                    />
                    Your browser does not support the video tag.
                  </AdvancedVideo>
                )}
              </CSSTransition>
            </div>
            <button
              className="flex flex-col items-center text-white transition duration-300 hover:bg-blue-700"
              onClick={nextMedia}
              aria-label="Next Media"
            >
              <span className="mb-2 text-4xl">&gt;</span>
              <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg">
                Next
              </span>
            </button>
            <button
              className="absolute right-4 top-4 flex flex-col items-center text-white transition duration-300 hover:bg-blue-700"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <span className="text-4xl">&times;</span>
              <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg">
                Close Window
              </span>
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Lightbox
