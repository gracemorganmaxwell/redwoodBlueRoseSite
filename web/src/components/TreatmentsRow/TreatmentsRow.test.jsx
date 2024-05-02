import { render } from '@redwoodjs/testing/web'

import TreatmentsRow from './TreatmentsRow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TreatmentsRow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TreatmentsRow />)
    }).not.toThrow()
  })
})
