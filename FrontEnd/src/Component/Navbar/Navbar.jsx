import React, { useState } from 'react';
import Logo from '../Asset/logo.png';
import Cart from '../Asset/cart_icon.png'
import './Navbar.css'
import { BrowserRouter as Router,Route,Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop")
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="Logo"/>
        <h1>EMPIRE STORE</h1>
      </div>
      <div className="menu">
        <nav>
            <ul>
                <li onClick={() => setMenu("Shop")}><NavLink style={{textDecoration:"none"}} to="/">Shop </NavLink> {menu === "Shop"? <hr/>:null}</li>
                <li onClick={() => setMenu("Mens")}><NavLink style={{textDecoration:"none"}} to="/mens">Mens</NavLink> {menu === "Mens"? <hr/>:null}</li>
                <li onClick={() => setMenu("Womens")}><NavLink style={{textDecoration:"none"}} to="/womens">Womens</NavLink> {menu === "Womens"? <hr/>:null}</li>
                <li onClick={() => setMenu("Kids")}><NavLink style={{textDecoration:"none"}} to="/kids">Kids</NavLink> {menu === "Kids"? <hr/>:null}</li>
            </ul>
        </nav>
      </div>
      <div className="login-cart">
        <button><NavLink style={{textDecoration:"none"}} to="/loginSignup">Login </NavLink></button>
        <div className="cart-con">
        <NavLink style={{textDecoration:"none"}} to="/cart"><img src={Cart} alt="Img"/></NavLink>
        <div className="menu-count">0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
