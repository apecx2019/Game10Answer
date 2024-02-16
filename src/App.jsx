import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Easy } from '../page/easy';
import { Home } from '../page/home';
import { Normal } from '../page/normal';
import './App.css'
import React from 'react';


function App() {

  return (
 
    <BrowserRouter basename='/Game10Answer'>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/normal" element={<Normal />} />
      
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
