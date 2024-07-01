import logo from 'public/images/logoExtra.svg'

import HamburgerBtn from 'src/components/HamburgerBtn/HamburgerBtn'

const NavigationComponent = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-blue-blackbkgroundgradient p-4 shadow-md md:px-8">
      <div className="flex w-full items-center justify-between">
        <div className="md:hidden">
          <HamburgerBtn />
        </div>
        <div className="flex flex-grow justify-center">
          <img
            src={logo}
            alt="Blue Rose Nails and Beauty Business Logo"
            className="rounded-full m-2"
          />
        </div>
        <div className="hidden space-x-4 font-gfs_didot_regular md:flex">
          <a
            href="/#contact"
            className="text-base font-bold text-white transition duration-300 hover:text-royalBlue md:text-lg lg:text-xl"
          >
            Contact
          </a>
          <a
            href="/#treatments"
            className="text-base font-bold text-white transition duration-300 hover:text-royalBlue md:text-lg lg:text-xl"
          >
            Treatments
          </a>
          <a
            href="/#gallery"
            className="text-base font-bold text-white transition duration-300 hover:text-royalBlue md:text-lg lg:text-xl"
          >
            Gallery
          </a>
          <a
            href="/#book-now"
            className="text-base font-bold text-white transition duration-300 hover:text-royalBlue md:text-lg lg:text-xl"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavigationComponent
