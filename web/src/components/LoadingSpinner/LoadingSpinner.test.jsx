import { render, screen, waitFor } from '@redwoodjs/testing/web'

import LoadingSpinner from './LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders the loading spinner after a delay when isLoading is true', async () => {
    render(<LoadingSpinner isLoading={true} delay={500} />)

    // Spinner should not be in the document immediately
    expect(screen.queryByAltText('Loading icon')).not.toBeInTheDocument()

    // Wait for the spinner to appear after the delay
    await waitFor(
      () => {
        expect(screen.getByAltText('Loading icon')).toBeInTheDocument()
      },
      { timeout: 600 }
    ) // Timeout slightly longer than the delay to account for async timing
  })

  it('does not render the loading spinner when isLoading is false', () => {
    render(<LoadingSpinner isLoading={false} delay={500} />)

    const spinner = screen.queryByAltText('Loading icon')
    expect(spinner).not.toBeInTheDocument()
  })

  it('removes the spinner when isLoading becomes false', async () => {
    const { rerender } = render(<LoadingSpinner isLoading={true} delay={500} />)

    await waitFor(() => {
      expect(screen.getByAltText('Loading icon')).toBeInTheDocument()
    })

    rerender(<LoadingSpinner isLoading={false} delay={500} />)
    expect(screen.queryByAltText('Loading icon')).not.toBeInTheDocument()
  })

  it('does not show the spinner if isLoading becomes false before delay completes', async () => {
    const { rerender } = render(<LoadingSpinner isLoading={true} delay={500} />)

    // Quickly change isLoading to false before the delay completes
    rerender(<LoadingSpinner isLoading={false} delay={500} />)

    // The spinner should never appear
    expect(screen.queryByAltText('Loading icon')).not.toBeInTheDocument()
  })
})
