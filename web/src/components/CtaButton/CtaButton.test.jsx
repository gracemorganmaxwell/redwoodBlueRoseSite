import { render } from '@redwoodjs/testing/web'

import CtaButton from './CtaButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CtaButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CtaButton />)
    }).not.toThrow()
  })
})
