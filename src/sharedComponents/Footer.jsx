import React, { useState, useEffect } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";
import footerBanner from '../assets/img/footerBanner.jpg'

function Footer(props) {

  return (
    <footer>
      <div className='fcontainer'>
        <div>
          <img src={footerBanner} alt="" />
        </div>
        <div>
          <ul>
            <li>Doormat Nav igation</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
            <li><Link to="/OrderOnline">OrderOnline</Link></li>
            <li><Link>Login</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Contact</li>
            <li><a href='#_'>Address: Karachi Pakistan</a> </li>
            <li><a href='#_'>Cell: +923222946642</a> </li>
            <li><a href='#_'>Email: muhammadwaqas642@gmail.com</a> </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Social Media Links</li>
            <li><a href='https://pk.linkedin.com/in/muhammad-waqas-43498b47' target={'_blank'}>https://linkedin.com</a></li>
            <li><a href='https://github.com/itsmewaqas' target={'_blank'}>https://github.com</a> </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;