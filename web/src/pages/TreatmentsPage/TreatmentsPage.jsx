import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TreatmentsPage = () => {
  return (
    <>
      <Metadata title="Treatments" description="Treatments page" />

      <h1>TreatmentsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TreatmentsPage/TreatmentsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>treatments</code>, link to me with `
        <Link to={routes.treatments()}>Treatments</Link>`
      </p>
    </>
  )
}

export default TreatmentsPage
