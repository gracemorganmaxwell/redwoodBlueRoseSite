import Footer from 'src/components/Footer/Footer'
import MassageTreatments from 'src/components/MassageTreatmentComponent/MassageTreatmentComponent'
import NavigationComponent from 'src/components/Navigation/Navigation'

const SteppingStoneMassageFreshaPage = () => {
  return (
    <>
      <NavigationComponent />
      <div className="bg-darkBlue">
        <MassageTreatments />
      </div>
      <Footer />
    </>
  )
}

export default SteppingStoneMassageFreshaPage
