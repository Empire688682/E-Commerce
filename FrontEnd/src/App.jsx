import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Component/Pages/Shop';
import ShopCategory from './Component/Pages/ShopCategory';
import Product from './Component/Pages/Product';
import Cart from './Component/Pages/Cart';
import LoginSignup from './Component/Pages/LoginSignup';

const App = () => {
  return (
    <div className='app-con'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginSignup' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
