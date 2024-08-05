import { render } from '@redwoodjs/testing/web'

import SteppingStoneNailsFreshaPage from './SteppingStoneNailsFreshaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SteppingStoneNailsFreshaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SteppingStoneNailsFreshaPage />)
    }).not.toThrow()
  })
})
