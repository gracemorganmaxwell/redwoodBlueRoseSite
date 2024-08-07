import Footer from 'src/components/Footer/Footer'
import NailTreatments from 'src/components/NailTreatmentsComponent/NailTreatmentsComponent'
import NavigationComponent from 'src/components/Navigation/Navigation'

const SteppingStoneNailsFreshaPage = () => {
  return (
    <>
      <NavigationComponent />
      <div className="bg-darkBlue">
        <NailTreatments />
      </div>
      <Footer />
    </>
  )
}

export default SteppingStoneNailsFreshaPage
