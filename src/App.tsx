/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router';


import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Series from './components/series/series';
import Videos from './components/videos/videos';



export default function App() {
 
    return (
      <div className="App">  
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/video/:id" element={<Videos/>} />
        <Route path="/series" element={<Series/>} />

      </Routes>
        
   
      </div>
    );
  }
