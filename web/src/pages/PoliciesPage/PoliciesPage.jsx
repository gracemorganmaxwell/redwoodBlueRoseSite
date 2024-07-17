import { Metadata } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import NavigationComponent from 'src/components/Navigation/Navigation'
import PoliciesComponent from 'src/components/PoliciesComponent/PoliciesComponent'

const PoliciesPage = () => {
  return (
    <>
      <Metadata title="Policies" description="Policies page" />
      <NavigationComponent />
      <div className="flex min-h-screen justify-center bg-darkBlue py-8">
        <PoliciesComponent />
      </div>
      <Footer />
    </>
  )
}

export default PoliciesPage
