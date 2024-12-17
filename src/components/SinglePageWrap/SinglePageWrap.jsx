import React from 'react'
import './SinglePageWrap.scss'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import SectionTitle from '../SectionTitle/SectionTitle'
import Products from '/public/products.json' 

const SinglePageWrap = () => {
    return (
        <>
            <section className="singlepagewrap">
                <div className="container">
                    <div className="singlepagewrap__wrapper">
                        <div className="singlepagewrap__card">
                            <div id='arrivals'><SectionTitle position='center' >You might also like</SectionTitle></div>

                            <div className="cotegory__wrapper">

                                {Products.slice(8, 12).map((card, i) => (
                                    <Link to={`/product/${card.id}`} key={i} className='category__card'>
                                        <Card image={card.image} name={card.name} rate='4.5' price={card.price} stars="⭐⭐⭐⭐" />
                                    </Link>
                                ))}



                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SinglePageWrap