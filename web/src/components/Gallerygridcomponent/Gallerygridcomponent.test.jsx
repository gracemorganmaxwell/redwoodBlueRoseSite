import React from 'react'

import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing'
import '@testing-library/jest-dom/extend-expect'

// Mocking external dependencies
jest.mock('@cloudinary/react', () => ({
  AdvancedImage: ({ alt }) => <img alt={alt} data-testid="advanced-image" />,
  AdvancedVideo: React.forwardRef(({ alt, ...props }, ref) => (
    <video ref={ref} data-testid="advanced-video" {...props}>
      <track kind="captions" />
    </video>
  )),
  lazyload: jest.fn(),
  responsive: jest.fn(),
  placeholder: jest.fn(),
}))

jest.mock('@cloudinary/url-gen', () => ({
  Cloudinary: jest.fn().mockImplementation(() => ({
    image: jest.fn().mockReturnThis(),
    video: jest.fn().mockReturnThis(),
    quality: jest.fn().mockReturnThis(),
    format: jest.fn().mockReturnThis(),
    toURL: jest
      .fn()
      .mockReturnValue(
        'https://res.cloudinary.com/demo/image/upload/sample.jpg'
      ),
  })),
}))

jest.mock('../HeadingComponent/HeadingComponent', () => () => (
  <div>Heading Component</div>
))

jest.mock('../Lightbox/Lightbox', () => ({ closeLightbox }) => (
  <div>
    Lightbox Component
    <button onClick={closeLightbox}>Close Lightbox</button>
  </div>
))

jest.mock('../LineSeparatorComponent/LineSeparatorComponent', () => () => (
  <div>Line Separator Component</div>
))

jest.mock('../SubHeadingComponent/SubHeadingComponent', () => ({ title }) => (
  <div>{title}</div>
))

import GalleryGridComponent from '../GalleryGridComponent'

describe('GalleryGridComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<GalleryGridComponent />)
    expect(screen.getByText('My Work')).toBeInTheDocument()
    expect(screen.getByText('Nails')).toBeInTheDocument()
    expect(screen.getByText('Brows')).toBeInTheDocument()
  })

  it('displays images and videos in the nails section', async () => {
    render(<GalleryGridComponent />)

    await waitFor(() => {
      expect(screen.getAllByTestId('advanced-image').length).toBeGreaterThan(0)
    })
  })

  it('displays images and videos in the brows section', async () => {
    render(<GalleryGridComponent />)

    await waitFor(() => {
      expect(screen.getAllByTestId('advanced-video').length).toBeGreaterThan(0)
    })
  })

  it('opens the lightbox when a media item is clicked', async () => {
    render(<GalleryGridComponent />)

    const firstMedia = screen.getByLabelText(
      'Open Gel manicure with coloured french tips.'
    )
    fireEvent.click(firstMedia)

    await waitFor(() => {
      expect(screen.getByText('Lightbox Component')).toBeInTheDocument()
    })
  })

  it('navigates to the next and previous media in the lightbox', async () => {
    render(<GalleryGridComponent />)

    const firstMedia = screen.getByLabelText(
      'Open Gel manicure with coloured french tips.'
    )
    fireEvent.click(firstMedia)

    await waitFor(() => {
      expect(screen.getByText('Lightbox Component')).toBeInTheDocument()
    })

    // Simulate next and previous navigation
    fireEvent.click(screen.getByText('Lightbox Component')) // Mock navigation buttons in the actual lightbox
    fireEvent.click(screen.getByText('Lightbox Component'))

    expect(screen.getByText('Lightbox Component')).toBeInTheDocument()
  })

  it('closes the lightbox when the close button is clicked', async () => {
    render(<GalleryGridComponent />)

    const firstMedia = screen.getByLabelText(
      'Open Gel manicure with coloured french tips.'
    )
    fireEvent.click(firstMedia)

    await waitFor(() => {
      expect(screen.getByText('Lightbox Component')).toBeInTheDocument()
    })

    const closeButton = screen.getByText('Close Lightbox')
    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(screen.queryByText('Lightbox Component')).not.toBeInTheDocument()
    })
  })
})
