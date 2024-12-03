import React, { useState } from 'react'
import './ProductHero.scss'

const ProductHero = ({ product }) => {

    const [num, setNum] = useState(1) 

    const plus = () => {
        if (num < 15) {
            setNum(num + 1)
        }
    }

    const minus = () => {
        if (num > 1) {
            setNum(num - 1)
        }
    }
  return (
    <>
    <section className="producthero">
        <div className="container">
            <div className="product__wrap">
                <div className="product__images">
                    <div className="product__imgs">
                        <img className='product__img' src={product.image} alt="" />
                        <img className='product__img' src={product.image} alt="" />
                        <img className='product__img' src={product.image} alt="" />
                    </div>
                    <img className='product__image' src={product.image} alt="" />
                </div>

                <div className="product__box">
                    <h1 className='product__name'>{product.name}</h1>
                    <h2 className='product__rating'>⭐⭐⭐⭐ 4/5</h2>

                    <div className="product__price">
                        <s>{Math.floor(product.price * 1.1)} сум</s>
                        <p>{product.price} сум</p>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo ad laboriosam sit quisquam, nisi deleniti tempore. Maiores, numquam animi!</p>
                
                    <hr style={{margin: '30px 0'}} />  

                    <div className="product__add">

                        <div className="product__addnumber">
                            <img onClick={minus} className='product__minus' src="/minus.png" alt="" />
                            <h2 className='product__number' >{num}</h2>
                            <img className='product__plus' onClick={plus} src="/plus.png" alt="" /> 
                        </div>


                    <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductHero