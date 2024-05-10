// Card.js
import React from 'react'

const Card = ({ imageSrc, label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="card shadow-polaroid box-border inline-block rounded border border-black bg-white text-center font-sans font-semibold">
        <div className="image-container relative mx-5 mt-5">
          <img
            src={imageSrc}
            alt="Blue Rose Nails and Beauty, Services and Treatments of offer."
            className="h-auto w-full rounded"
          />
        </div>
        <div className="label rounded-b bg-white px-2 py-4">{label}</div>
      </div>
    </a>
  )
}

export default Card
