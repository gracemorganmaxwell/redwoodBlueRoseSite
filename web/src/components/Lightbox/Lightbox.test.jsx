import { Cloudinary } from '@cloudinary/url-gen'

import { render } from '@redwoodjs/testing/web'

import Lightbox from './Lightbox'

describe('Lightbox', () => {
  it('renders successfully', () => {
    const mockMediaItems = [
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
        publicId: 'Soft_gel_extensions_with_a_foil_feature_nail_mbjdcc',
        type: 'image',
        alt: 'Soft gel extensions with a foil feature nail.',
      },
      {
        publicId: 'Lash_lift_and_hybrid_brow_stain_zf3e33',
        type: 'video',
        alt: 'Video 2',
      }
    ]
    const mockCurrentMediaIndex = 0
    const mockPreviousMedia = jest.fn()
    const mockNextMedia = jest.fn()
    const mockCloseLightbox = jest.fn()

    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dioi9wxj7',
      },
    })

    expect(() => {
      render(
        <Lightbox
          mediaItems={mockMediaItems}
          currentMediaIndex={mockCurrentMediaIndex}
          previousMedia={mockPreviousMedia}
          nextMedia={mockNextMedia}
          closeLightbox={mockCloseLightbox}
          cld={cld} // Pass the Cloudinary instance
        />
      )
    }).not.toThrow()
  })
})
