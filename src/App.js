import React from 'react';
import './App.css';
import './Components/Navbar.css';
import Home from "./Routers/Home";
import { Route, Routes } from 'react-router-dom';
import Project from './Routers/Project';
import Contact from './Routers/Contact';
import About from './Routers/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
      </Routes>

    </>
  );
}

export default App;
