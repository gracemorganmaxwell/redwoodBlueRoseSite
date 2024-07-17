import { render } from '@redwoodjs/testing/web'

import PoliciesComponent from './PoliciesComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PoliciesComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PoliciesComponent />)
    }).not.toThrow()
  })
})
