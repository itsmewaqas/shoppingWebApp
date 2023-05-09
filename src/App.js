import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import '../src/assets/css/App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Nomatch from './sharedComponents/Nomatch';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
