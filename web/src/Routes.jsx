// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/gallery" page={GalleryPage} name="gallery" />
      <Route path="/policies" page={PoliciesPage} name="policies" />
      <Route path="/GiftRequestPage" page={GiftRequestPage} name="GiftRequestPage" />
      <Route path="/ContactForm" page={ContactPage} name="Contact" />
      <Route path="/Home" page={HomePage} name="Home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
