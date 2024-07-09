import React from 'react'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import Home from "./Pages/Home"
import '../src/styles/App.css'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
