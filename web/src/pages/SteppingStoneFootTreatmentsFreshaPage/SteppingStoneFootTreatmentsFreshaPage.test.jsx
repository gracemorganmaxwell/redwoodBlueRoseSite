import { render } from '@redwoodjs/testing/web'

import SteppingStoneFootTreatmentsFreshaPage from './SteppingStoneFootTreatmentsFreshaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SteppingStoneFootTreatmentsFreshaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SteppingStoneFootTreatmentsFreshaPage />)
    }).not.toThrow()
  })
})
