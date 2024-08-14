import { render } from '@redwoodjs/testing/web'

import SteppingStoneBodyWaxingFroshPage from './SteppingStoneBodyWaxingFreshaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SteppingStoneBodyWaxingFreshaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SteppingStoneBodyWaxingFroshPage />)
    }).not.toThrow()
  })
})


