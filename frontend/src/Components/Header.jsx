import React from 'react';
import '../App.css';
import LOGO from '../Assets/logo.png';
import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
      <header className="page-header">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Event">Event</Link>
        <Link to="/App"><img alt="logo" src={LOGO} className="logo-img" /></Link>
        <Link to="/Team">Team</Link>
        <Link to="/RoadMap">Road Map</Link>
        <Link to="/Blog">Blog</Link>
      </header>
    </div>
  );
}  

export default Header;
