import React from 'react'

import PropTypes from 'prop-types'
import headingAssent from 'web/public/images/headingAssent.svg'

const SubheadingComponent = ({ title }) => {
  return (
    <div className="text-center">
      <h2 className="mb-0 font-gfs_didot_regular text-2xl font-semibold">
        {title}
      </h2>
      <img
        src={headingAssent}
        alt=""
        className="lg:w-100 mx-auto mb-4 xs:w-[70%] sm:w-60 md:w-80"
      />
    </div>
  )
}

SubheadingComponent.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SubheadingComponent
