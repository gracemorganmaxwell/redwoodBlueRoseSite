import React from 'react'

import HeadingComponent from '../HeadingComponent/HeadingComponent'

const BodyWaxing = () => {
  const treatments = [
    {
      label: '1/2 Leg',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776093&pId=969545',
    },
    {
      label: '3/4 Leg',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776218&pId=969545',
    },
    {
      label: 'Full Leg',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13774626&pId=969545',
    },
    {
      label: 'Forearm',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776209&pId=969545',
    },
    {
      label: 'Full Arm',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13774625&pId=969545',
    },
    {
      label: 'Under Arm',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776193&pId=969545',
    },
    {
      label: 'Bikini',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13774623&pId=969545',
    },
    {
      label: 'High Bikini',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13775580&pId=969545',
    },
    {
      label: 'Brazilian First Time',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776150&pId=969545',
    },
    {
      label: 'Brazilian Maintenance (4-6 weeks)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776132&pId=969545',
    },
  ]

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <HeadingComponent title="Body Waxing Treatments" />
          {/* Subheading */}
          <h2 className="mb-8 text-center text-2xl font-semibold text-darkBlue">
            Please click to find out more
          </h2>
          {/* Treatment content */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg border border-darkBlue bg-gray-100 p-4 shadow-md transition-all duration-200 hover:bg-darkBlue hover:text-xl hover:text-white"
              >
                <a
                  href={treatment.href}
                  className="text-center text-lg font-semibold text-darkBlue hover:text-white"
                >
                  {treatment.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyWaxing
