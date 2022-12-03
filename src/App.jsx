import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'

import Home from './seller/pages/home'
import Products from './seller/pages/products'
import Layout from './seller/components/layout'

import Orders from './seller/pages/order';
import Discounts from './seller/pages/discount';
import Customers from './seller/pages/customers';


function App() {
  return (
    <div className="app">
      {/*Admin routes*/}
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route index element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/discounts" element={<Discounts/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
