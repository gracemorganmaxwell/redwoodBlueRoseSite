import AboutRow from 'src/components/AboutRow/AboutRow'
import Footer from 'src/components/Footer/Footer'
import Hero from 'src/components/Hero/Hero'
import Navigation from 'src/components/Navigation/Navigation'

const BaseLayout = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutRow />
      <Footer />
    </>
  )
}

export default BaseLayout
