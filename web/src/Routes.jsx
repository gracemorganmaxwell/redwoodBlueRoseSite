// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import BaseLayout from './layouts/BaseLayout/BaseLayout'
import FormLayout from './layouts/FormsLayout/FormsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={FormLayout}>
        <Route path="/gift-card-requests" page={GiftRequestPage} name="Gift Requests" />
        <Route path="/contact" page={ContactPage} name="Contact Us" />
      </Set>
      <Set wrap={BaseLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
