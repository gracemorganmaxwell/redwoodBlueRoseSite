import React from 'react'

import loadingIcon from 'public/images/Loading...svg'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <img
          src={loadingIcon}
          alt="Loading icon"
          className="h-22 w-22 animate-spin"
        />
        <p className="mt-4 text-xl font-bold text-darkBlue">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
