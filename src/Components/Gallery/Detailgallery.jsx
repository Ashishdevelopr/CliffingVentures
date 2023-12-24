import React from 'react'
import Gallery from './Gallery'

const Detailgallery = () => {
  return (
    <div>
        <div className="p-4 p-md-5 mb-5 text-body-emphasis detailed-main-bg">
        <div className="col-lg-6 px-0 align-text-center">
          <h1 className="display-5 fw-bold text-white">Gallery</h1>
          <p className="my-3 text-white">
            Our financial broking firms facilitate trading of various instruments. Full-service brokers provide comprehensive services, while discount brokers offer cost-effective options. Research, fees, and reputation.</p>
        </div>
      </div>
      <Gallery/>
    </div>
  )
}

export default Detailgallery