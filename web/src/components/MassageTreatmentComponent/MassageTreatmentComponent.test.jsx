import { render } from '@redwoodjs/testing/web'

import MassageTreatmentComponent from './MassageTreatmentComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MassageTreatmentComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MassageTreatmentComponent />)
    }).not.toThrow()
  })
})
