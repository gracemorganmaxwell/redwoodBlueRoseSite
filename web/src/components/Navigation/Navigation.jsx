import logo from 'public/images/Logo.svg'

import { Link } from '@redwoodjs/router'

import HamburgerBtn from 'src/components/HamburgerBtn/HamburgerBtn'

import CtaButton from '../CtaButton/CtaButton'

const NavigationComponent = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white p-4 shadow-xl">
      <div className="flex w-full items-center justify-between">
        <div className="order-2 flex">
          <Link to="/home">
            <img
              src={logo}
              alt="Blue Rose Nails and Beauty Business Logo and link to home page"
              className="m-2 items-center justify-center md:ml-[calc(0.5rem)]"
            />
          </Link>
        </div>
        <div className="order-3 mr-4 flex items-center overflow-auto md:mr-2 md:hidden">
          {/* Center the HamburgerBtn vertically */}
          <HamburgerBtn />
        </div>
        <div className="order-1 mr-4 hidden items-center space-x-4 font-gfs_didot_regular text-darkBlue md:order-3 md:mr-2 md:flex">
          <Link
            to="/treatments"
            className="rounded-[12px] border border-darkBlue px-3 py-3 font-sans text-sm font-bold shadow-md transition duration-300 hover:bg-darkBlue hover:text-white md:text-base lg:text-lg"
          >
            Treatments
          </Link>
          <Link
            to="/gallery"
            className="rounded-[12px] border border-darkBlue px-3 py-3 font-sans text-sm font-bold shadow-md transition duration-300 hover:bg-darkBlue hover:text-white md:text-base lg:text-lg"
          >
            Gallery
          </Link>
          <Link
            to="/contactform"
            className="rounded-[12px] border border-darkBlue px-3 py-3 font-sans text-sm font-bold shadow-md transition duration-300 hover:bg-darkBlue hover:text-white md:text-base lg:text-lg"
          >
            Contact
          </Link>
          <CtaButton className="shadow-md transition duration-300 hover:bg-darkBlue hover:text-white" />
        </div>
      </div>
    </nav>
  )
}

export default NavigationComponent
