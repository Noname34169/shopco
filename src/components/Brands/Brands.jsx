import React from 'react'
import './Brands.scss'

const Brands = () => {
  return (
    <>
    <section className="brands">
      <div className="container">
        <div className="brands__wrapper">
          <img className='brands__logo1' src="brands-1.svg" alt="" />
          <img className='brands__logo2' src="brands-2.svg" alt="" />
          <img className='brands__logo3' src="brands-3.svg" alt="" />
          <img className='brands__logo4' src="brands-4.svg" alt="" />
          <img className='brands__logo5' src="brands-5.svg" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Brands