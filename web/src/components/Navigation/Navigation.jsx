import logo from 'public/images/logo.png'

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn'

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div>
        <img src={logo} alt="Blue Rose Nails and Beauty Business Logo" />
      </div>
      <HamburgerBtn />
    </nav>
  )
}

export default Navigation
