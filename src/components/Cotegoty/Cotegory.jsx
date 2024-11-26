import React from 'react'
import './Cotegory.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import Btn from '../Btn/Btn'

const Cotegory = () => {
  return (
    <>
    <section className="categoty">
        <div className="container">
            
            <div id='arrivals'><SectionTitle position='center' >NEW ARRIVALS</SectionTitle></div>

            <div className="cotegory__wrapper">
                <Card image={'/card-1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4.5' price='120' stars="⭐⭐⭐⭐" />
                <Card image={'/card-2.png'} name='SKINNY FIT JEANS' rate='3.5' price='240' stars="⭐⭐⭐" />
                <Card image={'/card-3.png'} name='CHECKERED SHIRT' rate='4.5' price='180' stars="⭐⭐⭐⭐" />
                <Card image={'/card-4.png'} name='SLEEVE STRIPED T-SHIRT' rate='5.0' price='130' stars="⭐⭐⭐⭐⭐" />

            </div>

            <Btn>View All</Btn>

            <hr style={{margin: '60px 0'}} />

            
            <div id='selling'><SectionTitle position='center' >top selling</SectionTitle></div>

            <div className="cotegory__wrapper">
                <Card image={'/card-5.png'} name='VERTICAL STRIPED SHIRT' rate='5.0' price='212' stars="⭐⭐⭐⭐⭐" />
                <Card image={'/card-6.png'} name='COURAGE GRAPHIC T-SHIRT' rate='4.0' price='145' stars="⭐⭐⭐⭐" />
                <Card image={'/card-7.png'} name='LOOSE FIT BERMUDA SHORTS' rate='3.0' price='80' stars="⭐⭐⭐" />
                <Card image={'/card-8.png'} name='FADED SKINNY JEANS' rate='4.5' price='210' stars="⭐⭐⭐⭐" />

            </div>

            <Btn>View All</Btn>
        </div>
    </section>
    </>
  )
}

export default Cotegory