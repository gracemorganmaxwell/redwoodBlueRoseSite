import { render } from '@redwoodjs/testing/web'

import LashesNBrowPackagesComponent from './LashesNBrowPackagesComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LashesNBrowPackagesComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LashesNBrowPackagesComponent />)
    }).not.toThrow()
  })
})
