import { render } from '@redwoodjs/testing/web'

import SteppingStoneBrowsFreshaPage from './SteppingStoneBrowsFreshaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SteppingStoneBrowsFreshaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SteppingStoneBrowsFreshaPage />)
    }).not.toThrow()
  })
})
