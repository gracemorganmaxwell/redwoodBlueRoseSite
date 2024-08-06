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
      <Route path="/stepping-stone-massage-fresha" page={SteppingStoneMassageFreshaPage} name="steppingStoneMassageFresha" />
      <Route path="/stepping-stone-foot-treatments-fresha" page={SteppingStoneFootTreatmentsFreshaPage} name="steppingStoneFootTreatmentsFresha" />
      <Route path="/stepping-stone-unisex-waxing-fresha" page={SteppingStoneUnisexWaxingFreshaPage} name="steppingStoneUnisexWaxingFresha" />
      <Route path="/stepping-stone-brow-n-lash-package-fresha" page={SteppingStoneBrowNLashPackageFreshaPage} name="steppingStoneBrowNLashPackageFresha" />
      <Route path="/stepping-stone-body-waxing-fresha" page={SteppingStoneBodyWaxingFreshaPage} name="steppingStoneBodyWaxingFresha" />
      <Route path="/stepping-stone-brows-fresha" page={SteppingStoneBrowsFreshaPage} name="steppingStoneBrowsFresha" />
      <Route path="/stepping-stone-nails-fresha" page={SteppingStoneNailsFreshaPage} name="steppingStoneNailsFresha" />
      <Route path="/treatments" page={TreatmentsPage} name="treatments" />
      <Route path="/gallery" page={GalleryPage} name="gallery" />
      <Route path="/policies" page={PoliciesPage} name="policies" />
      <Route path="/giftrequest" page={GiftRequestPage} name="gift_request_page" />
      <Route path="/contactform" page={ContactPage} name="contact" />
      <Route path="/home" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
