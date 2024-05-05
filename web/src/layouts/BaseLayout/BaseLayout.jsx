import Footer from 'src/components/Footer/Footer'
import Hero from 'src/components/Hero/Hero'
import Navigation from 'src/components/Navigation/Navigation'

const BaseLayout = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Footer />
    </>
  )
}

export default BaseLayout
