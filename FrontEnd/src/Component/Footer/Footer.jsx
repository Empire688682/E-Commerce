import React from 'react';
import './Footer.css';
import Logo_Icon from '../Asset/logo.png';
import Instagram_Icon from '../Asset/instagram_icon.png';
import Pintester_Icon from '../Asset/pintester_icon.png'
import Whatsapp_Icon from '../Asset/whatsapp_icon.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <NavLink to="/" style={{textDecoration:"none", color:"black"}}><div className="footer-logo">
        <img src={Logo_Icon} />
        <h1>Empire Store</h1>
      </div></NavLink>
      <div className="footer-links">
        <li className='links'>Company</li>
        <li className='links'>Product</li>
        <li className='links'>Offices</li>
        <li className='links'>About</li>
        <li className='links'>Contact</li>
      </div>
      <div className="footer-social-links">
        <div>
            <img src={Instagram_Icon} />
        </div>
        <div>
            <img src={Pintester_Icon} />
        </div>
        <div>
            <img src={Whatsapp_Icon} />
        </div>
      </div>
      <hr />
        <p className='copyright'>Copyright &copy; 2023 Allright Reserved</p>
    </div>
  )
}

export default Footer
