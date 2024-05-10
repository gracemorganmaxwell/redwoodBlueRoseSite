// TreatmentRow.js
import React from 'react'

import Brows from 'web/public/images/Brows.png'
import Consult from 'web/public/images/Consult.png'
import FootTreatment from 'web/public/images/FootTreatment.png'
import headingAssent from 'web/public/images/headingAssent.svg'
import NailsLashesPackages from 'web/public/images/Lash&BrowPackages.png'
import Massage from 'web/public/images/Massage.png'
import Nails from 'web/public/images/Nails.png'
import UnisexWaxing from 'web/public/images/UnisexWaxing.png'
import Waxing from 'web/public/images/Waxing.png'

import Card from '../Card/Card'

const TreatmentRow = () => {
  const treatments = [
    { image: Nails, label: 'Nails', href: 'https://booking-site.com/nails' },
    { image: Brows, label: 'Brows', href: 'https://booking-site.com/brows' },
    { image: Waxing, label: 'Waxing', href: 'https://booking-site.com/waxing' },
    {
      image: Massage,
      label: 'Massage',
      href: 'https://booking-site.com/massage',
    },
    {
      image: Consult,
      label: 'Free Consultations',
      href: 'https://booking-site.com/consult',
    },
    {
      image: FootTreatment,
      label: 'Foot Treatments',
      href: 'https://booking-site.com/foot-treatment',
    },
    {
      image: UnisexWaxing,
      label: 'Unisex Waxing',
      href: 'https://booking-site.com/unisex-waxing',
    },
    {
      image: NailsLashesPackages,
      label: 'Lash & Brow Packages',
      href: 'https://booking-site.com/lash-brow-packages',
    },
  ]

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16">
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt="Heading Assent"
            className="mx-auto mb-4 h-auto w-32 sm:mb-6 sm:w-40 md:mb-8 md:w-48"
          />
          {/* Title */}
          <h1 className="mb-4 text-center font-gfs_didot_regular text-4xl font-bold leading-tight sm:mb-6 sm:text-5xl md:mb-8 md:text-6xl">
            My Treatments
          </h1>
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt="Heading Assent"
            className="mx-auto mb-8 mt-4 h-auto sm:mt-6 sm:w-40 md:mt-8 md:w-48"
          />
          {/* Treatment content */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {treatments.map((treatment, index) => (
              <Card
                key={index}
                imageSrc={treatment.image}
                label={treatment.label}
                href={treatment.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreatmentRow
