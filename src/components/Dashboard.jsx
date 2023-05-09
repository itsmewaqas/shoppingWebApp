import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/Footer';

function Dashboard(props) {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default Dashboard;
