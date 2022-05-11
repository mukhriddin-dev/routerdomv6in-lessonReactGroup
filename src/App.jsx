import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './UI/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import MenuTop from './Components/MenuTop';

const App = () => {



  return (
    <>


      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />}>

            <Route path="/contact/menu" element={<Menu/>} />
            <Route path="/contact/menutop" element={<MenuTop/>} />

          </Route>

        </Routes>

      </BrowserRouter>



    </>
  );
};

export default App;