import Footer from 'src/components/Footer/Footer'
import FootTreatments from 'src/components/FootTreatmentComponent/FootTreatmentComponent'
import NavigationComponent from 'src/components/Navigation/Navigation'

const SteppingStoneFootTreatmentsFreshaPage = () => {
  return (
    <>
      <NavigationComponent />
      <div className="bg-darkBlue">
        <FootTreatments />
      </div>
      <Footer />
    </>
  )
}

export default SteppingStoneFootTreatmentsFreshaPage
