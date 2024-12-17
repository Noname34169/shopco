import React from 'react'
import './ReviewsWrap.scss'
import ReviewsData from './reviews.json'
import ReviewCard from '../ReviewCard/ReviewCard'
import Btn from '../Btn/Btn'

const ReviewsWrap = () => {
  return (
    <>
    <section className="reviewswrap">
        <div className="container">
            <div className="reviews__wrapper">
            <div className="review__wrapper">
                {ReviewsData.map(card => (
                    <>
                    <ReviewCard key={card.id} card={card} />    
                    </>

                   
                ))}
                
            </div> 
        
            <Btn>Load More Reviews</Btn>
        </div>                
            </div>

    </section>
    </>
  )
}

export default ReviewsWrap