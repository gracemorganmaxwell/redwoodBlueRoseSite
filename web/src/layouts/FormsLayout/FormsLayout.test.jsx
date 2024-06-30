import { render } from '@redwoodjs/testing/web'

import FormsLayout from './FormsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FormsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormsLayout />)
    }).not.toThrow()
  })
})
