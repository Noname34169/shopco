import React, {useState} from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isActive, setIsActive]  = useState(false)


  const toggleBurger = () => {
    setIsActive(!isActive)
  }
  return (
    <>
    <header className="header">
        <div className="container">
            <div className='header__wrapper'>
              <div className="header__wrap">
              <div className="header__header">
              <Link to={'/'}><img className='logo__img' src="/SHOP-CO.png" alt="" /></Link>
                <div className={`header__menu ${isActive ? 'active' : ''}`}>
                    <Link to={'/sale'}>On Sale</Link>
                    <Link to={'/news'}>New Arrivals</Link>
                    <Link to={'/brands'}>Brands</Link>
            </div>                
              </div>

            <div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                <div className='div'></div>
                <div className='div'></div>
                <div className='div'></div>
            </div>                
              </div>

                <div className="header__search">
                  <div className='header__input'>
                    <img src="/search-icon.svg" alt="" />
                   <p>Search for products...</p>
                   </div>
                  <img src="/icon-1.svg" alt="" />
                  <img src="/icon-2.svg" alt="" />
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header