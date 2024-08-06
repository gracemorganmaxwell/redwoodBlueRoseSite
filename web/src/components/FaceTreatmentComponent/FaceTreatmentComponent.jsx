import React from 'react'

const FaceTreatments = () => {
  const treatments = [
    {
      label: 'Nostril Wax',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885325&pId=969545',
    },
    {
      label: 'Lip & Chin Wax',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885323&pId=969545',
    },
    {
      label: 'Dermaplaning',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885316&pId=969545',
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Subheading */}
        <h2 className="mb-8 text-center text-2xl font-semibold text-darkBlue">
          Please click to find out more
        </h2>
        {/* Treatment content */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg bg-gray-100 p-4 shadow-md hover:bg-gray-200"
            >
              <a
                href={treatment.href}
                className="text-center text-lg font-semibold text-darkBlue hover:underline"
              >
                {treatment.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaceTreatments
