import { render } from '@redwoodjs/testing/web'

import SteppingStoneMassageFreshaPage from './SteppingStoneMassageFreshaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SteppingStoneMassageFreshaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SteppingStoneMassageFreshaPage />)
    }).not.toThrow()
  })
})
