import { render } from '@redwoodjs/testing/web'

import Lightbox from './Lightbox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Lightbox', () => {
  it('renders successfully', () => {
    const mockImages = [
      { src: 'image1.jpg', alt: 'Image 1' },
      { src: 'image2.jpg', alt: 'Image 2' },
    ]
    const mockCurrentImageIndex = 0
    const mockPreviousImage = jest.fn()
    const mockNextImage = jest.fn()
    const mockCloseLightbox = jest.fn()

    expect(() => {
      render(
        <Lightbox
          images={mockImages}
          currentImageIndex={mockCurrentImageIndex}
          previousImage={mockPreviousImage}
          nextImage={mockNextImage}
          closeLightbox={mockCloseLightbox}
        />
      )
    }).not.toThrow()
  })
})
