import { render } from '@redwoodjs/testing/web'

import NailTreatmentsComponent from './NailTreatmentsComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NailTreatmentsComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NailTreatmentsComponent />)
    }).not.toThrow()
  })
})
