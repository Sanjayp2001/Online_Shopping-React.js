import React from 'react'
import './Footer.css'
import logo from './Assets/logo_big.png'
import insta_logo from './Assets/instagram_icon.png'
import pin_logo from './Assets/pintester_icon.png'
import whatsapp_logo from './Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer_links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer_social_icons">
        <div className="footer_icon_container">
            <img src={insta_logo} alt="" />
        </div>
        <div className="footer_icon_container">
            <img src={pin_logo} alt="" />
        </div>
        <div className="footer_icon_container">
            <img src={whatsapp_logo} alt="" />
        </div>
        </div>
        <div className="footer_copyrights">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
