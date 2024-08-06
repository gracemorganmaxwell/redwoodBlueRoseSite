import Footer from 'src/components/Footer/Footer'
import NavigationComponent from 'src/components/Navigation/Navigation'
import UnisexWaxing from 'src/components/UnisexWaxingTreatmentComponent/UnisexWaxingTreatmentComponent'

const SteppingStoneUnisexWaxingFreshaPage = () => {
  return (
    <>
      <NavigationComponent />
      <div className="bg-darkBlue">
        <UnisexWaxing />
      </div>
      <Footer />
    </>
  )
}

export default SteppingStoneUnisexWaxingFreshaPage
