import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__boxs">
                    <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    <div className="footer__box">
                        <div className="input">
                            <img src="/Frame.png" alt="" />
                            <p className='footer__p'>Enter your email address</p>
                        </div>
                        <button>Subscribe to Newsletter</button>
                    </div>
                </div>
                <div className="footer__wrap">
                    <div className="footer__contact">
                    <img className='footer__img' src="/SHOP-CO.png" alt="" />
                    <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className="footer__contacts">
                        <img src="/1.png" alt="" />
                        <img src="/2.png" alt="" />
                        <img src="/3.png" alt="" />
                        <img src="/4.png" alt="" />
                    </div>
                    </div>
                    <div className="footer__wrapp">
                    <div className="footer__company">
                        <h3 className='footer__text'>Company</h3>
                        <p className='footer__p'>About</p>
                        <p className='footer__p'>Features</p>
                        <p className='footer__p'>Works</p>
                        <p className='footer__p'>Career</p>
                    </div>
                    <div className="footer__help">
                        <h3 className='footer__text'>Help</h3>
                        <p className='footer__p'>Customer Support</p>
                        <p className='footer__p'>Delivery Details</p>
                        <p className='footer__p'>Terms & Conditions</p>
                        <p className='footer__p'>Privacy Policy</p>
                    </div>
                    <div className="footer__faq">
                        <h3 className='footer__text'>Faq</h3>
                        <p className='footer__p'>Account</p>
                        <p className='footer__p'>Manage Deliveries</p>
                        <p className='footer__p'>Orders</p>
                        <p className='footer__p'>Payments</p>
                    </div>
                    <div className="footer__resources">
                        <h3 className='footer__text'>Resources</h3>
                        <p className='footer__p'>Free eBooks</p>
                        <p className='footer__p'>Development Tutorial</p>
                        <p className='footer__p'>How to - Blog</p>
                        <p className='footer__p'>Youtube Playlist</p>
                    </div>                        
                    </div>


                 </div>

                    <hr style={{margin: '60px 0'}} />               


                <div className="footer__payment">

 

                    <p className="footer__P">Shop.co © 2000-2023, All Rights Reserved</p>
                    
                    <div className="footer__icons">
                        <img src="/visa.png" alt="" />
                        <img src="/mastercard.png" alt="" />
                        <img src="/paypal.png" alt="" />
                        <img src="/apple.png" alt="" />
                        <img src="/google.png" alt="" />
                    </div>
                </div>
              
            </div>
    </footer>
    </>
  )
}

export default Footer