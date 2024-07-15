import { React } from 'react'

import { Metadata } from '@redwoodjs/web'

import GiftCardRequestComponent from 'src/components/GiftCardRequestComponent/GiftCardRequestComponent'
import NavigationComponent from 'src/components/Navigation/Navigation'

const GiftRequestPage = () => {
  return (
    <div>
      <Metadata title="Gift Request" description="Gift Requests" />
      <NavigationComponent />
      <h1>Gift Card Requests Page</h1>
      <GiftCardRequestComponent />
    </div>
  )
}

export default GiftRequestPage
