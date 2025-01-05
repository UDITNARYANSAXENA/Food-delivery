import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>it is an online platform that lets users order food from various restaurants and have it delivered to their location. It features restaurant listings, menus with prices, search filters, order tracking, multiple payment options, and customer reviews. Popular examples include Uber Eats, Zomato, and DoorDash, providing convenient access to a wide range of cuisines.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+917505266931</li>
                    <li>udit9407@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; udit9407@ - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer