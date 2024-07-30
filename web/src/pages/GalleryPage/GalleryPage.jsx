import { Metadata } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Gallerygridcomponent from 'src/components/Gallerygridcomponent/Gallerygridcomponent'
import NavigationComponent from 'src/components/Navigation/Navigation'

const GalleryPage = () => {
  return (
    <>
      <Metadata title="Gallery" description="Gallery page" />
      <NavigationComponent />
      <Gallerygridcomponent />
      <Footer />
    </>
  )
}

export default GalleryPage
