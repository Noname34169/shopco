import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__box">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button>Shop Now</button>
            <div className="hero__cards">
              <div className="hero__card">
                <h2>200+</h2>
                <p>International Brands</p>
              </div>
              <div className="hero__card actives">
                <h2>2,000+</h2>
                <p>High-Quality Products</p>
              </div>
              <div className="hero__card">
                <h2>30,000+</h2>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <img src="/hero-img.png" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero