import AboutRow from 'src/components/AboutRow/AboutRow'
import Footer from 'src/components/Footer/Footer'
import Hero from 'src/components/Hero/Hero'
import Navigation from 'src/components/Navigation/Navigation'
import TreatmentRow from 'src/components/TreatmentsRow/TreatmentsRow'

const BaseLayout = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutRow />
      <TreatmentRow />
      <Footer />
    </>
  )
}

export default BaseLayout
