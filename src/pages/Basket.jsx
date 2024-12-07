import React from 'react'
import SectionTitle from '../components/SectionTitle/SectionTitle'

const Basket = () => {
  return (
    <>
   
    <section className="basket">
      <div className="container">
        <div className="basket__wrapper">
        <SectionTitle position='left' >YOUR CART</SectionTitle>

        <div className="basker__wrap">
          <div className="basker__box">
            
          </div>
          <div className="basket__totalprice">

          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Basket