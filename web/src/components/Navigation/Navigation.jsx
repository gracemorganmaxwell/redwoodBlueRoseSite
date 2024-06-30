import logo from 'public/images/logo260.svg'
import HamburgerBtn from 'web/src/components/HamburgerBtn/HamburgerBtn.jsx'

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-blue-blackbkgroundgradient p-4 shadow-md md:px-8">
      <div className="flex flex-1 justify-center">
        <img
          src={logo}
          alt="Blue Rose Nails and Beauty Business Logo"
          className="rounded-full"
        />
      </div>
      <div className="absolute right-4">
        <div className="shadow-lg">
          <HamburgerBtn />
        </div>
      </div>
      {/* Normal menu hidden in all screen sizes */}
      <div className="hidden md:flex md:flex-1 md:justify-center">
        <ul className="flex space-x-8 font-gfs_didot_regular text-greyViolet md:text-lg lg:text-xl xl:text-2xl">
          <li>
            <a
              href="/#about"
              className="rounded-md px-2 py-1 transition duration-300 hover:bg-darkBlue hover:font-bold hover:text-white"
            >
              My Story
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
    </nav>
  )
}

export default Navigation
