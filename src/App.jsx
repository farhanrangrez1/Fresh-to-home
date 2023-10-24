import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'

import About from './pages/About';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Navbottom from './component/Navbottom';
import BootemMane from './component/BootemMane';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Navbottom/>
        <Routes>
       <Route path='/'element={ <Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Categories' element={<Categories/>}/>
        </Routes>
         <BootemMane/>
         </Router>
     
    </>
  )
}

export default App