import { render } from '@redwoodjs/testing/web'

import Gallerygridcomponent from './Gallerygridcomponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Gallerygridcomponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Gallerygridcomponent />)
    }).not.toThrow()
  })
})
