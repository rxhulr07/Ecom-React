import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategories from './Pages/ShopCategories';
import Product from './Pages/Product'; 
import Cart from './Pages/Cart'; 
import LoginSign from './Pages/LoginSign';  
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/Assets/banner_mens.png'
import women_banner from './Components/Assets/Assets/banner_women.png'
import kid_banner from './Components/Assets/Assets/banner_kids.png'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategories banner={men_banner} category="men" />} />
          <Route path="/kids" element={<ShopCategories  banner={kid_banner} category="kid" />} />
          <Route path="/womens" element={<ShopCategories  banner={women_banner} category="women" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginSign" element={<LoginSign/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
