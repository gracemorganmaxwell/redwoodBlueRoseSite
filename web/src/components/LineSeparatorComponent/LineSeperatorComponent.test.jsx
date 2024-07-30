import { render } from '@redwoodjs/testing/web'

import LineSeparatorComponent from './LineSeparatorComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LineSeperatorComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LineSeparatorComponent />)
    }).not.toThrow()
  })
})
