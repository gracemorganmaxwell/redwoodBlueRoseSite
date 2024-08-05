import Footer from 'src/components/Footer/Footer'
import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import NailTreatments from 'src/components/NailTreatmentsComponent/NailTreatmentsComponent'
import NavigationComponent from 'src/components/Navigation/Navigation'

const SteppingStoneNailsFreshaPage = () => {
  return (
    <>
      <NavigationComponent />
      <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
            <HeadingComponent title="Nail Treatments" />
            <NailTreatments />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SteppingStoneNailsFreshaPage
