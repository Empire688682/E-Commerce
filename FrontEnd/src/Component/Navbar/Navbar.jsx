import React, { useState } from 'react';
import Logo from '../Asset/logo.png';
import Cart from '../Asset/cart_icon.png'
import './Navbar.css'
import { BrowserRouter as Router,Route, NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../Context';

const Navbar = () => {
  const {getcartValue} = useGlobalContext();
    const [menu, setMenu] = useState("Shop")
  return (
    <div className='navbar'>
      <NavLink style={{textDecoration:"none"}} to="/">
      <div className="logo">
        <img src={Logo} alt="Logo"/>
        <h1>EMPIRE STORE</h1>
      </div>
      </NavLink>
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
        <NavLink style={{textDecoration:"none"}} to="/loginSignup"> <button>Login</button> </NavLink>
        <div className="cart-con">
        <NavLink style={{textDecoration:"none"}} to="/cart"><img src={Cart} alt="Img"/></NavLink>
        <div className="menu-count">{getcartValue()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
