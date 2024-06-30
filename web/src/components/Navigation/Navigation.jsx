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
    </nav>
  )
}

export default Navigation
