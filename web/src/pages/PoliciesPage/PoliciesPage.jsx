import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PoliciesPage = () => {
  return (
    <>
      <Metadata title="Policies" description="Policies page" />

      <h1>PoliciesPage</h1>
      <p>
        Find me in <code>./web/src/pages/PoliciesPage/PoliciesPage.jsx</code>
      </p>
      <p>
        My default route is named <code>policies</code>, link to me with `
        <Link to={routes.policies()}>Policies</Link>`
      </p>
    </>
  )
}

export default PoliciesPage
