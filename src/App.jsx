import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import component
import Navbar from './components/section/Navbar';
import Footer from './components/section/Footer';

// import pages
import Home from './pages/Home';
import Product from './pages/Product';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />


        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />

      </BrowserRouter>


    </>
  )
}

export default App
