import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Component/Pages/Shop';
import ShopCategory from './Component/Pages/ShopCategory';
import Product from './Component/Pages/Product';
import Cart from './Component/Pages/Cart';
import LoginSignup from './Component/Pages/LoginSignup';
import Footer from './Component/Footer/Footer';
import Women_Banner from './Component/Asset/banner_women.png'
import Men_Banner from './Component/Asset/banner_mens.png';
import Kids_Banner from './Component/Asset/banner_kids.png'

const App = () => {
  return (
    <div className='app-con'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men" banner={Men_Banner}/>}/>
        <Route path='/womens' element={<ShopCategory category="women" banner={Women_Banner}/>}/>
        <Route path='/kids' element={<ShopCategory category="kid" banner ={Kids_Banner}/>}/>
        <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginSignup' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
