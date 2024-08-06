import { render } from '@redwoodjs/testing/web'

import SteppingStoneUnisexWaxingFreshaPage from './SteppingStoneUnisexWaxingFreshaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SteppingStoneUnisexWaxingFreshaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SteppingStoneUnisexWaxingFreshaPage />)
    }).not.toThrow()
  })
})
