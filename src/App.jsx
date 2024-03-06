import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import component
import Navbar from './components/section/Navbar';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
