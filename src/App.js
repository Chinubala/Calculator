import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Calculation from './pages/Calculation.js';
import Greatest from './pages/Greatest.js';
import Bmi from './pages/Bmi.js';



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Calculation />} />
          <Route path="/calculation" element={<Calculation />} />
          <Route path="/greatest" element={<Greatest />} />
          <Route path="/bmi" element={<Bmi />} />
       
        
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;