import React from 'react'

const Lightbox = ({
  images,
  currentImageIndex,
  previousImage,
  nextImage,
  closeLightbox,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      <div className="relative mx-auto max-w-4xl p-4">
        <div className="relative mx-auto flex items-center justify-between rounded-lg bg-darkBlue p-4 sm:p-6 md:p-8 lg:p-10">
          <button
            className="flex flex-col items-center text-white"
            onClick={previousImage}
            aria-label="Previous Image"
          >
            <span className="mb-2 text-4xl">&lt;</span>
            <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg transition duration-300 hover:bg-blue-700">
              Previous
            </span>
          </button>
          <div className="relative mx-auto">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="h-50 w-50 sm:h-75 sm:w-75 md:h-125 md:w-125 rounded-lg object-cover"
            />
          </div>
          <button
            className="flex flex-col items-center text-white"
            onClick={nextImage}
            aria-label="Next Image"
          >
            <span className="mb-2 text-4xl">&gt;</span>
            <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg transition duration-300 hover:bg-blue-700">
              Next
            </span>
          </button>
          <button
            className="absolute right-4 top-4 flex flex-col items-center text-white"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <span className="text-4xl">&times;</span>
            <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg transition duration-300 hover:bg-blue-700">
              Close Window
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
