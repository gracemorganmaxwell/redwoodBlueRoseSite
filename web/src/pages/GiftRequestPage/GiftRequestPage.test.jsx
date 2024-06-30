import { render } from '@redwoodjs/testing/web'

import GiftRequestPage from './GiftRequestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GiftRequestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GiftRequestPage />)
    }).not.toThrow()
  })
})
