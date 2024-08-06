import BodyWaxing from 'src/components/BodyWaxingTreatmentComponent/BodyWaxingTreatmentComponent'
import Footer from 'src/components/Footer/Footer'
import NavigationComponent from 'src/components/Navigation/Navigation'

const SteppingStoneBodyWaxingFreshaPage = () => {
  return (
    <>
      <NavigationComponent />
      <div className="bg-darkBlue">
        <BodyWaxing />
      </div>
      <Footer />
    </>
  )
}

export default SteppingStoneBodyWaxingFreshaPage
