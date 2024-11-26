import React from 'react'
import './DressStyle.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const DressStyle = () => {
  return (
    <>
    <section className="dressstyle">
        <div className="contaner">
            <div className="dressstyle__wrapper">
            <SectionTitle>BROWSE BY dress STYLE</SectionTitle>
            <div className="dressstyle__wrap">
                <img src="/style--img1.png" alt="" className="card__1" />
                <img src="/style--img2.png" alt="" className="card__2" />
                <img src="/style--img3.png" alt="" className="card__3" />
                <img src="/style--img4.png" alt="" className="card__4" />

                <img src="/style-img1.png" alt="" className="card_1" />
                <img src="/style-img2.png" alt="" className="card_2" />
                <img src="/style-img3.png" alt="" className="card_3" />
                <img src="/style-img4.png" alt="" className="card_4" />


            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default DressStyle