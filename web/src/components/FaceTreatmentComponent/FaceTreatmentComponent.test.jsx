import { render } from '@redwoodjs/testing/web'

import FaceTreatmentComponent from './FaceTreatmentComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FaceTreatmentComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FaceTreatmentComponent />)
    }).not.toThrow()
  })
})
