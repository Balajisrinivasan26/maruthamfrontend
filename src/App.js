import React from 'react';
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer'
import Product from './components/Products'
// import ProductList from './components/ProductList'
 import Rating from './components/Rating';
import Register from './components/Register';
 import Login from './components/Login';
import ContactForm from './components/Contact';
import Admin from './components/Admin';
import Products from './components/Products';
import Manual from './components/Manuals';
import CartPopup from './components/Cart';
//import Footer from './components/Footer'

const App = () => {
  return (
    
    <Router>
      <div className='max-w-[1440px] mx-auto bg-white'>
    <Header/>
    {/* <Register/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path ='/adminadd' element={<Admin/>}></Route>
      <Route path='/contact' element={<ContactForm/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<CartPopup/>}></Route>
    <Route path='/Products' element={<Product/>}></Route>
    <Route path='/manual/:id' element={<Manual/>}></Route>
    </Routes> 
    <Footer/>
  </div>
  </Router>
  );
  
};

export default App;


