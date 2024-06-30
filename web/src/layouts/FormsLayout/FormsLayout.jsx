import { Footer } from 'src/components/Footer'
import { Navigation } from 'src/components/Navigation'

const FormLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default FormLayout
