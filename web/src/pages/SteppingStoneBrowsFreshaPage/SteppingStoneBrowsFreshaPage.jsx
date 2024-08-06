import BrowTreatments from 'src/components/BrowsTreatmentComponent/BrowsTreatmentComponent'
import Footer from 'src/components/Footer/Footer'
import NavigationComponent from 'src/components/Navigation/Navigation'

const SteppingStoneBrowsFreshaPage = () => {
  return (
    <>
      <NavigationComponent />
      <div className="bg-darkBlue">
        <BrowTreatments />
      </div>
      <Footer />
    </>
  )
}

export default SteppingStoneBrowsFreshaPage
