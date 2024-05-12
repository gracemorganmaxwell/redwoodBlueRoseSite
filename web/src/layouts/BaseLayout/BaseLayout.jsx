import AboutRow from 'src/components/AboutRow/AboutRow'
import CtaRow from 'src/components/CtaRow/CtaRow'
import Footer from 'src/components/Footer/Footer'
import Hero from 'src/components/Hero/Hero'
import Navigation from 'src/components/Navigation/Navigation'
import TestimoniesRow from 'src/components/TestimoniesRow'
import TreatmentRow from 'src/components/TreatmentsRow/TreatmentsRow'

const BaseLayout = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutRow />
      <TreatmentRow />
      <CtaRow />
      <TestimoniesRow />
      <Footer />
    </>
  )
}

export default BaseLayout
