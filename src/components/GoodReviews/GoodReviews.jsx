import React from 'react'
import './GoodReviews.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import GoodReviewsData from './GoodReviews.json'
import ReviewCard from '../ReviewCard/ReviewCard'

const GoodReviews = () => {
  return (
    <>
    <section className="good-reviews">
        <div className="container">
            <div className="good-reviews__wrapper">
                <div className="good-reviews__title">
                <SectionTitle position='left' >OUR HAPPY CUSTOMERS</SectionTitle>

                <div className="good-reviews__swiper">
                    <img src="/arrow2.svg" alt="" />
                    <img src="/arrow1.svg" alt="" />
                    </div>


                          </div> 
                     <div className="good-review__wrapper">
                    {GoodReviewsData.map(card => (
                    <>
                    <ReviewCard key={card.id} card={card} />    
                    </>

                   
                ))}

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GoodReviews