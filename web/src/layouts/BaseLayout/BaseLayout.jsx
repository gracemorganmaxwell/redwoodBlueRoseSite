import Footer from 'src/components/Footer/Footer'
import Navigation from 'src/components/Navigation/Navigation'

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default BaseLayout
