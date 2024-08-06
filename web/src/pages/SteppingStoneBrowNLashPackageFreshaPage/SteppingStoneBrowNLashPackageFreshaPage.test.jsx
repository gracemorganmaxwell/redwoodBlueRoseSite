import { render } from '@redwoodjs/testing/web'

import SteppingStoneBrowNLashPackageFreshaPage from './SteppingStoneBrowNLashPackageFreshaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SteppingStoneBrowNLashPackageFreshaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SteppingStoneBrowNLashPackageFreshaPage />)
    }).not.toThrow()
  })
})
