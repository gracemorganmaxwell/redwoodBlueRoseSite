import logo from 'public/images/logo.png'

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn'

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white p-4 shadow-md md:px-8">
      <div className="xl:w-66 md:w-42 sm:w-32 lg:w-56">
        <img
          src={logo}
          alt="Blue Rose Nails and Beauty Business Logo"
          className="w-full"
        />
      </div>
      <div className="md:hidden">
        <HamburgerBtn />
      </div>
      <div className="hidden md:block">
        <div className="flex flex-wrap justify-center">
          <ul className="flex space-x-8 font-gfs_didot_regular text-royalBlue md:text-lg lg:text-xl xl:text-2xl">
            <li>
              <a
                href="/#about"
                className="rounded-md px-2 py-1 transition duration-300 hover:bg-darkBlue hover:font-bold hover:text-white"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/#treatments"
                className="rounded-md px-2 py-1 transition duration-300 hover:bg-darkBlue hover:font-bold hover:text-white"
              >
                Treatments
              </a>
            </li>
            <li>
              <a
                href="/#reviews"
                className="rounded-md px-2 py-1 transition duration-300 hover:bg-darkBlue hover:font-bold hover:text-white"
              >
                Testimonies
              </a>
            </li>
            <li>
              <a
                href="/#gallery"
                className="rounded-md px-2 py-1 transition duration-300 hover:bg-darkBlue hover:font-bold hover:text-white"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                href="/#book-now"
                className="rounded-md px-2 py-1 transition duration-300 hover:bg-darkBlue hover:font-bold hover:text-white"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
