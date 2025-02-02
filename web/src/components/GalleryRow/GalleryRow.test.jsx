// __tests__/GalleryRow.test.js

import React from 'react'

import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing'
import '@testing-library/jest-dom/extend-expect'

// Mocking external dependencies
jest.mock('@cloudinary/react', () => ({
  AdvancedImage: ({ alt }) => <img alt={alt} data-testid="advanced-image" />,
  AdvancedVideo: React.forwardRef(({ _alt, ...props }, ref) => (
    <video ref={ref} data-testid="advanced-video" {...props}>
      <track kind="captions" />
    </video>
  )),
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

jest.mock('src/components/HeadingComponent/HeadingComponent', () => () => (
  <div>Heading Component</div>
))

jest.mock('src/components/Lightbox/Lightbox', () => ({ closeLightbox }) => (
  <div>
    Lightbox Component
    <button onClick={closeLightbox}>Close Lightbox</button>
  </div>
))

import GalleryRow from './GalleryRow'

describe('GalleryRow Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<GalleryRow />)
    expect(screen.getByText('My Work')).toBeInTheDocument()
  })

  it('displays the initial media item', async () => {
    render(<GalleryRow />)
    await waitFor(() => {
      expect(screen.getByTestId('advanced-image')).toBeInTheDocument()
    })
  })

  it('navigates to the next media item when next button is clicked', async () => {
    render(<GalleryRow />)
    const nextButton = screen.getByLabelText('Next Media')
    fireEvent.click(nextButton)

    await waitFor(() => {
      expect(screen.getByTestId('advanced-video')).toBeInTheDocument()
    })
  })

  it('navigates to the previous media item when previous button is clicked', async () => {
    render(<GalleryRow />)
    const prevButton = screen.getByLabelText('Previous Media')
    fireEvent.click(prevButton)

    await waitFor(() => {
      expect(screen.getByTestId('advanced-image')).toBeInTheDocument()
    })
  })

  it('opens the lightbox when media is clicked', async () => {
    render(<GalleryRow />)
    const mediaElement = screen.getByRole('button', { name: 'Open Lightbox' })
    fireEvent.click(mediaElement)

    await waitFor(() => {
      expect(screen.getByText('Lightbox Component')).toBeInTheDocument()
    })
  })

  it('closes the lightbox when close button is clicked', async () => {
    render(<GalleryRow />)
    const mediaElement = screen.getByRole('button', { name: 'Open Lightbox' })
    fireEvent.click(mediaElement)

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
