import React from 'react'

import HeadingComponent from '../HeadingComponent/HeadingComponent'

const UnisexWaxing = () => {
  const treatments = [
    {
      label: 'Chest',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776243&pId=969545',
    },
    {
      label: 'Back & Neck',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776236&pId=969545',
    },
    {
      label: 'Back, Neck & Chest',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13776254&pId=969545',
    },
  ]

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <HeadingComponent title="Unisex Waxing" />
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

export default UnisexWaxing
