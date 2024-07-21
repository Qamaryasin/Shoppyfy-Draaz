import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='col-12 footer_main bg-dark row'>
    
    <div className='col-sm-6 col-lg-3 col-12 py-2 py-md-3'>

    <h4>Customer Care</h4>

    <Link to="" className='footer_link' ><p>Help Center</p></Link>
    <Link to="" className='footer_link'><p>How to Buy</p></Link>
    <Link to="" className='footer_link'><p>Corporate & Bulk Purchasing</p></Link>
    <Link to="" className='footer_link'><p>Returns & Refunds</p></Link>
    <Link to="" className='footer_link'><p>Daraz Shop</p></Link>
    <Link to="" className='footer_link'><p>Contact Us</p></Link>
    <Link to="" className='footer_link'><p>Purchase Protection</p></Link>
    <Link to="" className='footer_link'><p>Daraz Pick up Points</p></Link>

    </div>


    <div className='col-sm-6 col-lg-3 col-12 py-2 py-md-3'>
    <h4>Shoppy</h4>
    
    <Link to="" className='footer_link' ><p>About Us</p></Link>
    <Link to="" className='footer_link' ><p>Digital Payments</p></Link>
    <Link to="" className='footer_link' ><p>Shoppy Donates</p></Link>
    <Link to="" className='footer_link' ><p>Shoppy Blog</p></Link>
    <Link to="" className='footer_link'><p>Terms & Conditions</p></Link>
    <Link to="" className='footer_link'><p>Privacy Policy</p></Link>
    <Link to="" className='footer_link'><p>Online Shopping App</p></Link>
    <Link to="" className='footer_link'><p>Online Grocery Shopping</p></Link>
    <Link to="" className='footer_link'><p>Shoppy Exclusive</p></Link>
    </div>
    
    <div className='col-sm-6 col-lg-3 col-12 py-2 py-md-3'>
    <h4>Make Money With Us</h4>
    
    <Link to="" className='footer_link' ><p>Shoppy University</p></Link>
    <Link to="" className='footer_link' ><p>Sell on Shoppy</p></Link>
    <Link to="" className='footer_link' ><p>Join Shoppy Affiliate Program</p></Link>
    </div>

    <div className='col-sm-6 col-lg-3 col-12 py-2 py-md-3'>
   <h4>Contact US</h4>
    
    <Link to="" className='footer_link' ><p>NTN Number : 2020202-6</p></Link>
    <Link to="" className='footer_link' ><p>STRN Number : 000000000</p></Link>
    <Link to="" className='footer_link' ><p>E-mail : mutaharmuzammal20@gmail.com</p></Link>

    <h4>Follow US</h4>
    <div className='social_icons'>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-facebook-f"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-solid fa-globe"></i>
    <i class="fa-brands fa-youtube"></i>
    </div>
    
    
    </div>

    </div>
  )
}

export default Footer