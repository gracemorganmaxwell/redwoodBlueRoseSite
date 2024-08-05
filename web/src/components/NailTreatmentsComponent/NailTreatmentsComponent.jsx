import React from 'react'

const NailTreatments = () => {
  const treatments = [
    {
      label: 'IBX nail treatment maintenance',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18097508&pId=969545',
    },
    {
      label: 'IBX nail treatment first time',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18097499&pId=969545',
    },
    {
      label: 'Builder gel infill',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A17972284&pId=969545',
    },
    {
      label: 'Gel manicure',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13800136&pId=969545',
    },
    {
      label: 'Gel manicure removal & reapplication',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13847928&pId=969545',
    },
    {
      label: 'Deluxe gel manicure',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13774621&pId=969545',
    },
    {
      label: 'Deluxe gel manicure removal and reapplication',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13884686&pId=969545',
    },
    {
      label: 'Gel removal & nail tidy',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13800200&pId=969545',
    },
    {
      label: 'Soft gel extensions',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A14414709&pId=969545',
    },
    {
      label: 'Soft Gel Extension infill',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A15055311&pId=969545',
    },
    {
      label: 'Soft gel extension remove and reapply',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A15055321&pId=969545',
    },
    {
      label: 'Builder gel natural nail overlay',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13800290&pId=969545',
    },
    {
      label: 'Builder gel removal & reapplication',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13884704&pId=969545',
    },
    {
      label: 'French add on (gel polish)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A16036237&pId=969545',
    },
    {
      label: 'Nail art (1 feature nail free per hand)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18136379&pId=969545',
    },
    {
      label: 'Nail art (Nail art per nail)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18136422&pId=969545',
    },
    {
      label: 'Nail art (Nail art per hand)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18136380&pId=969545',
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

export default NailTreatments
