import { render } from '@redwoodjs/testing/web'

import GiftCardRequestComponent from './GiftCardRequestComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GiftCardRequestComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GiftCardRequestComponent />)
    }).not.toThrow()
  })
})
